import { Injectable } from '@angular/core';
import { Product } from './models/product.model';
@Injectable({
  providedIn: 'root'
})
export class MobdataService {

  constructor() { }
  private mobiles:Product[]=[

    {
    productTitle:"'Apple iPhone XR (Blue, 256 GB)",
    description:"₹74990",
    productimage:"https://i.gadgets360cdn.com/large/iPhone_SE_vs_iPhone_SE_2020_small_1587018208206.jpg?downsize=278:209&output-quality=80"
  },
    {
    productTitle:"'iPhone 12 (Purple, 128GB Storage)",
    description:"₹84900",
    productimage:"https://devguider.com/devs/569_foto_2.jpg"
    },
    
    {
    productTitle:"'Samsung Galaxy F62 (Green, 128GB Storage)",
    description:"₹25999",
    productimage:"https://i.gadgets360cdn.com/large/samsung_galaxy_s21_cover_small_1610085799768.jpg?downsize=278:209&output-quality=80"
    },
    
    {
    productTitle:'Realme 8 (Cyber Black,128GB Storage)',
    description:"₹14999",
    productimage:"https://lh3.googleusercontent.com/proxy/HLvkFnvHd7N70ZGyOLu20yC6t-Fh0Q2QU2GSXd_pfXMjGzHdcAWArVIf_pKv-QkrKV_OpgnxNzOpFTHDxEqKyVbNWEhP6vDLIC5uxfynGght36OlXqErI-PpbA0bl7x00KPX_V0tqPK9_DbeHvV7HG0u_0kpbS3IeaO5=w640"
  },
    
    {
    productTitle:'Oppo F19 Pro(Classic Silver,128GB Storage)',
    description:"₹21999",
    productimage:"https://i.gadgets360cdn.com/large/Oppo_R9s_1476889457722.jpeg?downsize=278:209&output-quality=80"
    },
    
    {
    productTitle:"Redmi 9 (Sky Blue,64GB Storage",
    description:"₹11999",
    productimage:"https://i.gadgets360cdn.com/large/Redmi_Note_10_pro_max_sale_today_small_1615986120485.jpg?downsize=278:209&output-quality=80"
    },
    {
    productTitle:"Oppo A3s 2GB & 16GB (Red color)",
    description:"₹15999",
    productimage:"https://www.sellit.lk/images/listings/2021-01/medThmb/oppo_a3s_2gb_16gb_used-1610427915-608-e.jpg"
    },
    {
    productTitle:"Realme 7 (Sky Blue,64GB Storage",
    description:"₹20999",
    productimage:"https://lh3.googleusercontent.com/proxy/hKjRsyCkmDFjK-4uNhRHqtNZD1aWgiSFM4AeAB4E1bDV4LNSwk5i2VMMevKInY6NqknI4JOlUOL_p9UfEX7gzfHMAb2357GrEpk1aCnRLSsCinIRcTZamMZknI-XmnGp51uupQaECLxFNM_W4YJ7Cqa3TnKz1YIJDZewDWQpiIn1QXvzKi0"
    }
    
    
    
    ];

    getMobilesData():Product[]{
      return this.mobiles;
    }
}






