import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor, Validators } from '@angular/forms';

@Component({
  selector: 'app-formpost',
  templateUrl: './formpost.component.html',
  styleUrls: ['./formpost.component.css']
})
export class FormpostComponent implements OnInit {






  constructor() { }

  ngOnInit(): void {
  }
  check=true;
  buld(e:any){
if(e.target.checked==true){
this.check=true;
}else{
  this.check=false;
}
  }
  checkfalse=false;
  buldfalse(e:any){
if(e.target.checked==true){
  this.checkfalse=true;
}else{
  this.checkfalse=false;
}
  }

  agregar(shop:any, documentype:any, typencf:any, rnc:any, firstname:any, lastname:any, address:any, phone:any, email:any
    , city:any, delivery:any, otherpesons:any, note:any, gateway:any, sku:any, title:any, quantity:any, price:any, tarjeta:any){
/*let idorden:number;
let orden:string;
let id:number;
let iditem=20820;
let iditem_more:number;

orden="E0000";
idorden=6910;
let total:number;
total=quantity*price;
for(let i=1; i<=100; i++){


  id=idorden+i;
iditem_more=iditem+i;

  let form:any={
    id:orden+id, number:id, shop:shop, firt_name:firstname, last_name:lastname, address:address, phone:phone, email:email, city:"Santo Domingo DN"
    ,contry:"Republica Dominicana", rnc_name:"Plaza Lama S A", document_type:documentype, rnc:rnc, type_ncf:typencf, note:note, pickup:"0000-00-00 00:00:00",
    delivery:delivery, otherpersons:otherpesons, total_taz:"", gateway:gateway, status:"success", browser_ip:"0.0.0.0", centerd:"T",
    "line_items":[
    {
    id:iditem_more, sku:sku, title:title, quantity:quantity, quantityaviable:"0", price:price, total:total, total_discount:0, id_product_attribute:0,
    id_customization:0, status:"success" }
   ],
   "destination_location":{
     name:firstname, address1:address, address2:"", contry:"Republica Dominicana", city:"Santo Domingo DN", zip:"",

   },
   "shipping_lines":[
     {
  title:"Delivery Santo Domingo\r\n", price:240,
     }
   ],
   "transactions":[{

    GATAWAY:gateway, APROBACION:"000000022", TARJETA:tarjeta
   }

   ]

    }
    //let Json=JSON.stringify(form);
  //console.log(delivery, otherpesons);






}*/
console.log(this.check, this.checkfalse);
}

}
