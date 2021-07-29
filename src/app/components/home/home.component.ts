import { Component, OnDestroy, OnInit } from '@angular/core';
import { ComponentsStateService } from 'src/app/services/components-state.service';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  contentToShow = null
  sub: any

  modalRef: BsModalRef = new BsModalRef<any>();

  constructor(private componentsStateService: ComponentsStateService, private modalService: BsModalService, private router: Router) { }

  ngOnInit(): void {

    this.sub = this.componentsStateService.contentToShow$.subscribe(
      data => this.contentToShow = data
    );
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  goToHowItWorksPage() {
    this.router.navigateByUrl("/how-it-works")
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

}

