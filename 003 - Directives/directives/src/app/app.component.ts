import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'directives';
  showParagraph: boolean = false;
  value!: number;

  toggleShowParagraph() {
    this.showParagraph = !this.showParagraph;
  }
}
