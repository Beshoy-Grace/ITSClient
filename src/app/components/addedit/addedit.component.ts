import { AlertifyService } from './../../../../services/alertify.service';
import { Item } from './../../Models/Item';
import { ItemService } from './../../Services/item.service';
import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'addedit',
  templateUrl: './addedit.component.html',
  styleUrls: ['./addedit.component.css']
})
export class AddeditComponent implements OnInit  {

 @Input() addEditForm: FormGroup;
  errors: string[];
  @Input()  isIDItem: any;
  @Input()  step: number;
  @Output() IsEdit: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  constructor(private fb: FormBuilder, private itemServices : ItemService,private alertify: AlertifyService) { }


  ngOnChanges(changes: SimpleChanges) {
    if(this.isIDItem != 0)
    {
        this.itemServices.gettem(this.isIDItem).subscribe(res => {
      if (res) {
        console.log(res.body)
        this.addEditForm.get('title').patchValue(res.body.title);
        this.addEditForm.get('description').patchValue(res.body.description);
      }
    }, error => {
      this.alertify.error(error)
    });
    }

  }

  ngOnInit() {

  }




  onSubmit() {

    this.addEditForm.get("step").patchValue ( this.step);
    this.addEditForm.get("id").patchValue ( this.isIDItem);


    this.itemServices.addORupdateItem( this.addEditForm.value).subscribe(response => {
      this.alertify.success("Successfully")
      this.addEditForm.reset();
      this.IsEdit.emit(true);

    }, error => {
      this.alertify.error(error)

      this.errors = error.errors;
    });
  }


}
