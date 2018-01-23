import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../views/home/home.component';
import { AboutComponent } from '../views/about/about.component';
import { UserDetailsComponent } from '../views/user-details/user-details.component';
import { GalleryComponent } from '../views/gallery/gallery.component';
import { MethodAComponent } from '../views/methods/method-a/method-a.component';
import { MethodBComponent } from '../views/methods/method-b/method-b.component';
import { MethodCComponent } from '../views/methods/method-c/method-c.component';
import { MethodDComponent } from '../views/methods/method-d/method-d.component';
import { MethodEComponent } from '../views/methods/method-e/method-e.component';
import { MethodFComponent } from '../views/methods/method-f/method-f.component';
import { MethodGComponent } from '../views/methods/method-g/method-g.component';

const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'user/:id', component:UserDetailsComponent},
  { path: 'gallery', component: GalleryComponent },
  { path: 'gallery/functions', component: MethodAComponent },
  { path: 'gallery/ngfor', component: MethodBComponent },
  { path: 'gallery/ngif', component: MethodCComponent },
  { path: 'gallery/binding', component: MethodDComponent },
  { path: 'gallery/ngclass', component: MethodEComponent },
  { path: 'gallery/ngstyle', component: MethodFComponent },
  { path: 'gallery/pipes', component: MethodGComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
