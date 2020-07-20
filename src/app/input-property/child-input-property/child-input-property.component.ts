import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-input-property',
  templateUrl: './child-input-property.component.html',
  styleUrls: ['./child-input-property.component.scss'],
  inputs: ['Pdata'],
})
export class ChildInputPropertyComponent implements OnInit {
  Pdata: any;
  constructor() {}

  ngOnInit(): void {}
}
