import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfLogged]',
  standalone: true
})
export class IfLoggedDirective {

  private _isLogged = false; // default value

  @Input() set appIfLogged(value: boolean) {
    this._isLogged = value;
    this.updateView();
  }

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }

  private updateView() {
    this.viewContainer.clear();
    if (this._isLogged) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

}
