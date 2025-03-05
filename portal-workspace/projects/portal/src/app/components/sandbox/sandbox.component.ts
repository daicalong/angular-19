import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { TabsModule } from 'primeng/tabs';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import { DrawerModule } from 'primeng/drawer';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@Component({
  selector: 'app-sandbox',
  imports: [
    ButtonModule,
    InputTextModule,
    FormsModule,
    FloatLabelModule,
    CheckboxModule,
    SliderModule,
    ToggleSwitchModule,
    TabsModule,
    RadioButtonModule,
    SelectModule,
    MultiSelectModule,
    DrawerModule,
    ToastModule,
    ConfirmDialogModule
  ],
  providers: [
    MessageService,
    ConfirmationService
  ],
  templateUrl: './sandbox.component.html',
  styleUrl: './sandbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SandboxComponent {
  constructor(
    private messageService: MessageService,
    private confirmationService : ConfirmationService,
  ) { }

  checked = true;
  sliderValue = 20;
  ingredient = 'Mushroom';
  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];
  selectedCities = [];
  selectedCity = null;
  showDrawer = false;

  toggleDrawer(): void {
    this.showDrawer = !this.showDrawer;
  }

  showToast(): void {
    this.messageService.add({
      severity: 'info',
      summary: 'Info',
      detail: 'Message Content',
      sticky: true
    });
  }

  showDialog(): void {
    this.confirmationService.confirm({
      target: event?.target as EventTarget,
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      closable: true,
      closeOnEscape: true,
      icon: 'pi pi-exclamation-triangle',
      rejectButtonProps: {
          label: 'Cancel',
          severity: 'secondary',
          outlined: true,
      },
      acceptButtonProps: {
          label: 'Save',
      },
      accept: () => {
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
      },
      reject: () => {
          this.messageService.add({
              severity: 'error',
              summary: 'Rejected',
              detail: 'You have rejected',
              life: 3000,
          });
      },
  });
  }
}