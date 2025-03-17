import { Component, inject } from '@angular/core';
import { MainCategory } from '../interfaces/mainCategory';
import { TableModule } from 'primeng/table';
import { MainCategoryService } from './services/main-category.service';
@Component({
  selector: 'app-main-categories-table',
  imports: [TableModule],
  templateUrl: './main-categories-table.component.html',
  styleUrl: './main-categories-table.component.scss',
})
export class MainCategoriesTableComponent {
  products!: MainCategory[];
  productService = inject(MainCategoryService);
  constructor() {}

  ngOnInit() {
    this.productService.getProductsMini().then((data) => {
      this.products = data;
    });
  }
}
