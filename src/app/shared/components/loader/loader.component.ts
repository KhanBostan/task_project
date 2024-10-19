import { Component } from '@angular/core';
import { ProgressBarService } from '../../services/progress-bar.service';

@Component({
  selector: 'task-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {

  loading$ = this.progressBarService.loading$;

  constructor(private progressBarService: ProgressBarService) {}
}
