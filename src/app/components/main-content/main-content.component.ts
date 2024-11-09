import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../../directives/highlight.directive';
import { IfLoggedDirective } from '../../directives/if-logged.directive';
import { ExclaimPipe } from '../../pipes/exclaim.pipe';
import { TitleCasePipePipe } from '../../pipes/title-case-pipe.pipe';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    HighlightDirective, 
    IfLoggedDirective,
    CommonModule,
    ExclaimPipe,
    TitleCasePipePipe
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {
  today: Date = new Date();
  price: number = 123.45;
  name: string = 'jhon harold, angular developer';
}