import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../model/product';
import {Router} from '@angular/router';//อิมพอต


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url:string = "http://chapayom.codehansa.com/crud_bmi.php?"
  

  constructor(private http:HttpClient,  private route: Router) { }
  
  
  getProduct(){
    return this.http.get<Product[]>(this.url+"cmd=select");//
  }
  
  createProduct(data){
    let promise = new Promise((resolve,reject) =>{
      let apiURL = this.url + "cmd=insert";
      this.http.post(apiURL,data)
      .toPromise()
      .then(
        res => {//success
          console.log(res);
          resolve(data);
          }
      );
    });
    return promise;
  }

}

