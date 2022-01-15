import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isShow = 1;
  content: string | undefined;
  constructor(private modalService: NgbModal) { }
  show(tabNumber: number) {
    this.isShow = tabNumber;
  }
  openXl(content: any) {
    this.modalService.open(content, { size: 'xl' });
  }
}
