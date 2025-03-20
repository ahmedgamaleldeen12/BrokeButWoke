import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ApiBaseService } from '../core/Base/api-base.service';
import { MessageService } from 'primeng/api';
import { SubCategoryDto } from '../data/data-contracts';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-categories-table',
  imports: [TableModule, DialogModule, ButtonModule, FormsModule, ToastModule],
  templateUrl: './sub-categories-table.component.html',
  styleUrl: './sub-categories-table.component.scss',
  providers: [MessageService],

})
export class SubCategoriesTableComponent {
  products: SubCategoryDto[] = [];
  name: string = '';
  id: string = '';
  Expense!:number;
  Evisible:boolean = false;
  isUpdate = false;
  visible = false;
  private _apiBaseService = inject(ApiBaseService);
  private messageService = inject(MessageService);
  private readonly route = inject(ActivatedRoute);
  mainCategoryId!: string;

  constructor() {}

  async ngOnInit(): Promise<void> {
    this.mainCategoryId = await this.getMainCategoryId();
    await this.loadSubCategories();
  }
  private async getMainCategoryId(): Promise<string> {
    return new Promise((resolve) => {
      this.route.paramMap.subscribe((params) => {
        resolve(params.get('id')!);
      });
    });
  }
  private async loadSubCategories(): Promise<void> {
    const res = await this._apiBaseService.apiClient.subCategoryByMainCategoryDetail(this.mainCategoryId);
    if (res.status === 200) {
      this.products = res.data;
    }
  }

  async addSubCategory(): Promise<void> {
    if (!this.name) return;
    const data: SubCategoryDto = {
      mainCategoryId: this.mainCategoryId,
      name: this.name,
    };
    const res = await this._apiBaseService.apiClient.subCategoryCreate(data);
    if (res.status === 201) {
      this.resetForm();
      await this.loadSubCategories();
      this.showSuccess('Category added successfully!');
    }
  }

  async deleteCategory(id: string): Promise<void> {
    const res = await this._apiBaseService.apiClient.subCategoryDelete(id);
    if (res.status === 204) {
      await this.loadSubCategories();
      this.showSuccess('Category deleted successfully!');
    }
  }

  async openEditDialog(id: string): Promise<void> {
    const res = await this._apiBaseService.apiClient.subCategoryDetail(id);
    if (res.status === 200) {
      this.name = res.data.name;
      this.id = res.data.id;
      this.isUpdate = true;
      this.visible = true;
    }
  }

  async updateCategory(): Promise<void> {
    if (!this.name || !this.id) return;
    const res = await this._apiBaseService.apiClient.subCategoryUpdate(
      this.id,
      { name: this.name },
    );
    if (res.status === 200) {
      this.resetForm();
      await this.loadSubCategories();
      this.showSuccess('Category updated successfully!');
    }
  }
  async addExpense(){
    let res = await this._apiBaseService.apiClient.expenseCreate({subCategoryId:this.id , cost: this.Expense})
    if(res.status == 200){
      this.resetForm();
      this.loadSubCategories();
      this.showSuccess('Expense Added successfully!');
    }
  }
  private resetForm(): void {
    this.name = '';
    this.id = '';
    this.Expense = 0;
    this.Evisible = false;
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
  showAddExpense(id:string){
    this.id = id;
    this.Evisible = true;
  }
}
