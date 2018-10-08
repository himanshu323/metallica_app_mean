import { NgModule } from "@angular/core";
import { SignUpComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from "@angular/common";

import { FormsModule } from "@angular/forms";
import { AuthRoutingModule } from "./auth-routing.module";
import { AngularMaterialModule } from "../angular-material.module";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({

    declarations:[
        SignUpComponent,LoginComponent
    ],
    imports:[
        CommonModule,
        AngularMaterialModule,
        FormsModule,
        AuthRoutingModule,
        FlexLayoutModule,
    ]
})
export class AuthModule{


}