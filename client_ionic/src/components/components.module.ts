import { NgModule } from '@angular/core';
import { RichTextComponent } from './rich-text/rich-text';
// ckeditor 지원 코드
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { HtmlEditorComponent } from './html-editor/html-editor';

@NgModule({
	declarations: 
	//[RichTextComponent],
	// ckeditor 지원코드
	[HtmlEditorComponent],
	imports: [
		// ckeditor 지원코드
		CKEditorModule, FormsModule

	],
	exports: [
		//RichTextComponent
		HtmlEditorComponent
	]
})
export class ComponentsModule {}
