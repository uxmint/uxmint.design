import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts = [
    {
      title: 'How to experience Five Senses - in Digital Commerce',
      description: 'Our five senses allow us to experience the world. These senses will send the majority of information through the nerve system to our brain to recognize. Our experience, belief system, and culture are defined by what senses receiving.',
      imageSrc: '/assets/images/blog/img-1.png',
      url: 'https://medium.com/uxmint/how-to-experience-five-senses-in-digital-commerce-463eadc5ad66',
    },
    {
      title: 'Ever thought why does the colour green or sound of water brings calmness?',
      description: 'Here I would urge you not to read further but rather put your perspectives down for those two questions of mine [Why does the colour green and the sound of water have a soothing effect on us?], if you want to feel it before you think of your perspectives here is a link that triggered me this thought',
      imageSrc: '/assets/images/blog/img-2.png',
      url: 'https://medium.com/uxmint/ever-thought-why-does-the-colour-green-or-sound-of-water-brings-calmness-6ecd72160fab',
    },
    {
      title: 'Designing a successful product: Is not a daydream',
      description: 'In the last decade, the world has seen a million of digital products, but some 1000 are successful in the market. The digital giants like Google, Facebook, Amazon, Instagram, Netflix, Uber and so on successfully laid their path.',
      imageSrc: '/assets/images/blog/img-3.png',
      url: 'https://medium.com/uxmint/designing-a-successful-product-is-not-a-daydream-af92591078cd',
    },
    {
      title: 'Peripheral Vision & Design Interaction',
      description: 'Have you ever wondered why notifications, alerts are usually on top right corner of your screen, Open chat box on the bottom right and why it blinks every time there is a new message, and why News feeds, Posts, Videos are',
      imageSrc: '/assets/images/blog/img-4.png',
      url: 'https://medium.com/uxmint/design-exploration-in-my-4hrs-long-journey-2bac23227c6a',
    },
    {
      title: 'The UX Wheel',
      description: 'We are all aware of the WHEEL which was invented in STONE AGE. In my perspective, it is the only product that has been successful since 9500 BC. It is hard to imagine our lives without',
      imageSrc: '/assets/images/blog/img-5.png',
      url: 'https://medium.com/uxmint/the-ux-wheel-dc8ec27ef02e',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}