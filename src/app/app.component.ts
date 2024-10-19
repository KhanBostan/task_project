import { Component, OnInit } from '@angular/core';
import { ProgressBarService } from './shared/services/progress-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  constructor(private progressService: ProgressBarService) {}

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.progressService.show();
    // }, 3000);
  }
}
