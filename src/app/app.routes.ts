import { Routes } from "@angular/router";

export const APPRROUTES: Routes = [
  { path: "", redirectTo: '/dashboard', pathMatch: 'full' },
  { path: "home", loadChildren: "./home/home.module#HomeModule", data: { preload: true } },
  { path: "dashboard", loadChildren: "./dashboard/dashboard.module#DashboardModule", data: { preload: true } },
  { path: "**", loadChildren: "./dashboard/dashboard.module#DashboardModule", data: { preload: true } }
];
