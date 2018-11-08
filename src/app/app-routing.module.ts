import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'white', pathMatch: 'full' },
  { path: 'white', loadChildren: './white/white.module#WhitePageModule' },
  { path: 'yellow', loadChildren: './yellow/yellow.module#YellowPageModule' },
  { path: 'green', loadChildren: './green/green.module#GreenPageModule' },
  { path: 'oolong', loadChildren: './oolong/oolong.module#OolongPageModule' },
  { path: 'black', loadChildren: './black/black.module#BlackPageModule' },
  { path: 'dark', loadChildren: './dark/dark.module#DarkPageModule' },
  { path: 'puer', loadChildren: './puer/puer.module#PuerPageModule' },
  { path: 'herbal', loadChildren: './herbal/herbal.module#HerbalPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
