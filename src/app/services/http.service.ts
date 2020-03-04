import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Group } from '../models/Group';
import { map } from "rxjs/operators";
import { Product } from '../models/Product';

const URL: string = "https://rdcrud.herokuapp.com"

function AdaptadorDeGrupo(data: any[]) {
  return data.map(
    (el) => {return new Group(el.COD_GRUPO, el.DESC)} 
  )
}

function AdaptadorDeProdutos(data: any[]) {
  return data.map(
    (el) => {return new Product(el.COD_PRODUTO, el.DESC, el.REG_ANVISA, el.FL_CONTROLADO, el.COD_GRUPO)}
  )
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  getGroup(){
    let obs = this.http.get(URL + "/grupos");
    return obs.pipe(
      map(AdaptadorDeGrupo)
    )
  }

  getProduct(){
    let obs = this.http.get(URL + "/produtos");
    return obs.pipe(
      map(AdaptadorDeProdutos)
    )
  }

}