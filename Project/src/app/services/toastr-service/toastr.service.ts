import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastrServiceMethods {

  constructor(private toaster:ToastrService) { }
  successToaster(message:string,title:string){
    this.toaster.success(message,title)
}
infoToaster(message:string,title:string){
    this.toaster.info(message,title)
}
warningToaster(message:string,title:string){
    this.toaster.warning(message,title)
}
errorToaster(message:string,title:string){
    this.toaster.error(message,title)
}
}
