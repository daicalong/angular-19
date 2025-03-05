import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { updatePreset, updatePrimaryPalette, updateSurfacePalette } from '@primeng/themes';
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
  nav: Route[] = [
    {
      title: 'Home',
      path: 'home',
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
        updatePrimaryPalette({
          50: '{pink.50}',
          100: '{pink.100}',
          200: '{pink.200}',
          300: '{pink.300}',
          400: '{pink.400}',
          500: '{pink.500}',
          600: '{pink.600}',
          700: '{pink.700}',
          800: '{pink.800}',
          900: '{pink.900}',
          950: '{pink.950}'
        });
        updateSurfacePalette({
          50: '{stone.50}',
          100: '{stone.100}',
          200: '{stone.200}',
          300: '{stone.300}',
          400: '{stone.400}',
          500: '{stone.500}',
          600: '{stone.600}',
          700: '{stone.700}',
          800: '{stone.800}',
          900: '{stone.900}',
          950: '{stone.950}'
        });
      } else {
        updatePrimaryPalette({
          50: '{blue.50}',
          100: '{blue.100}',
          200: '{blue.200}',
          300: '{blue.300}',
          400: '{blue.400}',
          500: '{blue.500}',
          600: '{blue.600}',
          700: '{blue.700}',
          800: '{blue.800}',
          900: '{blue.900}',
          950: '{blue.950}'
        });
        updateSurfacePalette({
          50: '{slate.50}',
          100: '{slate.100}',
          200: '{slate.200}',
          300: '{slate.300}',
          400: '{slate.400}',
          500: '{slate.500}',
          600: '{slate.600}',
          700: '{slate.700}',
          800: '{slate.800}',
          900: '{slate.900}',
          950: '{slate.950}'
        });
      }
    });
  }
}
