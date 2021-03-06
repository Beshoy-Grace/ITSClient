import { AlertifyService } from './../../../../services/alertify.service';
import { Item } from './../../Models/Item';
import { ItemService } from './../../Services/item.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  
  @Input() item: Item;
  @Output() itemNumber: EventEmitter<Number> = new EventEmitter<Number>();
  @Output() isDelete: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private itemService: ItemService, private alertify: AlertifyService) { }

  ngOnInit() {
   
  }


  deleteItem(itemId)
  {
    this.itemService.deleteItem(itemId).subscribe(res => {
      this.isDelete.emit(true);
      this.alertify.success("Item deleted")
      console.log("Done")
    }, err => {
      this.alertify.error(err.errors)

    })


  }

  GetItem(itemId: Number) {

    this.itemNumber.emit(itemId);
  }
}
