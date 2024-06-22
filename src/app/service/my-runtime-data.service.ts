import { Injectable } from '@angular/core';
import { DataSubscription, RuntimeData, RuntimeDataService } from '../../sdk/data-service.service';

@Injectable({
  providedIn: 'root'
})
export class MyRuntimeDataService implements RuntimeData{

  constructor() {
    console.log("MyRuntimeDataService started.");
   }

   async createSubscription() {
    console.log("MyRuntimeDataService.createSubscription called");
    return {"id" : "1"};
   }  
}
