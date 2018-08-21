import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'html-editor',
  template: `
    <ckeditor
      [(ngModel)]="content"
      [config]="{
        toolbar: [
          [ 'Styles', 'Bold', 'Italic', 'Underline', 'BulletedList', 'Image', 'Link', 'Unlink', '-', 'Undo', 'Redo']
        ]
      }"
      (change)="onChange($event)"
      (ready)="onReady($event)"
      debounce="500">
    </ckeditor>
  `
})
export class HtmlEditorComponent {
  @Input('content') public content: string;
  @Output() public contentChanged: EventEmitter<string>;

  constructor(){
    this.contentChanged = new EventEmitter<string>();
  }

  onChange(e) {
    this.contentChanged.emit(e);
  }

  onReady(e) {
    this.contentChanged.emit(e);
  }

}