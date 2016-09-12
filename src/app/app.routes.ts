import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';
import { Users } from './users';
import { Wiki } from './wiki';
import { Contact } from './contact';
import { About } from './about';
import { NoContent } from './no-content';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: Home },
  { path: 'users',  component: Users },
  { path: 'wiki',  component: Wiki },
  { path: 'contact',  component: Contact },
  { path: 'about', component: About },
  {
    path: 'detail', loadChildren: () => System.import('./+detail')
  },
  { path: '**',    component: NoContent }
];
