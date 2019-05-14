import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatSidenav, MatSidenavModule} from '@angular/material';
import { SidebarComponent } from './common/sidebar/sidebar.component';

@NgModule({
  declarations:[SidebarComponent],
  imports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatSidenavModule
  ],
  exports: [
    SidebarComponent,
    MatButtonModule,
    MatSidenavModule,
    MatCheckboxModule
  ],
})
export class SharedModule { }