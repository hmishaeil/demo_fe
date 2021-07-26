import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'demo_fe';

  isUserLoggedIn = false;

  constructor(private authService: AuthService){

  }
  ngOnInit(): void {
    this.authService.isUserLoggedIn$.subscribe(
      data => { 
        this.isUserLoggedIn = data
        console.log(data)
      }
    )
  }

}
