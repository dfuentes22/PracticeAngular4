import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-data-binding',
  templateUrl: './test-data-binding.component.html',
  styleUrls: ['./test-data-binding.component.css']
})
export class TestDataBindingComponent implements OnInit {
	userName = '';

  constructor() { }

  ngOnInit() {
  }

  onResetString() {
  	this.userName = '';
  }

}
