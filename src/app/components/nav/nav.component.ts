import { Component, OnInit } from '@angular/core';

interface iItem {
  label: string;
  route: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  itens: iItem[]=[
    {
      label: "home",
      route: "/home"
    },
    {
      label: "about",
      route: "/about"
    },
    {
      label: "contactUs",
      route: "/contactus"
    },
    {
      label: "registerProduct",
      route: "/new-product"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
