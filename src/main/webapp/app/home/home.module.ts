import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BlogtutoSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [BlogtutoSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class BlogtutoHomeModule {}
