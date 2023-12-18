import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  {
    path: 'contactmanager',
    loadChildren: () => import('./contact-manager/contact-manager.module')
      .then(m => m.ContactManagerModule)
  },
  {
    path: 'demo',
    loadChildren: () => import('./demo/demo.module')
      .then(m => m.DemoModule)
  },
  { path: '**', redirectTo: "demo" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
