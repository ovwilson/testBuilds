import { NgModule }       from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule }   from "@angular/router";
import { HomeComponent } from "./home.component";
import { APPRROUTES } from "./home.routing";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(APPRROUTES)
  ],
  declarations :[
    HomeComponent
  ],
  exports: [
    RouterModule
  ]
})
export class HomeModule {}