import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentsStateService {

  contentToShow$: Subject<any> = new Subject<any>();

  constructor() { }

  registerFormRequested(){
    this.contentToShow$.next('register')
  }

  registered(){
    this.contentToShow$.next('registered')
  }

  loginFormRequested(){
    this.contentToShow$.next('login')
  }

}
