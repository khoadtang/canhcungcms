import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TestViewComponent} from './test-view/test-view.component';

const appRoutes:Routes = [
  {path: '', component: TestViewComponent}
];

@NgModule({
  declarations:[
    TestViewComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
