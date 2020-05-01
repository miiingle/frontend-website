import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepperdemo',
  templateUrl: './stepperdemo.component.html',
  styleUrls: ['./stepperdemo.component.scss']
})
export class StepperdemoComponent implements OnInit {

  selectedValue: string;

  constructor() { }

  ngOnInit(): void {
  }

}
