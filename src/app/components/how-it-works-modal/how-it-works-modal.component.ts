import { Component, OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-how-it-works-modal',
  templateUrl: './how-it-works-modal.component.html',
  styleUrls: ['./how-it-works-modal.component.css']
})
export class HowItWorksModalComponent implements OnInit {
  modalRef: BsModalRef = new BsModalRef<any>();

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
