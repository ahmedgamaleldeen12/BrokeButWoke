import { Component, inject, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { MainCategoryDto } from '../data/data-contracts';
import { ApiBaseService } from '../core/Base/api-base.service';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-categories-table',
  standalone: true,
  imports: [TableModule, DialogModule, ButtonModule, FormsModule, ToastModule , RouterLink],
  providers: [MessageService],
  templateUrl: './main-categories-table.component.html',
  styleUrl: './main-categories-table.component.scss',
})
export class MainCategoriesTableComponent implements OnInit {
  products: MainCategoryDto[] = [];
  name: string = '';
  id: string = '';
  isUpdate = false;
  visible = false;

  private _apiBaseService = inject(ApiBaseService);
  private messageService = inject(MessageService);

  async ngOnInit(): Promise<void> {
    await this.loadMainCategories();
  }

  private async loadMainCategories(): Promise<void> {
    const res = await this._apiBaseService.apiClient.mainCategoryList();
    if (res.status === 200) {
      this.products = res.data;
    }
  }

  async addMainCategory(): Promise<void> {
    if (!this.name) return;
    const data: MainCategoryDto = { name: this.name };
    const res = await this._apiBaseService.apiClient.mainCategoryCreate(data);
    if (res.status === 201) {
      this.resetForm();
      await this.loadMainCategories();
      this.showSuccess('Category added successfully!');
    }
  }

  async deleteCategory(id: string): Promise<void> {
    const res = await this._apiBaseService.apiClient.mainCategoryDelete(id);
    if (res.status === 204) {
      await this.loadMainCategories();
      this.showSuccess('Category deleted successfully!');
    }
  }

  async openEditDialog(id: string): Promise<void> {
    const res = await this._apiBaseService.apiClient.mainCategoryDetail(id);
    if (res.status === 200) {
      this.name = res.data.name;
      this.id = res.data.id;
      this.isUpdate = true;
      this.visible = true;
    }
  }

  async updateCategory(): Promise<void> {
    if (!this.name || !this.id) return;
    const res = await this._apiBaseService.apiClient.mainCategoryUpdate(this.id, { name: this.name });
    if (res.status === 200) {
      this.resetForm();
      await this.loadMainCategories();
      this.showSuccess('Category updated successfully!');
    }
  }

  private resetForm(): void {
    this.name = '';
    this.id = '';
    this.isUpdate = false;
    this.visible = false;
  }

  private showSuccess(detail: string): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail,
    });
  }


}
