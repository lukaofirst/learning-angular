import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css'],
})
export class DatabindingComponent implements OnInit {
  data: string = "I'm not hardcoded in the html";
  name: string = '';
  username: string = '';

  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    alert('Hello World');
  }

  handleChange(event: any) {
    this.name = event.target.value;
  }
}
