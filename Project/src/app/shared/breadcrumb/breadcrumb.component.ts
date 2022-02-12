import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  constructor() { }
  parentdata="ads";
  childtoparentdata!:string;
  @Input() parentToChildData!:string;
  ngOnInit(): void {
    this.addbc();
  }
addbc(){

}
receiveValue($event:string): void{
this.childtoparentdata=$event;
}
}
