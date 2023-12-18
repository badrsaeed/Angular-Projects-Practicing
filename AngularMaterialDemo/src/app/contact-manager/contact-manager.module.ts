import { DemoModule } from './../demo/demo.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactManagerComponent } from './contact-manager.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'contactmanager',
    component: ContactManagerComponent,
    children: [
      { path: '', component: MainContentComponent }
    ]
  },
  { path: '**', redirectTo: 'contactmanager' }
]

@NgModule({
  declarations: [
    ContactManagerComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    DemoModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactManagerModule { }
