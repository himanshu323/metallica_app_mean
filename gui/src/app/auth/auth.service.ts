import { Injectable } from "@angular/core";

import { AuthData } from "src/app/auth/auth.model";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { Route, Router } from "@angular/router";
import { environment } from "../../environments/environment";

@Injectable({providedIn:'root'})

export class AuthService{


    AUTH_API=environment.apiUrl+ "api/user/"
    

    private token:string;

    private userId:string;

    private tokenTimer;

    private isAuthenticated=false;

    private isRegistered=false;


    private authStatusListener=new Subject<boolean>();

    private authUserRegistered=new Subject<boolean>();

    constructor(private http:HttpClient,private router:Router){

    }

    getUserId(){
        return this.userId;
    }

    getIsAuthenticated(){
        return this.isAuthenticated;
    }

    getIsRegistered(){
        return this.isRegistered;
    }

    getAuthStatusListener(){

        return this.authStatusListener.asObservable();

    }

    getAuthUserRegisteredListener(){

        return this.authUserRegistered.asObservable();

    }
    getToken(){
        return this.token;
    }

    createUser(email:string,password:string){



        let auth:AuthData={
            email,password
        }

        this.http.post(this.AUTH_API+ "signUp",auth).subscribe((data)=>{

        console.log(data);
        this.isRegistered=true;
        this.router.navigate(['/']);
        this.authUserRegistered.next(true);
        },(error)=>{

            this.authStatusListener.next(false);
        })

    }


    login(email:string,password:string){

        let authData:AuthData={
            email,password
        }

        this.http.post<{token:string,expiresIn:number,userId:string}>(this.AUTH_API+"login",authData).subscribe(response=>{

        this.token=response.token;

        if(this.token){

        // setTimeout(()=>{

        //     this.logOut();
        // },response.expiresIn*1000)

        this.setAutoTimer(response.expiresIn)
        const now=new Date();
        const expirationDate=new Date(now.getTime()+ response.expiresIn*1000);

        this.saveAuthData(this.token,expirationDate,response.userId);

        this.userId=response.userId;



        this.isAuthenticated=true;

        this.authStatusListener.next(true);

        this.router.navigate(['/trades']);

        }

        }, (error)=>{

            console.log("Inside")

            this.authStatusListener.next(false);
        })
    }

    logOut(){

        this.token=null;
        this.isAuthenticated=false;
        this.authStatusListener.next(false);
        this.removeAuthData();

        clearTimeout(this.tokenTimer);

        this.router.navigate(['/']);

    }


    saveAuthData(token:string,expiresIn:Date,userId:string){

        localStorage.setItem("token",token);

        localStorage.setItem("expirationDate",expiresIn.toISOString());

        localStorage.setItem("userId",userId)
    }


    removeAuthData(){

        localStorage.removeItem("token");

        localStorage.removeItem("expirationDate");

        localStorage.removeItem("userId");
    }


    getAuthData(){

        let token =localStorage.getItem("token");

        let expirationDate=localStorage.getItem("expirationDate");

        let userId=localStorage.getItem("userId")

        if(!token || !expirationDate ){
            return;
        }

        return{
            token,expirationDate:new Date(expirationDate),userId
        }
    }


    setAutoTimer(duration){

       this.tokenTimer= setTimeout(()=>{

            this.logOut();
        },duration*1000)


    }

    autoAuthUser(){

        let authData=this.getAuthData();

        if(!authData){
            return;
        }

        let now =new Date();

        let expiresIn=authData.expirationDate.getTime()-now.getTime();

        if(expiresIn>0){

            this.userId=authData.userId;

            this.setAutoTimer(expiresIn/1000);

            this.authStatusListener.next(true);

            this.isAuthenticated=true;

            this.token=authData.token;
        }
    }

}