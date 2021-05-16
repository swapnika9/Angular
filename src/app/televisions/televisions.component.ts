import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { TeldataService } from '../teldata.service';

@Component({
  selector: 'app-televisions',
  templateUrl: './televisions.component.html',
  styleUrls: ['./televisions.component.css']
})
export class TelevisionsComponent implements OnInit{
  televisions:Product[]=[]
  constructor(private dsobj:TeldataService){

  }
  ngOnInit(){
    this.televisions=this.dsobj.getTelevisionsData();
  }
  productsSentByChild=[];
    productCount:number=0;
    getProductDetailsFromChild(productTitle){
      this.productsSentByChild.push(productTitle)
      this.productCount++;
    }


}