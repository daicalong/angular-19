import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        title: 'Home',
        path: 'home',
        loadComponent: () => import('./components/home/home.component').then(c => c.HomeComponent),
    },
    {
        title: 'Planning Center',
        path: 'planning-center',
        loadChildren: () => import('./components/planning-center/planning-center.routes').then(c => c.planningCenterRoutes),
    },
    {
        title: 'Sandbox',
        path: 'sandbox',
        loadComponent: () => import('./components/sandbox/sandbox.component').then(c => c.SandboxComponent),
    },
];
