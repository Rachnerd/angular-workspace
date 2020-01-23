import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarContainerComponent } from './sidebar-container/sidebar-container.component';

import {
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

const MATERIAL = [
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule
];

@NgModule({
  imports: [CommonModule, ...MATERIAL],
  declarations: [SidebarContainerComponent],
  exports: [SidebarContainerComponent, ...MATERIAL]
})
export class ComponentsModule {}
