import { AddeditComponent } from './components/addedit/addedit.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CdkStepperModule} from '@angular/cdk/stepper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ItemComponent } from './components/item/item.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ServerErrorComponent } from './components/server-error/server-error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StepperComponent,
    ItemComponent,
    InputTextComponent,
    AddeditComponent,
    NavbarComponent,
    MainComponent,
    NotFoundComponent,
    ServerErrorComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
     CdkStepperModule,
     FormsModule,
     ReactiveFormsModule,
     MatAutocompleteModule,
     MatBadgeModule,
     MatBottomSheetModule,
     MatButtonModule,
     MatButtonToggleModule,
     MatCardModule,
     MatCheckboxModule,
     MatChipsModule,
     MatStepperModule,
     MatDatepickerModule,
     MatDialogModule,
     MatDividerModule,
     MatExpansionModule,
     MatGridListModule,
     MatIconModule,
     MatInputModule,
     MatListModule,
     MatMenuModule,
     MatNativeDateModule,
     MatPaginatorModule,
     MatProgressBarModule,
     MatProgressSpinnerModule,
     MatRadioModule,
     MatRippleModule,
     MatSelectModule,
     MatSidenavModule,
     MatSliderModule,
     MatSlideToggleModule,
     MatSnackBarModule,
     MatSortModule,
     MatTableModule,
     MatTabsModule,
     MatToolbarModule,
     MatTooltipModule,
     MatTreeModule,
     HttpClientModule,


  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  exports: [AddeditComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
