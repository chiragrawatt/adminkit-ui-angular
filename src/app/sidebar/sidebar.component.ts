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
        {
          title: "Dashboard",
          path: "/dashboard"
        },
        {
          title: "Profile",
          path: "/profile"
        },
        {
          title: "Sign In",
          path: ""
        },
        {
          title: "Sign Up",
          path: ""
        },
        {
          title: "Blank",
          path: "/blank"
        }
      ]
    },
    {
      header: "Tools & Components",
      navLinks: [
        {
          title: "Buttons",
          path: "/buttons"
        },
        {
          title: "Forms",
          path: "/forms"
        },
        {
          title: "Cards",
          path: "/cards"
        },
        {
          title: "Typography",
          path: "/typography"
        },
        {
          title: "Icons",
          path: "/icons"
        }
      ]
    },
    {
      header: "Plugins & Addons",
      navLinks: [
        {
          title: "Charts",
          path: "/charts"
        },
        {
          title: "Maps",
          path: "/maps"
        }
      ]
    }
  ]
}
