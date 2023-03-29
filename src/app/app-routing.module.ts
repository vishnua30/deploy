import { NgModule } from "@angular/core";
import {Routes, RouterModule } from "@angular/router";
import { AutosuggestComponent } from "./autosuggest/autosuggest.component";
import { DemoComponent } from "./demo/demo.component";
import { InboundComponent } from "./inbound/inbound.component";
import { LocationAnalyserComponent } from "./location-analyser/location-analyser.component";
import { LoginCompComponent } from "./login-comp/login-comp.component";
import { ManualEntryComponent } from "./manual-entry/manual-entry.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { NewlocationComponent } from "./newlocation/newlocation.component";
import { NewproductComponent } from "./newproduct/newproduct.component";
import { OutExtraComponent } from "./out-extra/out-extra.component";
import { OutLocationComponent } from "./out-location/out-location.component";
import { OutboundComponent } from "./outbound/outbound.component";
import { PlaceAvailComponent } from "./place-avail/place-avail.component";
import { ProdtransferComponent } from "./prodtransfer/prodtransfer.component";
import { ProductCraftComponent } from "./product-craft/product-craft.component";
import { ProfileComponent } from "./profile/profile.component";
import { RelocationComponent } from "./relocation/relocation.component";
import { ReturnCompComponent } from "./return-comp/return-comp.component";
import { SafetystockindComponent } from "./safetystockind/safetystockind.component";
import { SignupComponent } from "./signup/signup.component";
import { TruckCompComponent } from "./truck-comp/truck-comp.component";




const routes: Routes = [
    
    {
        path:'',
        component: LoginCompComponent
    },
    {
        path:'signup',
        component: SignupComponent
    },

    {
        path:'navbar',
        component:NavbarComponent,
        children:[
            
            {
              path:"",
              component: DemoComponent
            },
            
    {
        path:'product-transfer/relocation/autosuggest',
        component: AutosuggestComponent
    },
    {
        path:'product-transfer/relocation',
        component: RelocationComponent
    },
    {
        path:'product-transfer/inbound',
        component: InboundComponent
    },
    {
        path:'product-transfer/inbound/location-analyse',
        component: LocationAnalyserComponent

    },
    {
        path:'product-transfer/inbound/location-analyse/blocking',
        component: PlaceAvailComponent
        
    },
    
    {
        path:'product-transfer/newproduct',
        component: NewproductComponent
    },
    {
        path:'product-transfer/newlocation',
        component: NewlocationComponent
    },
    {
        path:'product-transfer/outbound',
      component:OutboundComponent,
      children:[
        // {
        // path:"",
        // component:OutExtraComponent
        // },
        {
          path:"outlocation",
          component: OutLocationComponent
        },
       
    ]
    },
    {
        path:"safety",
        component:SafetystockindComponent
    },
    {
        path:"product-transfer/product-cart",
        component:ProductCraftComponent
    },
    {
        path:"product-transfer",
        component:ProdtransferComponent
    },
    {
        path:"profile",
        component:ProfileComponent
    },
    {
        path:"truck",
        component:TruckCompComponent
    },
    {
        path:"retrn",
        component:ReturnCompComponent
    },
    
    {
        path:'product-transfer/relocation/manual-entry',
        component: ManualEntryComponent
    }
           
    ] 
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}