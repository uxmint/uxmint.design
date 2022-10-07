import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  blogs: any[] = [
    {imgURL: './assets/images/home/blogs1.webp',
     name: 'by Krithika Thirunavukkarasu', 
     description: ' Designing -Notification & Alerts', 
     url: 'https://medium.com/uxmint/designing-notification-alerts-d1b97bc88b37'
    },
    {imgURL: './assets/images/home/blogs2.webp',
     name: 'by Krithika Thirunavukkarasu', 
     description: ' Designing for Data Visualisation',
     url: 'https://medium.com/uxmint/designing-for-data-visualisation-74a628a45e65'
    },
    {imgURL: './assets/images/home/blogs3.webp',
     name: 'by Udaya Kumar Sivagurunathan', 
     description: ' Designing a successful product: Is not a daydream',
     url: 'https://medium.com/uxmint/designing-a-successful-product-is-not-a-daydream-af92591078cd'
    },
    {imgURL: './assets/images/home/blogs4.webp',
     name: 'by Krithika Thirunavukkarasu', 
     description: 'User Centric Research — Cultural Impacts on Business ',
     url: 'https://medium.com/uxmint/user-centric-research-cultural-impacts-on-business-b5fa8e995b40'
    },
    {imgURL: './assets/images/home/blogs5.webp',
     name: 'by Veera Thiruppal', 
     description: ' How to experience Five Senses — in Digital Commerce',
     url: 'https://medium.com/uxmint/how-to-experience-five-senses-in-digital-commerce-463eadc5ad66'
    },
    {imgURL: './assets/images/home/blogs6.webp',
     name: 'by Krithika Thirunavukkarasu', 
     description: ' Ever thought why does the colour green or sound of water brings..',
     url: 'https://medium.com/uxmint/ever-thought-why-does-the-colour-green-or-sound-of-water-brings-calmness-6ecd72160fab'
    },
    {imgURL: './assets/images/home/blogs7.webp',
     name: 'by Syed Anees', 
     description: ' Peripheral Vision & Design Interaction',
     url: 'https://medium.com/uxmint/design-exploration-in-my-4hrs-long-journey-2bac23227c6a'
    },
    {imgURL: './assets/images/home/blogs8.webp',
     name: 'by Udaya Kumar Sivagurunathan', 
     description: 'The UX Wheel ',
     url: 'https://medium.com/uxmint/the-ux-wheel-dc8ec27ef02e'
    },
    {imgURL: './assets/images/home/blogs9.webp', 
    name: 'by Udaya Kumar Sivagurunathan',
     description: ' Heuristics in Nature',
     url: 'https://medium.com/uxmint/heuristics-in-nature-7df7123016e9'
    },
    {imgURL: './assets/images/home/blogs10.webp',
     name: 'by Krithika Thirunavukkarasu',
      description: 'A walk with Experience Design — on any normal day',
      url: 'https://medium.com/uxmint/a-walk-with-experience-design-on-any-normal-day-9a722c6a0a68'
    }
  ];

  constructor(private title:Title, private meta:Meta, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.title.setTitle('Uxmint Design - Blogs');
    this.meta.addTags([
      {name: 'description', content: `We thrive to provide meaningful design solutions for business & social challenges that can bring a positive change. Process simplification is our key to good design.` },
      {name: 'keywords', content: `ui and ux, uiux, ui and ux design, ux design blogs, ui design blog, blog design, blog website design, best design blogs, ux blog, blog ui, ui ux blogs, ui design blogs, blog post ui design, ux, ui, ui design, gui design, ui ux design, user experience, gui, ui ux, ux ui,  experience design, ux articles, app design tips`}
    ]);
  }
  openMenu(){
    this.modalService.open(HeaderComponent,{
      windowClass: 'menu'
    });
  }
}
