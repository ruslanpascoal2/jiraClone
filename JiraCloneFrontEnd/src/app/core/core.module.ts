import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { ResizerComponent } from './components/layout/resizer/resizer.component';
import { SharedModule } from '../shared/shared.module';
import { NavigationComponent } from './components/layout/navigation/navigation.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    ResizerComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    ResizerComponent,
    NavigationComponent

  ],
})
export class CoreModule { }
