import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrServiceMethods } from 'src/app/services/toastr-service/toastr.service';
import { BreadcrumbComponent } from 'src/app/shared/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private toastr:ToastrServiceMethods) { }

  navMenu=[{baslik:'Kurumsal',link:'/',altbaslik:[{baslik:'Ürünler',link:'/products'},{baslik:'Ürün Detayı',link:'/detail'},{baslik:'Sepet',link:'/cart'},{baslik:'Hakkımızda',link:'/about'}]},
           {baslik:'Seçenek',link:'/asd',altbaslik:[{baslik:'Alt Seçenek',link:'/dsfd'}]}
          ];
          data="sadasd";

          @Output() msgEvent=new EventEmitter<string>();

  ngOnInit(): void {
  }
  test(){
this.toastr.errorToaster("erkin","akdeniz");
this.toastr.infoToaster("info","Başlık");
this.toastr.successToaster("Success","Başlık");
this.toastr.warningToaster("Warning","Başlık");
  }
  addbreadcrumb(){

  }
  emitChild(){
    this.msgEvent.emit(this.data);
  }

}
