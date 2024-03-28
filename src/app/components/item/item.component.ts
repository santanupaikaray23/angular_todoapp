import { Component } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { response } from 'express';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
getItem() {
throw new Error('Method not implemented.');
}

  items:any;
  item: Item | undefined;
  id: number | undefined;
  name: string | undefined;
  

  constructor(private itemService: ItemService){}

  ngOnInit(){
    this.itemService.getItems().subscribe(response =>{
      console.log(response)
      this.items = response
     
  })
    
  
  }
  
 

  createItem(){
    this.item= {id:this.id, name: this.name}
    this.itemService.createItem(this.item).subscribe(response =>{
      console.log('Item created')
      console.log(response)
      this.ngOnInit()
      
    })
  }
  // updateItem(){
  //   this.item= {id:this.id, name: this.name}
  //   this.itemService.updateItem(this.id, this.item).subscribe(response => {
  //     console.log('Update the record successfully')
  //     console.log(response)
  //     this.ngOnInit()
     
  //   })
    
  // }
  deleteItem(){
    this.itemService.deleteItem(this.id).subscribe(response => {
      console.log(response)
      this.ngOnInit()
    })
  }
}
