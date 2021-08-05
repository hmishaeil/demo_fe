import { Component, OnInit } from '@angular/core';
import { ComponentsStateService } from 'src/app/services/components-state.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private componentStateService: ComponentsStateService) { }

  ngOnInit(): void {
  }

  registerFormRequested(){
    this.componentStateService.registerFormRequested()
  }
}
