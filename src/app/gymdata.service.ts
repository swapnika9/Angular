import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class GymdataService {

  constructor() { }
  private gympro:Product[]=[
    {
      productTitle:"Fitness India Pull Reducer",
      description:"₹1990",
      productimage:"https://www.treadmillonrent.in/images/about/6.jpg"
    },
      {
      productTitle:"Kore PVC 20-100 Kg  ",
      description:"₹2240",
      productimage:"https://www.treadmillonrent.in/images/about/2.jpg"
      },
      
      {
      productTitle:"Kore PVC 20-50 Kg  ",
      description:"₹3499",
      productimage:"https://www.treadmillonrent.in/images/about/5.jpg"
      },
      
      {
      productTitle: "TreadMill",
      description:"₹12999",
      productimage:"https://www.treadmillonrent.in/images/about/1.jpg"
    },
      
      {
      productTitle:'Sampada Equipments',
      description:"₹19999",
      productimage:"https://lh3.googleusercontent.com/proxy/mlodbGtTBmF4fprMiIZL38ksQnK_YjUmssTKaWZs_YqBl-xuFSHXyH9aKAEQ9e3m6ELR-1b_1HcpJT36USWwV4WDZB4-_yz67SeeqaI4FT9UfvWMmE3pKxJ-l1f-KLke9q82QnoHCuo1m_MprA3h4bPCg34w"
      },
      
      {
      productTitle:"TreadMill  ",
      description:"₹36999",
      productimage:"https://www.treadmillonrent.in/images/about/2.jpg"
      },
      {
      productTitle:"Sahib Enerprises",
      description:"₹9999",
      productimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtLu8Ub6sJYoJl8RNrjpApYH0N3RQqVaJ2MQ&usqp=CAU",
      },
      {
      productTitle:"Sampada equipments ",
      description:"₹29999",
      productimage:"https://lh3.googleusercontent.com/proxy/SWcRoEofopWz3XylZBZhjnfepo_F81Vg3E3E_mhxTLy_2T78INdT7-7zQQOB40kAEPbX7JMFhNA52OzdU7wvHR4chArQiPjrSQ_jM-m-dQdGDRqEpETs0Rw9fACFrU1XjkHG0lvx3JHEsg7x6w5n"
      },
      
      
      
      ]
    
      getGymproData():Product[]{
        return this.gympro;
      }
      
}
