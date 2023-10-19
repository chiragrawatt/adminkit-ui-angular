import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {
  stats = [
    {
      title: "Sales",
      current: "2.382",
      change: -3.65,
      icon: "bi bi-truck"
    },
    {
      title: "Earnings",
      current: "$21.300",
      change: 6.65,
      icon: "bi bi-currency-dollar"
    },
    {
      title: "Visitors",
      current: "14.212",
      change: 5.25,
      icon: "bi bi-people"
    },
    {
      title: "Orders",
      current: "64",
      change: -2.25,
      icon: "bi bi-cart"
    }
  ];
}
