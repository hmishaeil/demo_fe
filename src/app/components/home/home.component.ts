import { Component, OnDestroy, OnInit } from '@angular/core';
import { ComponentsStateService } from 'src/app/services/components-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  contentToShow = null
  sub: any

  constructor(private componentsStateService: ComponentsStateService) { }

  ngOnInit(): void {

    this.sub = this.componentsStateService.contentToShow$.subscribe(
      data => this.contentToShow = data
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

}

