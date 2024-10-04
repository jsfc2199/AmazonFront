import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SearchNavBarComponent } from './components/search-nav-bar/search-nav-bar.component';
import { OptionsNavBarComponent } from './components/options-nav-bar/options-nav-bar.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    SearchNavBarComponent,
    OptionsNavBarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    TranslateModule
  ],
  exports:[
    SearchNavBarComponent,
    OptionsNavBarComponent
  ]
})
export class SharedModule { }
