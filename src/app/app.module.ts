import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { DataService } from './services/data.service';
import { AppRoutingModule } from './config/app-routing.module';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { UserDetailsComponent } from './views/user-details/user-details.component';
import { GalleryComponent } from './views/gallery/gallery.component';
import { MethodAComponent } from './views/methods/method-a/method-a.component';
import { MethodBComponent } from './views/methods/method-b/method-b.component';
import { MethodCComponent } from './views/methods/method-c/method-c.component';
import { MethodDComponent } from './views/methods/method-d/method-d.component';
import { MethodEComponent } from './views/methods/method-e/method-e.component';
import { MethodFComponent } from './views/methods/method-f/method-f.component';
import { MethodGComponent } from './views/methods/method-g/method-g.component';
import { MethodHComponent } from './views/methods/method-h/method-h.component';
import { MethodIComponent } from './views/methods/method-i/method-i.component';
import { MethodJComponent } from './views/methods/method-j/method-j.component';
import { MethodKComponent } from './views/methods/method-k/method-k.component';
import { MethodLComponent } from './views/methods/method-l/method-l.component';
import { MethodMComponent } from './views/methods/method-m/method-m.component';


@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    UserDetailsComponent,
    GalleryComponent,
    MethodAComponent,
    MethodBComponent,
    MethodCComponent,
    MethodDComponent,
    MethodEComponent,
    MethodFComponent,
    MethodGComponent,
    MethodHComponent,
    MethodIComponent,
    MethodJComponent,
    MethodKComponent,
    MethodLComponent,
    MethodMComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
