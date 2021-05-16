import { Component, OnInit } from '@angular/core';
import { MobdataService } from '../mobdata.service';

import { Product } from '../models/product.model';
@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {
    mobiles:Product[]=[];
    constructor( private dsobj:MobdataService){

}
ngOnInit(){
    this.mobiles=this.dsobj.getMobilesData();
}
productsSentByChild=[];
    productCount:number=0;
    getProductDetailsFromChild(productTitle){
      this.productsSentByChild.push(productTitle)
      this.productCount++;
    }

  }