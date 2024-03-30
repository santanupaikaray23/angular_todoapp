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
onSubmit: any;



  items:any;
  item: Item | undefined;
  id: number | undefined;
  name: string | undefined;
  todoForm: any;
  

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
    if (this.todoForm.valid) {
      console.log(this.name);
      // Proceed with item creation
  }
  }
  // updateItem(){
  //   this.item= {id:this.id, name: this.name}
  //   this.itemService.updateItem(this.id, this.item).subscribe(response => {
  //     console.log('Update the record successfully')
  //     console.log(response)
  //     this.ngOnInit()
     
  //   })
    
  // }
  deleteItem(itemId: number) {
    this.itemService.deleteItem(itemId).subscribe({
        next: (response) => {
            console.log(response);
            // Remove the deleted item from the items array to update the UI
            this.items = this.items.filter((item: { id: number; }) => item.id !== itemId);
        },
        error: (error) => {
            console.error('Error deleting item with id', itemId, error);
        }
    });
}
}
