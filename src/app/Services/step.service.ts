import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Step } from '../Models/Step';


@Injectable({
  providedIn: 'root'
})
export class StepService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllSteps()
  {
    return this.http.get<Step[]>(this.baseUrl +'Steps/AllSteps');

  }

  // gettem(itemId : Number)
  // {
  //   let params = new HttpParams();
  //   params = params.append('ItemId', itemId.toString());
  //   return this.http.get<Item>(this.baseUrl ,{observe: "response", params});

  // }

  getStep()
  {

    return this.http.get<number>(this.baseUrl +"Steps/Steps");

  }

  deleteStep(stepId : number)
  {
    return this.http.delete<boolean>(this.baseUrl +'Steps/Delete?stepId='+stepId);
  }

  // deleteAllItem(stepId : number)
  // {
  //   return this.http.delete<boolean>(this.baseUrl +'/DeleteAll?stepId='+stepId);
  // }

  addStep()
  {
    return this.http.post<Step>(this.baseUrl +'Steps/AddStep', {});

  }
}

