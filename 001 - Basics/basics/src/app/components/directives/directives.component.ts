import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  showMessage: boolean = false;
  success: boolean = true;
  technologies: string[] = ['Angular', 'React', 'Vue'];

  constructor() {}

  ngOnInit(): void {}

  toggleMessage() {
    this.showMessage = !this.showMessage;
  }

  toggleSuccess() {
    this.success = !this.success;
  }

  getColor() {
    return this.success ? 'dodgerblue' : 'orange';
  }
}
