import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Test } from './pages/test/test';

import { Dummy } from './adventures/random/dummy/dummy';
import { YtVidUi } from './adventures/clone/yt-vid-ui/yt-vid-ui';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'test', component: Test },

  { path: 'dummy', component: Dummy, data: { status: 'wip', type: 'random', description: 'Testing stuff' } },
  { path: 'yt-vid-ui', component: YtVidUi, data: { status: 'wip', type: 'clone', description: 'YouTube Video UI' } },

  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
