import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  active1 = 'user-experience';
  active2 = 'enterprise-applications';
  active = 'discussion';
  activeIds = 'static-1';

  constructor(private title:Title, private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle('Uxmint Design - Services');
    this.meta.addTags([
      {name: 'description', content: `Enhance your product with the right strategy. Our team of design experts can help you in Customer Experience, Strategy Design, Product Ideation, Branding, Interface Design, Usability Testing.` },
      {name: 'keywords', content: `Research, Personas, Task Analysis, Site Architecture, Wireframing, Interaction, Mood board, UI Design, Usability Testing, User Architecture, User Flow, Interviews, Sketching, Focus Groups, Lean UX, Agile Process, user experience research, ux process, user interface, usability, user interface design, usability testing, ux design labs, Digital Design Agency, UX Consultant`}
    ]);
  }

}
