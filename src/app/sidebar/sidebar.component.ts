import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  navData = [
    {
      header: "Pages",
      navLinks: [
        "Dashboard",
        "Profile",
        "Sign In",
        "Sign Up",
        "Blank"
      ]
    },
    {
      header: "Tools & Components",
      navLinks: [
        "Buttons",
        "Forms",
        "Cards",
        "Typography",
        "Icons"
      ]
    },
    {
      header: "Plugins & Addons",
      navLinks: [
        "Charts",
        "Maps"
      ]
    }
  ]
}
