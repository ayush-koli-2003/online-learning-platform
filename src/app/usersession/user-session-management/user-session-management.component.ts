import { Component } from '@angular/core';

@Component({
  selector: 'app-user-session-management',
  standalone: false,
  
  templateUrl: './user-session-management.component.html',
  styleUrl: './user-session-management.component.css'
})
export class UserSessionManagementComponent {
  constructor(){
    console.log("Comp inited");
    if(localStorage.getItem('login')==null){
      console.log("Navigated to log in");
      localStorage.setItem('login',JSON.stringify(true));
      
    }
    else{
      console.log("Navigated to logout");
      localStorage.removeItem('login');
      
    }
    
  }
}
