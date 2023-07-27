import { Component,AfterViewInit } from '@angular/core';
import { gsap } from "gsap";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    gsap.fromTo(
      ".loading-page",
      { opacity: 1 },
      {
        opacity: 0,
        display: "none",
        duration: 3,
        delay: 3,
      }
    );
  
    gsap.fromTo(
      ".logo-name",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
        delay: 2,
      }
    );
  }

}
