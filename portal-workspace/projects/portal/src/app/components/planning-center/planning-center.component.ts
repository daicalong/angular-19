import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-planning-center',
  imports: [
    RouterModule,
  ],
  templateUrl: './planning-center.component.html',
  styleUrl: './planning-center.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanningCenterComponent { }
