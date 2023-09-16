import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  services = [
    {
      icon: "bi bi-bar-chart",
      header: "Sales,Loans & Exchanges",
      text: "SoSome people say that size doesn’t matter, but they don’t have unlimited access to the world’s largest" +
        "available aircraft component inventory. " +
        "We not only offer size, but speed and satisfaction too, with immediate...",
      footer: ""
    },
    {
      icon: "bi bi-arrow-repeat",
      header: "Repair Management ",
      text: "Pal aviation aircraft component repairs each year and counting. You can be a vital component in Pal" +
        "Aviation´s unbeatable Nose-to-Tail service - the fast, flexible repair solution." +
        " When you use Pal Aviation for Repair Management, you’ll also benefit from...",
      footer: ""
    },
  /*  {
      icon: "bi bi-speedometer2",
      header: "STANDARD EXCHANGE OR FLAT EXCHANGE",
      text: "Pal Aviation helping you save space and no need to maintain high cost units at your" +
        "              inventories. All the exchange units are provided",
      footer: ""
    },*/
    {
      icon: "bi bi-people",
      header: "AOG SERVICE",
      text: "Our AOG team is available 24/7. We stock" +
        "thousands of line items of airworthy material that can always be dispatched within an hour." +
        "  Please reach out anytime via phone or email for your...",
      footer: ""
    },
    /*{
      icon: "bi bi-shop",
      header: "CONSUMABLES AND EXPENDABLES",
      text: "Pal Aviation has a large and growing inventory\n" +
        "              of expendables and consumables. Our management program is designed to...",
      footer: ""
    },*/
    {
      icon: "bi bi-house-gear",
      header: "LEASING",
      text: "Pal Aviation’s leasing expertise, and commitment to constantly increasing our pool, provides" +
        "              you with a unique partner who can help to unlock the value in surplus aviation assets either" +
        "        through purchase...",
      footer: ""
    }
  ]
}
