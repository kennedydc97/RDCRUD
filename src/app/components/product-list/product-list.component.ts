import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Product } from 'src/app/models/Product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products: Product[]=[]
  public displayedProducts: Product[]=[];

  constructor(private http: HttpService) {
    this.http.getProduct().subscribe((data) => {
      this.products=data
      this.displayedProducts=data})
  }


  showGroup(codDoGrupo: number){
    if(codDoGrupo == 0){
      this.displayedProducts = this.products
    }else{
      this.displayedProducts = this.products.filter(
        product => product.codGrupo == codDoGrupo
      )
    }
  }

  ngOnInit(): void {
  }

}
