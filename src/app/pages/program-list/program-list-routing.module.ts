import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgramListPage } from './program-list.page';

const routes: Routes = [
  {
    path: '',
    component: ProgramListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramListPageRoutingModule {}
