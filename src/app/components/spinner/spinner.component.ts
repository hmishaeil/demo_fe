import { Component, OnInit } from '@angular/core';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  isLoading: Subject<boolean> = this.spinner.isLoading;

  constructor(private ngxSpinner: NgxSpinnerService, private spinner: SpinnerService) { }

  ngOnInit(): void {
    this.ngxSpinner.show();

  }

}
