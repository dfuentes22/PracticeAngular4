import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
	isVisible = true;
	log = [];

  constructor() { }

  ngOnInit() {
  }


  onToggleDetails() {
  	this.isVisible = !this.isVisible;
  	// this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }

}
