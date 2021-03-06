import { Item } from './../Models/Item';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllItems()
  {
    return this.http.get<Item[]>(this.baseUrl +'Items/AllItems');

  }

  gettem(itemId : Number)
  {
    let params = new HttpParams();
    params = params.append('ItemId', itemId.toString());
    return this.http.get<Item>(this.baseUrl+'Items' ,{observe: "response", params});

  }

  getStep()
  {

    return this.http.get<number>(this.baseUrl +"Items/Steps");

  }

  deleteItem(itemId : number)
  {
    return this.http.delete<boolean>(this.baseUrl +'Items/Delete?itemId='+itemId);
  }

  deleteAllItem(stepId : number)
  {
    return this.http.delete<boolean>(this.baseUrl +'Items/DeleteAll?stepId='+stepId);
  }

  addORupdateItem(item : Item)
  {
    return this.http.post<Item>(this.baseUrl +'Items/Update', item);

  }
}
