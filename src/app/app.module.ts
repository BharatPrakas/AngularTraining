import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CoreModule } from './core/core.module';
import { MatNativeDateModule } from '@angular/material/core';
import { TableDynamicComponent } from './shared/table-dynamic/table-dynamic.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';
import { AngularFireMessaging, AngularFireMessagingModule } from '@angular/fire/compat/messaging';
import { AngularFireModule } from '@angular/fire/compat';
@NgModule({
  declarations: [
    AppComponent,
    TableDynamicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    MatNativeDateModule,
    HttpClientModule,
    NgxChartsModule,
    NgxHideOnScrollModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCqrIxCgLkIobrC0Z8W0jet0I66DkYUhGw",
      authDomain: "push-notification-8493f.firebaseapp.com",
      projectId: "push-notification-8493f",
      storageBucket: "push-notification-8493f.appspot.com",
      messagingSenderId: "471802089646",
      appId: "1:471802089646:web:2002f01645af539b241d3f",
      measurementId: "G-DJF9FX8WMF"
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
