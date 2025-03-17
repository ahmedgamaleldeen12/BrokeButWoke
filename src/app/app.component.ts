import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MainCategoriesTableComponent } from "./main-categories-table/main-categories-table.component";

@Component({
  selector: 'app-root',
  imports: [ButtonModule, MainCategoriesTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'BrokeButWoke';
}
