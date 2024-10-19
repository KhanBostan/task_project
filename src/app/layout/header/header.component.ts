import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'task-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router) {}

navigateTo(path: string) {
  console.log('Navigating to:', path);
  this.router.navigate([path]);
}

}
