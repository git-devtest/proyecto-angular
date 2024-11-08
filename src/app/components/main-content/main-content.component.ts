import { Component } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight.directive';
import { IfLoggedDirective } from '../../directives/if-logged.directive';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    HighlightDirective, 
    IfLoggedDirective
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent { }