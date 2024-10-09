import { Component } from '@angular/core';

@Component({
  selector: 'home-img-carousel',
  templateUrl: './img-carousel.component.html',
  styleUrl: './img-carousel.component.css',
})
export class ImgCarouselComponent {
  public images = [
    {
      src: 'https://assets.aboutamazon.com/15/9e/17ad1a954fbd9107e1ea46e6e0bc/how-to-sign-up-for-a-free-prime-membership-trial-hero-v3b.jpg',
      alt: 'First Slide',
      hasError: false,
    },
    {
      src: 'https://d2a5isokysfowx.cloudfront.net/wp-content/uploads/2020/12/bolsa-de-trabajo-de-amazon-para-programadores.jpg',
      alt: 'Second Slide',
      hasError: false,
    },

    {
      src: 'https://assets.aboutamazon.com/dims4/default/2a2537e/2147483647/strip/false/crop/8192x5464+0+0/resize/1486x991!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F82%2F96%2F95fc5c394bffbeb42a776179a077%2Fprime-primeday-arquillos-epicboxes-detail-prime-blue-03-rm07012025-3-jw-v2-1.jpg',
      alt: 'Third Slide',
      hasError: false,
    },
  ];

  onError(image: any) {
    image.hasError = true;
  }
}
