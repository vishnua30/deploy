import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProdtransferComponent } from './prodtransfer/prodtransfer.component';
import { ProfileComponent } from './profile/profile.component';

import { AutosuggestComponent } from './autosuggest/autosuggest.component';
import { ManualEntryComponent } from './manual-entry/manual-entry.component';

import { AppRoutingModule } from './app-routing.module';
import { RelocationComponent } from './relocation/relocation.component';
import { FormsModule } from '@angular/forms';
import { InboundComponent } from './inbound/inbound.component';
import { LocationAnalyserComponent } from './location-analyser/location-analyser.component';
import { PlaceAvailComponent } from './place-avail/place-avail.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { NewlocationComponent } from './newlocation/newlocation.component';
import { OutboundComponent } from './outbound/outbound.component';
import { OutLocationComponent } from './out-location/out-location.component';
import { OutExtraComponent } from './out-extra/out-extra.component';
import { SafetystockindComponent } from './safetystockind/safetystockind.component';
import { ProductCraftComponent } from './product-craft/product-craft.component';

import { LoactiondescCompComponent } from './loactiondesc-comp/loactiondesc-comp.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { LginCompComponent } from './lgin-comp/lgin-comp.component';
import { TruckCompComponent } from './truck-comp/truck-comp.component';
import { ReturnCompComponent } from './return-comp/return-comp.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    NavbarComponent,
    ProdtransferComponent,
    ProfileComponent,
  
    AutosuggestComponent,
    ManualEntryComponent,
   
    RelocationComponent,
    InboundComponent,
    LocationAnalyserComponent,
    PlaceAvailComponent,
    NewproductComponent,
    NewlocationComponent,
    OutboundComponent,
    OutLocationComponent,
    OutExtraComponent,
    SafetystockindComponent,
    ProductCraftComponent,
 
  
    LoactiondescCompComponent,
       LoginCompComponent,
       LginCompComponent,
       TruckCompComponent,
       ReturnCompComponent,
       SignupComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
