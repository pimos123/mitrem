import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators, } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';



@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent implements OnInit {
  persionID: string;
  errorMsg: string;
  form: FormGroup;

  constructor(
    private activatedRouter: ActivatedRoute,
    private builder: FormBuilder,
    private router: Router,
    private productSV: ProductService
  ) {
    this.CrateForm();
    this.activatedRouter.params.forEach(
      params => {
        this.persionID = params.id;
        this.form.controls['PERSION_CODE'].setValue(this.persionID);
      }
    );
  }

  ngOnInit() {
  }
  private CrateForm() {
    this.form = this.builder.group({
      WEIGHT: ['', [Validators.required]],
      HEIGHT: ['', [Validators.required]],
      RESULT: [''],
      PERSION_CODE: [''],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      console.log(this.form.value);
      console.log('ข้อมูลไม่ครบ', 'error');
    } else if (Number(this.form.get('WEIGHT').value) <= 0
      || Number(this.form.get('WEIGHT')) === NaN) {
        console.log('น้ำหนักไม่ถูกต้อง', 'error');
    } else if (Number(this.form.get('HEIGHT').value) <= 0
      || Number(this.form.get('HEIGHT')) === NaN) {
        console.log('ส่วนสูงไม่ถูกต้อง', 'error');
    } else {
      const weigth = Number(this.form.get('WEIGHT').value);
      const heigth = Number(this.form.get('HEIGHT').value);
      this.form.controls['RESULT'].setValue(Math.round(weigth / Math.pow(heigth * 0.01, 2)));
      this.productSV
        .createProduct(JSON.stringify(this.form.value))
        .then(res => {
          this.router.navigate(['/', 'home']);
          console.log('เพิ่มข้อมูลสำเร็จ', 'success');
        })
        .catch(err => this.errorMsg = err);
    }
  }
}