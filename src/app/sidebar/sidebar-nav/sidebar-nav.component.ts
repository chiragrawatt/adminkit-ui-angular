import { Component, Input } from '@angular/core';
import * as feather from 'feather-icons';

interface SidebarNav {
  header: string,
  navLinks: string[]
}

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.css']
})
export class SidebarNavComponent {


  @Input() navData: SidebarNav | undefined;
}
