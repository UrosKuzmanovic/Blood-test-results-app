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
  selectedData: Data;
  valueField: number;
  selectedOption;

  description: string;
  details: string;

  constructor() {}

  ngOnInit() {
    this.data = dataFile;
  }

  onItemSelected(event: CustomEvent) {
    this.valueField = null;
  }

  returnDesc() {
    if (this.selectedOption === "1") {
      if (this.selectedData.lowerLimitMen && this.selectedData.upperLimitMen) {
        if (
          this.valueField >= this.selectedData.lowerLimitMen &&
          this.valueField <= this.selectedData.upperLimitMen
        ) {
          this.description = "Vrednosti su granicama normale.";
          this.details = this.selectedData.descIfNormal;
          return;
        } else if (this.valueField < this.selectedData.lowerLimitMen) {
          this.description = "Vrednosti su snižene.";
          this.details = this.selectedData.descIfLower;
          return;
        } else if (this.valueField > this.selectedData.upperLimitMen) {
          this.description = "Vrednosti su povišene.";
          this.details = this.selectedData.descIfHigher;
          return;
        }
      } else if (
        this.selectedData.lowerLimitMen &&
        !this.selectedData.upperLimitMen
      ) {
        if (this.valueField >= this.selectedData.lowerLimitMen) {
          this.description = "Vrednosti su granicama normale.";
          this.details = this.selectedData.descIfNormal;
          return;
        } else {
          this.description = "Vrednosti su snižene.";
          this.details = this.selectedData.descIfLower;
          return;
        }
      } else if (
        !this.selectedData.lowerLimitMen &&
        this.selectedData.upperLimitMen
      ) {
        if (this.valueField <= this.selectedData.upperLimitMen) {
          this.description = "Vrednosti su granicama normale.";
          this.details = this.selectedData.descIfNormal;
          return;
        } else {
          this.description = "Vrednosti su povišene.";
          this.details = this.selectedData.descIfHigher;
          return;
        }
      }
    } else if (this.selectedOption === "2") {
      if (
        this.selectedData.lowerLimitWomen &&
        this.selectedData.upperLimitWomen
      ) {
        if (
          this.valueField >= this.selectedData.lowerLimitWomen &&
          this.valueField <= this.selectedData.upperLimitWomen
        ) {
          this.description = "Vrednosti su granicama normale.";
          this.details = this.selectedData.descIfNormal;
          return;
        } else if (this.valueField < this.selectedData.lowerLimitWomen) {
          this.description = "Vrednosti su snižene.";
          this.details = this.selectedData.descIfLower;
          return;
        } else if (this.valueField > this.selectedData.upperLimitWomen) {
          this.description = "Vrednosti su povišene.";
          this.details = this.selectedData.descIfHigher;
          return;
        }
      } else if (
        this.selectedData.lowerLimitWomen &&
        !this.selectedData.upperLimitWomen
      ) {
        if (this.valueField >= this.selectedData.lowerLimitWomen) {
          this.description = "Vrednosti su granicama normale.";
          this.details = this.selectedData.descIfNormal;
          return;
        } else {
          this.description = "Vrednosti su snižene.";
          this.details = this.selectedData.descIfLower;
          return;
        }
      } else if (
        !this.selectedData.lowerLimitWomen &&
        this.selectedData.upperLimitWomen
      ) {
        if (this.valueField <= this.selectedData.upperLimitWomen) {
          this.description = "Vrednosti su granicama normale.";
          this.details = this.selectedData.descIfNormal;
          return;
        } else {
          this.description = "Vrednosti su povišene.";
          this.details = this.selectedData.descIfHigher;
          return;
        }
      }
    } else if (this.selectedOption === "3") {
      if (
        this.selectedData.lowerLimitKids &&
        this.selectedData.upperLimitKids
      ) {
        if (
          this.valueField >= this.selectedData.lowerLimitKids &&
          this.valueField <= this.selectedData.upperLimitKids
        ) {
          this.description = "Vrednosti su granicama normale.";
          this.details = this.selectedData.descIfNormal;
          return;
        } else if (this.valueField < this.selectedData.lowerLimitKids) {
          this.description = "Vrednosti su snižene.";
          this.details = this.selectedData.descIfLower;
          return;
        } else if (this.valueField > this.selectedData.upperLimitKids) {
          this.description = "Vrednosti su povišene.";
          this.details = this.selectedData.descIfHigher;
          return;
        }
      } else if (
        this.selectedData.lowerLimitKids &&
        !this.selectedData.upperLimitKids
      ) {
        if (this.valueField >= this.selectedData.lowerLimitKids) {
          this.description = "Vrednosti su granicama normale.";
          this.details = this.selectedData.descIfNormal;
          return;
        } else {
          this.description = "Vrednosti su snižene.";
          this.details = this.selectedData.descIfLower;
          return;
        }
      } else if (
        !this.selectedData.lowerLimitKids &&
        this.selectedData.upperLimitKids
      ) {
        if (this.valueField <= this.selectedData.upperLimitKids) {
          this.description = "Vrednosti su granicama normale.";
          this.details = this.selectedData.descIfNormal;
          return;
        } else {
          this.description = "Vrednosti su povišene.";
          this.details = this.selectedData.descIfHigher;
          return;
        }
      }
    }
  }
}
