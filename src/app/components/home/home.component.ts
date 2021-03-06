import { Step } from './../../Models/Step';
import { StepService } from './../../Services/step.service';
import { AlertifyService } from './../../../../services/alertify.service';
import { Item } from './../../Models/Item';
import { ItemService } from './../../Services/item.service';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  addEditForm: FormGroup;
  isLinear = false;
  // formGroup : FormGroup;
  // form: FormArray;
  Items: Item[];
  step:number;
   IDitem:Number=0;
stepNo:Step[] ;
  constructor(private fb: FormBuilder,private _formBuilder: FormBuilder,private itemService: ItemService, private alertify: AlertifyService, private stepServices :StepService) {
  }


  ngOnInit() {

    // this.formGroup = this._formBuilder.group({
    //   form : this._formBuilder.array([this.init()])
    // })

   // console.log(this._formBuilder)
   this.getAllSteps();
   // this.addItem();
    this.getAllItems();
    this.createAddEditForm();
  }

 Edit(event)
 {
  this.getAllItems();
 }

  createAddEditForm() {
    this.addEditForm = this.fb.group({
      title: [null, [Validators.required]],
      id: [null, [Validators.required]],
      description: [null, [Validators.required]],
      step: [null]
    });
  }

  // init(){
  //   return this._formBuilder.group({
  //     cont :new FormControl('', [Validators.required]),
  //   })
  // }

  getAllSteps()
  {
    this.stepServices.getAllSteps().subscribe(res => {
      this.stepNo = res;
    })
  }
  async addItem(){
    // this.form = this.formGroup.get('form') as FormArray;

    // this.form.push(this.init());
    //this.stepNo.push(this.stepNo.length  +1)
    var newStep :  Step;
   await this.stepServices.addStep().subscribe(res => {
     console.log("before add step")
    })
    
 
   
    this.alertify.success("New step added")
    setTimeout(()=>{                        
      this.getAllSteps();
      this.getAllItems();
 }, 1000);
    console.log(this.stepNo)

  }
  async deleteItem(stepId)
  {


    // this.form = this.formGroup.get('form') as FormArray;
    // this.form.removeAt(this.form.length - 1);
    // console.log(i)
    // this.stepNo.splice(i,1);
   await this.stepServices.deleteStep(stepId).subscribe(res => {
      
      
     
     })

    this.itemService.deleteAllItem(stepId).subscribe(res => {
      this.alertify.success(" step deleted")
     

    },err => {
      this.alertify.error(err.errors)
    })
    setTimeout(()=>{                           
      this.getAllSteps();
      this.getAllItems();
 }, 1000);
   
    console.log(this.stepNo)
  }
  getItemNumber(itemId : Number)
  {
    this.IDitem = itemId;

  }

  getAllItems()
  {
    this.itemService.getAllItems().subscribe(res => {
      this.Items = res ;

    },err => {
      this.alertify.error(err.errors)
    })
  }

  callItems(check : boolean)
  {
    this.getAllItems();
  }
  addItemTiDB()
  {
    this.addEditForm.reset();
  }
}
