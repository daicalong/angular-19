import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-planning-center-list',
  imports: [
    RouterModule
  ],
  templateUrl: './planning-center-list.component.html',
  styleUrl: './planning-center-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanningCenterListComponent { }
