import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class TeldataService {

  constructor() { }
  private televisions:Product[]=[
    {
      productTitle:"JVC 43 - inches LED Ultra - HD",
      description:"₹24990",
      productimage:"https://i.gadgets360cdn.com/large/jvc_43n7105c_thumb_1558421160939.jpg?downsize=278:209&output-quality=80"
    },
      {
      productTitle:"Onida 43 FHD - Fire TV Edition ",
      description:"₹21900",
      productimage:"https://i.gadgets360cdn.com/large/onida_fire_tv_edition_thumb_1576044839555.jpg?downsize=278:209&output-quality=80"
      },
      
      {
      productTitle:"LG Infinia 55LW9800 55-Inch Cinema 3D",
      description:"₹65999",
      productimage:"https://images-na.ssl-images-amazon.com/images/G/01/electronics/LG/Aplus2011/lw9800_tv04._V151544560_.jpg"
      },
      
      {
      productTitle:'Croma 43-inch Ultra-HD Fire TV Edition Smart LED TV  ',
      description:"₹34999",
      productimage:"https://i.gadgets360cdn.com/large/croma_fire_tv_edition_55_small_1615884667811.jpg?downsize=278:209&output-quality=80"
    },
      
      {
      productTitle:'OnePlus 55-Inch U Series 4K LED Android TV',
      description:"₹49999",
      productimage:"https://i.gadgets360cdn.com/large/oneplus_tv_u_series_news_small_1593694484492.jpg?downsize=278:209&output-quality=80"
      },
      
      {
      productTitle:"Thomson 55-Inch Oath Pro 4K Android LED TV ",
      description:"₹36999",
      productimage:"https://i.gadgets360cdn.com/large/thomson_oath_pro_thumb_1593580166379.jpg?downsize=278:209&output-quality=80"
      },
      {
      productTitle:"Panasonic TH-50HX450DX",
      description:"₹39999",
      productimage:"https://i.gadgets360cdn.com/large/Panasonic_HX_HS_H2_series_launch_small_1600166617198.jpg?downsize=278:209&output-quality=80",
      },
      {
      productTitle:"Kodak 43-inch 4K LED Smart TV (43CA2022) ",
      description:"₹29999",
      productimage:"https://i.gadgets360cdn.com/large/kodak_ca_series_tv_thumb_1584356857845.jpg?downsize=278:209&output-quality=80"
      },
      
      
      
      ]
      getTelevisionsData():Product[]{
        return this.televisions;
      }
}





