import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('maVideo') maVideo: any;

  constructor() {
  }

  ngOnInit(): void {
   const v= this.maVideo.nativeElement;
   v.muted=true;
   v.play();

  }
  startVideo() {
    this.maVideo.nativeElement.play();
  }
  services = [
    {
      icon: "bi bi-bar-chart",
      header: "Sales,Loans & Exchanges",
      text: "Some people say that size doesn’t matter, but they haven’t experienced unlimited " +
        "access to the world’s largest available aircraft component inventory. We not only offer " +
        "size but also speed and satisfaction, with immediate...",
      footer: "",
      more:"ourService#sales-section"
    },
    {
      icon: "bi bi-arrow-repeat",
      header: "Repair Management ",
      text: "Pal Aviation OÜ handles aircraft component repairs each year and counting. You can " +
        "be a vital component in Pal Aviation’s unbeatable Nose-to-Tail service - the fast," +
        "flexible repair solution. When you choose Pal Aviation OÜ for Repair Management," +
        "you’ll also benefit from...",
      footer: "",
      more:"ourService#repair-section"
    },
    {
      icon: "bi bi-people",
      header: "AOG SERVICE",
      text: "Our AOG team is available 24/7. We stock thousands of line items of airworthy " +
        "material that can be dispatched within an hour. Please feel free to reach out anytime " +
        "via phone or email for your...",
      footer: "",
      more:"ourService#aog-section"
    },
    {
      icon: "bi bi-house-gear",
      header: "LEASING",
      text: "Pal Aviation OÜ’s leasing expertise and commitment to constantly increasing our" +
        " pool provide you with a unique partner who can help unlock the value in surplus " +
        "aviation assets either through purchase...",
      footer: "",
      more:"ourService#leasing-section"
    }
  ]
}
