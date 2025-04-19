import { Route } from '@angular/router';
import { UiHomeComponent } from '@open-uap/ui-home';
import { AboutComponent } from './about.component';
import { SearchComponent } from './search.component';
import { SubmitComponent } from './submit.component';
import { AdviceComponent } from './advice.component';
import { DevelopersComponent } from './developers.component';
import { ContactComponent } from './contact.component';

export const appRoutes: Route[] = [
  { path: '', component: UiHomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'search', component: SearchComponent },
  { path: 'submit', component: SubmitComponent },
  { path: 'advice', component: AdviceComponent },
  { path: 'developers', component: DevelopersComponent },
  { path: 'contact', component: ContactComponent },
];
