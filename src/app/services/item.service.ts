import { Injectable } from '@angular/core';
import { HttpClient,withFetch } from '@angular/common/http';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private httpClient: HttpClient) { }

  getItems(){
   return this.httpClient.get("http://localhost:9700/api/item")

  }

  createItem(item: Item){
    const header = {'content-type':'application/json'}
    const body = JSON.stringify(item)
    return this.httpClient.post("http://localhost:9700/api/item", body, {headers:header})

  }

  // updateItem(id: number | undefined, item: Item){
  //   const header = {'content-type': 'application/json'}
  //   const body = JSON.stringify(item)
  //   return this.httpClient.put(`http://localhost:9700/api/item/${id}`, body, {headers:header})
  // }

  deleteItem(id: number | undefined){
    return this.httpClient.delete(`http://localhost:9700/api/item/${id}`)
  }
}
