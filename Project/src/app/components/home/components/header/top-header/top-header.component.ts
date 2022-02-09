import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {
phone:string="+1 456 6717";
shopCurrencies:string[]=["$","£"];
shopCurrenciesClass="";
  constructor() { }

  ngOnInit(): void {
  }
  shopCurrenciesSet(event:any){
if(event!=null){
  this.shopCurrenciesClass="current";
}
  }

}
