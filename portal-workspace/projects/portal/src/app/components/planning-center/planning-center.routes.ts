import { Routes } from "@angular/router";

export const planningCenterRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full',
            },
            {
                path: 'list',
                title: 'Planning Center - List',
                loadComponent: () => import('./components/planning-center-list/planning-center-list.component').then(c => c.PlanningCenterListComponent),
            },
            {
                path: 'details',
                title: 'Planning Center - Details',
                loadComponent: () => import('./components/planning-center-details/planning-center-details.component').then(c => c.PlanningCenterDetailsComponent),
            },
        ]
    }
]