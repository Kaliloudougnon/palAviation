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
      text: "Some people say that size doesn’t matter, but they don’t have unlimited access to the world’s largest" +
        " available aircraft component inventory. " +
        " We not only offer size, but speed and satisfaction too, with immediate...",
      footer: "",
      more:"service#sales-section"
    },
    {
      icon: "bi bi-arrow-repeat",
      header: "Repair Management ",
      text: "Pal aviation aircraft component repairs each year and counting. You can be a vital component in Pal" +
        " Aviation´s unbeatable Nose-to-Tail service - the fast, flexible repair solution." +
        " When you use Pal Aviation for Repair Management, you’ll also benefit from...",
      footer: "",
      more:"service#repair-section"
    },
    {
      icon: "bi bi-people",
      header: "AOG SERVICE",
      text: "Our AOG team is available 24/7. We stock" +
        " thousands of line items of airworthy material that can always be dispatched within an hour." +
        "  Please reach out anytime via phone or email for your...",
      footer: "",
      more:"service#aog-section"
    },
    {
      icon: "bi bi-house-gear",
      header: "LEASING",
      text: "Pal Aviation’s leasing expertise, and commitment to constantly increasing our pool, provides" +
        "              you with a unique partner who can help to unlock the value in surplus aviation assets either" +
        "        through purchase...",
      footer: "",
      more:"service#leasing-section"
    }
  ]
}
