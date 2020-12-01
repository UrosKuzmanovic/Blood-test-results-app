import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Data } from "../model/data";
import dataFile from "../data/data.json";
import { IonicSelectableComponent } from "ionic-selectable";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  data: Data[];
  selected: Data;
  valueField: number;

  constructor() {}

  ngOnInit() {
    this.data = dataFile;
    console.log(this.data);
  }

  onItemSelected(event: CustomEvent) {
    this.valueField = null;
    console.log("promenio");
    
  }

  returnDesc() {
    if (this.selected.lowerLimit && this.selected.upperLimit) {
      if (
        this.valueField >= this.selected.lowerLimit &&
        this.valueField <= this.selected.upperLimit
      ) {
        return "Vrednosti su granicama normale.";
      } else if (this.valueField < this.selected.lowerLimit) {
        return "Vrednosti su snižene.";
      } else if (this.valueField > this.selected.upperLimit) {
        return "Vrednosti su povišene.";
      }
    } else if (this.selected.lowerLimit && !this.selected.upperLimit) {
      if (this.valueField >= this.selected.lowerLimit) {
        return "Vrednosti su granicama normale.";
      } else {
        return "Vrednosti su snižene.";
      }
    } else if (!this.selected.lowerLimit && this.selected.upperLimit) {
      if (this.valueField <= this.selected.upperLimit) {
        return "Vrednosti su granicama normale.";
      } else {
        return "Vrednosti su povišene.";
      }
    }
  }

  returnDetails() {
    if (this.selected.lowerLimit && this.selected.upperLimit) {
      if (
        this.valueField >= this.selected.lowerLimit &&
        this.valueField <= this.selected.upperLimit
      ) {
        return this.selected.descIfNormal;
      } else if (this.valueField < this.selected.lowerLimit) {
        return this.selected.descIfLower;
      } else if (this.valueField > this.selected.upperLimit) {
        return this.selected.descIfHigher;
      }
    } else if (this.selected.lowerLimit && !this.selected.upperLimit) {
      if (this.valueField >= this.selected.lowerLimit) {
        return this.selected.descIfNormal;
      } else {
        return this.selected.descIfLower;
      }
    } else if (!this.selected.lowerLimit && this.selected.upperLimit) {
      if (this.valueField <= this.selected.upperLimit) {
        return this.selected.descIfNormal;
      } else {
        return this.selected.descIfHigher;
      }
    }
  }
}
