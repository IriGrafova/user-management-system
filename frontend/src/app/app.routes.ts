import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  {
    path: 'users',
    loadComponent: () =>
      import('./pages/users/users.component').then(
        (c) => c.UsersComponent,
      ),
  },
  { path: '**', redirectTo: '/users' },
];
