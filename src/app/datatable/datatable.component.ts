import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls:['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  constructor() { }
  products:Product[] =[];
  ngOnInit(): void {
  }
  //checkAllCheckBox(ev) { // Angular 9
  checkAllCheckBox(ev: any) { // Angular 13
		this.products.forEach(x => x.checked = ev.target.checked)
	}

	isAllCheckBoxChecked() {
		return this.products.every(p => p.checked);
	}

}
export interface Product {
  id?: number;
  name: string;
  code: string;
  price: number;
  checked?: boolean;
}
