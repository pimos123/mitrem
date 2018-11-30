import { Component, OnInit } from '@angular/core';
import {ProductService} from '../service/product.service';
import { Router } from '@angular/router';
import { AlretService } from '../shared/services/alret.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  item = [];
  errMsg ="";
  constructor(private productSV:ProductService,
             private alert: AlretService,
              private route:Router,) { }

ngOnInit() {
       this.fetchDate();//
  }
            ///////////////////
fetchDate(){
      this.productSV.getProduct()
    .subscribe(
         data => this.item = data,
      error => this.errMsg =error
        );
  }

  gotoCreateProduct(){
    this.route.navigate(['/','create']);
  }
  gotoBMI(){
    this.route.navigate(['/','bmi']);
  }
}
