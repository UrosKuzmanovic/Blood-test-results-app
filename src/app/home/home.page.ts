import { AfterViewInit, Component, OnDestroy, OnInit } from "@angular/core";
import { Data } from "../model/data";
import dataFile from "../data/data.json";
import { IonicSelectableComponent } from "ionic-selectable";
import { Platform } from "@ionic/angular";
import { Subscription } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit, OnDestroy, AfterViewInit {
  data: Data[];
  selectedData: Data;
  valueField: number;
  selectedOption;
  showSelectOption = true;
  description: string;
  details: string;
  backButtonSub: Subscription;

  constructor(private platform: Platform) {}

  ngOnInit() {
    this.data = dataFile;
  }

  ngAfterViewInit() {
    this.backButtonSub = this.platform.backButton.subscribe(() => {
      navigator["app"].exitApp();
    });
  }

  ngOnDestroy() {
    this.backButtonSub.unsubscribe();
  }

  onItemSelected(event: {
    component: IonicSelectableComponent;
    item: Data;
    isSelected: boolean;
  }) {
    this.valueField = null;
    this.selectedOption = "1";
    if (
      !event.item.lowerLimitKids &&
      !event.item.upperLimitKids &&
      event.item.lowerLimitMen === event.item.lowerLimitWomen &&
      event.item.upperLimitMen === event.item.upperLimitWomen
    ) {
      this.showSelectOption = false;
    } else {
      this.showSelectOption = true;
    }
  }

  setDesc() {
    if (this.selectedOption === "1") {
      if (this.selectedData.lowerLimitMen && this.selectedData.upperLimitMen) {
        if (
          this.valueField >= this.selectedData.lowerLimitMen &&
          this.valueField <= this.selectedData.upperLimitMen
        ) {
          this.description = "Vrednosti su granicama normale.";
          this.details = null;
          return;
        } else if (this.valueField < this.selectedData.lowerLimitMen) {
          this.description = "Vrednosti su snižene.";
          this.details =
            "UZROCI SNIŽENIH VREDNOSTI\n\n" + this.selectedData.descIfLower;
          return;
        } else if (this.valueField > this.selectedData.upperLimitMen) {
          this.description = "Vrednosti su povišene.";
          this.details =
            "UZROCI POVIŠENIH VREDNOSTI\n\n" + this.selectedData.descIfHigher;
          return;
        }
      } else if (
        this.selectedData.lowerLimitMen &&
        !this.selectedData.upperLimitMen
      ) {
        if (this.valueField >= this.selectedData.lowerLimitMen) {
          this.description = "Vrednosti su granicama normale.";
          this.details = null;
          return;
        } else {
          this.description = "Vrednosti su snižene.";
          this.details =
            "UZROCI SNIŽENIH VREDNOSTI\n\n" + this.selectedData.descIfLower;
          return;
        }
      } else if (
        !this.selectedData.lowerLimitMen &&
        this.selectedData.upperLimitMen
      ) {
        if (this.valueField <= this.selectedData.upperLimitMen) {
          this.description = "Vrednosti su granicama normale.";
          this.details = null;
          return;
        } else {
          this.description = "Vrednosti su povišene.";
          this.details =
            "UZROCI POVIŠENIH VREDNOSTI\n\n" + this.selectedData.descIfHigher;
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
          this.details = null;
          return;
        } else if (this.valueField < this.selectedData.lowerLimitWomen) {
          this.description = "Vrednosti su snižene.";
          this.details =
            "UZROCI SNIŽENIH VREDNOSTI\n\n" + this.selectedData.descIfLower;
          return;
        } else if (this.valueField > this.selectedData.upperLimitWomen) {
          this.description = "Vrednosti su povišene.";
          this.details =
            "UZROCI POVIŠENIH VREDNOSTI\n\n" + this.selectedData.descIfHigher;
          return;
        }
      } else if (
        this.selectedData.lowerLimitWomen &&
        !this.selectedData.upperLimitWomen
      ) {
        if (this.valueField >= this.selectedData.lowerLimitWomen) {
          this.description = "Vrednosti su granicama normale.";
          this.details = null;
          return;
        } else {
          this.description = "Vrednosti su snižene.";
          this.details =
            "UZROCI SNIŽENIH VREDNOSTI\n\n" + this.selectedData.descIfLower;
          return;
        }
      } else if (
        !this.selectedData.lowerLimitWomen &&
        this.selectedData.upperLimitWomen
      ) {
        if (this.valueField <= this.selectedData.upperLimitWomen) {
          this.description = "Vrednosti su granicama normale.";
          this.details = null;
          return;
        } else {
          this.description = "Vrednosti su povišene.";
          this.details =
            "UZROCI POVIŠENIH VREDNOSTI\n\n" + this.selectedData.descIfHigher;
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
          this.details = null;
          return;
        } else if (this.valueField < this.selectedData.lowerLimitKids) {
          this.description = "Vrednosti su snižene.";
          this.details =
            "UZROCI SNIŽENIH VREDNOSTI\n\n" + this.selectedData.descIfLower;
          return;
        } else if (this.valueField > this.selectedData.upperLimitKids) {
          this.description = "Vrednosti su povišene.";
          this.details =
            "UZROCI POVIŠENIH VREDNOSTI\n\n" + this.selectedData.descIfHigher;
          return;
        }
      } else if (
        this.selectedData.lowerLimitKids &&
        !this.selectedData.upperLimitKids
      ) {
        if (this.valueField >= this.selectedData.lowerLimitKids) {
          this.description = "Vrednosti su granicama normale.";
          this.details = null;
          return;
        } else {
          this.description = "Vrednosti su snižene.";
          this.details =
            "UZROCI SNIŽENIH VREDNOSTI\n\n" + this.selectedData.descIfLower;
          return;
        }
      } else if (
        !this.selectedData.lowerLimitKids &&
        this.selectedData.upperLimitKids
      ) {
        if (this.valueField <= this.selectedData.upperLimitKids) {
          this.description = "Vrednosti su granicama normale.";
          this.details = null;
          return;
        } else {
          this.description = "Vrednosti su povišene.";
          this.details =
            "UZROCI POVIŠENIH VREDNOSTI\n\n" + this.selectedData.descIfHigher;
          return;
        }
      }
    }
  }

  onSearchItems(event: { component: IonicSelectableComponent; text: string }) {
    let text = event.text.trim().toLowerCase();
    event.component.startSearch();
    if (!text) {
      event.component.items = this.data;
      event.component.endSearch();
      return;
    }
    event.component.items = this.filterData(this.data, text);
    event.component.endSearch();
    return;
  }

  filterData(data: Data[], text: string) {
    return data.filter((item) => {
      return (
        item.name.toLowerCase().indexOf(text) !== -1 ||
        item.category.toLowerCase().indexOf(text) !== -1
      );
    });
  }
}
