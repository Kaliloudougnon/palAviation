import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'aviation-project '

  constructor(private router: Router,private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationStart) {
        if (e.url=="/")
         this.router.navigate(["accueil"])
      }
    });
  }
}
