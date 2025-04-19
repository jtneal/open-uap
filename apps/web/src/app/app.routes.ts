import { Route } from '@angular/router';
import { UiHomeComponent } from '@open-uap/ui-home';
import { AboutComponent } from './about.component';

export const appRoutes: Route[] = [
  { path: '', component: UiHomeComponent },
  { path: 'about', component: AboutComponent },
];
