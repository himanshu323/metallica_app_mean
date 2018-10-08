const request=require("supertest");

const expect=require("expect")
const {ObjectID}=require("mongodb")

let {app}=require("../server")

let { users,userTokens,trades,populateUsers,populateTrades}=require("./seed/server.seed")
let User=require("../models/user");


describe("Test the SignUp/Login routes",()=>{



        beforeEach(populateUsers);

  


        it("should be able to register the user if valid email and password is submitted",(done)=>{

            let user={
                _id:null,
                
                email:"testC@test.com",
                
                password:"C1234@testing"
                
                
                };
            request(app).post("/api/user/signUp")
            .send(user)
            .expect(201)
            .expect(resp=>{
                expect(resp.body.message).toBe("User posted successfully")

                expect(resp.body.result.email).toBe(user.email);
            
            })
            .end((err,resp)=>{

                if(err){
                    return done(err);
                }

                User.find({email:user.email}).then(res=>{

                    expect(res.length).toBe(1);

                    expect(res[0].email).toBe(user.email)

                    done();

            }).catch(err=>done(err));
        })

    })

    it("should not be able to register the user if duplicate emailId is submitted",(done)=>{

        let user={
            _id:null,
            
            email:"testB@test.com",
            
            password:"C1234@testing"
            
            
            };
        request(app).post("/api/user/signUp")
        .send(user)
        .expect(400)
        .expect(resp=>{
            expect(resp.body.message).toBe("Duplicate Email Id, Please provide a new one")

           
        
        })
        .end(done);

})


it("should  be able to login the user if valid emailId and password is submitted",(done)=>{

    let user={
        _id:null,
        
        email:"testB@test.com",

        password:"B1234@testing"
        
        
        };
    request(app).post("/api/user/login")
    .send(user)
    .expect(200)
    .expect(resp=>{
        expect(resp.body.userId).toBe(users[1]._id.toHexString())

       
    
    
    })
    .end(done);

})

it("should not be able to login the user if invalid password is submitted",(done)=>{

    let user={
        _id:null,
        
        email:"testB@test.com",

        password:"B1299994@testing"
        
        
        };
    request(app).post("/api/user/login")
    .send(user)
    .expect(401)
    .expect(resp=>{
        expect(resp.body.message).toBe("Invalid password : Auth Failed")

       
    
    
    })
    .end(done);

})


it("should not be able to login the user if invalid emailId is submitted",(done)=>{

    let user={
        _id:null,
        
        email:"testC@test.com",

        password:"B1299994@testing"
        
        
        };
    request(app).post("/api/user/login")
    .send(user)
    .expect(401)
    .expect(resp=>{
        expect(resp.body.message).toBe("Invalid emailId : Auth Failed")

       
    
    
    })
    .end(done);

})

})