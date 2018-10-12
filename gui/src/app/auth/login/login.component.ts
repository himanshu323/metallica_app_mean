import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "src/app/auth/auth.service";
import { Subscription } from "rxjs";


@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    updateSub: Subscription;


    isLoading = false;

    constructor(private authService: AuthService) {


    }

    ngOnInit() {

        this.updateSub = this.authService.getUpdateLog().subscribe(auth => {
            this.isLoading = false;
        })
    }

    onLogin(form: NgForm) {

        this.isLoading = true;
        if (form.invalid) {
            this.isLoading = false;
            return;
        }

        this.authService.login(form.value.email, form.value.password);


        form.resetForm();



    }

    ngOnDestroy(): void {
        this.updateSub.unsubscribe();
    }
}