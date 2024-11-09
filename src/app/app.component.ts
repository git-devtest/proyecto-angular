import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../app/components/header/header.component';
import { FooterComponent } from '../app/components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MainContentComponent } from './components/main-content/main-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    MainContentComponent,
  ], // Importar componentes independientes
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
