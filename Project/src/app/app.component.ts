import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BreadcrumbService,Breadcrumb } from 'angular-crumbs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {


  constructor(private titleService:Title,private breadcrumbService:BreadcrumbService) {


  }
  ngOnInit(): void {
    this.breadcrumbService.breadcrumbChanged.subscribe(crumbs=>{
      this.titleService.setTitle(this.createTitle(crumbs))
    });
  }
   createTitle(routesCollection: Breadcrumb[]) {
   const title="Furnitica";
   const titles=routesCollection.filter((route)=>route.displayName);
   if(!titles.length){return title;}
   const routeTitle=this.titlesToString(titles);
   return `${routeTitle} ${title}`;
  }
  titlesToString(titles: Breadcrumb[]) {
   return titles.reduce((prev,curr)=>{
     return `${curr.displayName}-${prev}`;
   },'');
  }
}
