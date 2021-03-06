import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-header',
  templateUrl: './hero-header.component.html',
  styleUrls: ['./hero-header.component.scss']
})
export class HeroHeaderComponent implements OnInit {
  Name: string = "David Whitcome";
  Tag: string = "Software Developer";

  ngOnInit() {
    this.ParallaxAnimation(); // Set header background to correct position for some browsers.
    window.addEventListener('scroll', this.ParallaxAnimation);
  }

  ParallaxAnimation() {
    var headerBackground: HTMLElement = document.getElementById("header-background-wrapper");
    if (headerBackground != null) {
      var backgroundPosition: number = window.pageYOffset / 4;
      if (backgroundPosition >= 0)
        headerBackground.style.marginTop = backgroundPosition + "px";
      else
        headerBackground.style.marginTop = "0px";
    }
  }
}