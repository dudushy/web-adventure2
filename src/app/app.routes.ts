import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Test } from './pages/test/test';

import { Dummy } from './adventures/random/dummy/dummy';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'test', component: Test },

  { path: 'dummy', component: Dummy, data: { status: 'wip', type: 'random', description: 'Dummy' } },

  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
