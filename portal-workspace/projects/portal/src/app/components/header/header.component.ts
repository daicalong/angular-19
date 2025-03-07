import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { updatePreset, updatePrimaryPalette, updateSurfacePalette } from '@primeng/themes';
import { colors, Colors } from '../../../../themes/theme.colors';
@Component({
  selector: 'app-header',
  imports: [
    RouterModule,
    ToggleSwitchModule,
    FormsModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(

  ) {
    this.onChange();
  }
  colors = colors as Colors;
  nav: Route[] = [
    {
      title: 'Home',
      path: 'home',
    },
    {
      title: 'Planning Center',
      path: 'planning-center',
    },
    {
      title: 'Sandbox',
      path: 'sandbox',
    },

  ];
  checked = signal(false);
  onChange(): void {
    effect(() => {
      if (this.checked()) {
        updatePrimaryPalette(this.colors.amber);
        updateSurfacePalette(this.colors.stone);
      } else {
        updatePrimaryPalette(this.colors.blue);
        updateSurfacePalette(this.colors.slate);
      }
    });
  }
}
