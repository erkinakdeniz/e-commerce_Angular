import { HttpClient } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart';
import { CartItem } from 'src/app/models/cart-item';
import { Profile } from 'src/app/models/profile';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private router:Router) { }
  private errorHandler:ErrorHandler=new ErrorHandler();

  public currentUser!:User;
  public profile!:Profile;
  public cart!:Cart;
  public cartItem!:CartItem;
  public username!:string;

  sample(){
    try {

    } catch (error) {
      this.errorHandler.handleError(error);
    }
  }
}
