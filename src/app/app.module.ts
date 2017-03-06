import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { APPRROUTES } from "./app.routes";
import { PreloadSelectedModules } from "./app.preload-strategy";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(APPRROUTES, { preloadingStrategy: PreloadSelectedModules })
    ],
    declarations: [
        AppComponent,
        NavbarComponent
    ],
    providers: [
        PreloadSelectedModules
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
