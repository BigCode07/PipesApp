import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';

import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumberPageComponent } from './pages/number-page/number-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [
    BasicsPageComponent,
    NumberPageComponent,
    UncommonPageComponent,
  ],
  imports: [CommonModule, ProductsRoutingModule,PrimeNgModule],
})
export class ProductsModule {}
