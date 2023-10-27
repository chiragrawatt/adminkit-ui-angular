import { Component, Input } from '@angular/core';

interface Stat {
  title: string,
  current: string,
  change: number,
  icon: string
}

@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.css']
})
export class StatCardComponent {
  @Input() stat!: Stat;
}
