import { Component, OnInit } from '@angular/core';
import { GymdataService } from '../gymdata.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-gympro',
  templateUrl: './gympro.component.html',
  styleUrls: ['./gympro.component.css']
})
export class GymproComponent implements OnInit  {
 gympro:Product[]=[]
 constructor(private dsobj:GymdataService){

 }
 ngOnInit(){
   this.gympro=this.dsobj.getGymproData();
 }
 productsSentByChild=[];
    productCount:number=0;
    getProductDetailsFromChild(productTitle){
      this.productsSentByChild.push(productTitle)
      this.productCount++;
    }
  
}
