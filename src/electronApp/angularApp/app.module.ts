import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './components/App/app.component';
import { ConnectFormComponent } from './components/connect-form/connect-form.component';
import { RoutingModule } from './routing/routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/navigation/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { StatusComponent } from './components/status/status.component';
import { DebugComponent } from './components/debug/debug.component';
import { PrintComponent } from './components/print/print.component';
import { DragDropDirective } from './ directives/dragDropDirective';
import { CameraComponent } from './components/camera/camera.component';
import { ConnectionErrorDialogComponent } from './components/connection-error-dialog/connection-error-dialog.component';
import { StoprPrintingConfirmationDialogComponent } from './components/stopr-printing-confirmation-dialog/stopr-printing-confirmation-dialog.component';

/**
 * The app module.
 */
@NgModule({
  declarations: [
    AppComponent,
    ConnectFormComponent,
    HeaderComponent,
    AboutComponent,
    StatusComponent,
    DebugComponent,
    PrintComponent,
    DragDropDirective,
    CameraComponent,
    ConnectionErrorDialogComponent,
    StoprPrintingConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
