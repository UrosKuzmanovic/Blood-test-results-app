import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import data from '../data.json';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  data: Data[];
  selected: Data;

  constructor() {}

  ngOnInit(){
    this.data = data;
    console.log(this.data);
  }

  onItemSelected(event: CustomEvent){
    this.selected = event.detail.value;
  }

  onValueInput(event: CustomEvent){
    console.log(event.detail.value);
  }

}
