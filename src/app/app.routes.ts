import { Routes } from '@angular/router';
import { MainCategoriesTableComponent } from './main-categories-table/main-categories-table.component';
import { SubCategoriesTableComponent } from './sub-categories-table/sub-categories-table.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'main-category',
    pathMatch: 'full' // Ensures exact match for empty path
  },
  {
    path: 'main-category',
    component: MainCategoriesTableComponent
  },
  {
    path: 'sub-category/:id',
    component: SubCategoriesTableComponent
  }
];
