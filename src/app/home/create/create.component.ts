import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
import {ProductService}  from'../../service/product.service';
import { AlretService } from '../../shared/services/alret.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

errorMsg: string;
form: FormGroup;
personID: any;
items: any;
errMsg: string;

constructor(private builder: FormBuilder,
  private router: Router,
  private productSV: ProductService,
   private alert: AlretService,
  private activateRouter: ActivatedRoute) 
  { this.initialCreateFormData(),this.activateRouter.params.forEach(
    params => {
      this.personID = params.id;
    }
  )
  ;}//เรียกใช้เมธอด
  ngOnInit() {
  }

  private initialCreateFormData(){
    this.form = this.builder.group({
      PERSION_NUMBER: ['',[Validators.required]],
      INITIAL_CODE: ['',[Validators.required]],
      NAME:'',
      LASTNAME: ['',[Validators.required]],
      GENDER: '',
      AGE: ''
    });
  }
  
  onSubmit() {
    if (this.form.invalid) {
      this.alert.notify('ข้อมูลไม่ครบ', 'success');//
    }
    else{
      this.productSV
        .createProduct(JSON.stringify(this.form.value))
        .then(res => {
           this.alert.notify('เพิ่มข้อมูลสำเร็จ', 'success');//
          this.router.navigate(['/', 'home']);
        })
         .catch(err => this.errorMsg = err);
        }
}
}
