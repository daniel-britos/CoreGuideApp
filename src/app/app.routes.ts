
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
    children: [
      {
        path: 'create-page',
        title: 'Create Function',
        loadComponent: () => import('./dashboard/pages/crud/create/create.component'),
      },
      {
        path: 'read-page',
        title: 'Read Function',
        loadComponent: () => import('./dashboard/pages/crud/read/read.component'),
      },
      {
        path: 'update-page',
        title: 'Update Function',
        loadComponent: () => import('./dashboard/pages/crud/update/update.component'),
      },
      {
        path: 'delete-page',
        title: 'Delete Function',
        loadComponent: () => import('./dashboard/pages/crud/delete/delete.component'),
      },
      {
        path: 'search-page',
        title: 'Search',
        loadComponent: () => import('./dashboard/pages/search/search.component'),
      },
      {
        path:'', redirectTo: 'dashboard', pathMatch: 'full',
      }
    ]
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }


];
