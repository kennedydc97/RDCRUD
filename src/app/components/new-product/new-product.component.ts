import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  formProduct: FormGroup;
  constructor() { }

  createForm(product: Product){
    this.formProduct = new FormGroup({
    cod: new FormControl(product.cod),
    desc: new FormControl(product.desc),
    regAnvisa: new FormControl(product.regAnvisa),
    controlado: new FormControl(product.controlado),
    codGrupo: new FormControl(product.codGrupo)
  });
}

  sendProduct(){
    console.log(this.formProduct.value)
  }

  ngOnInit(): void {
    this.createForm(new Product())
  }

}
