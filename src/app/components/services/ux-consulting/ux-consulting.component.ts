import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ux-consulting',
  templateUrl: './ux-consulting.component.html',
  styleUrls: ['./ux-consulting.component.scss']
})
export class UxConsultingComponent implements OnInit {

  constructor(private title:Title, private meta:Meta) { 
    this.title.setTitle('Experience Design');
    this.meta.addTags([
      {name: 'description', content: `` },
      {name: 'keywords', content: `Research, Contextual Inquiry, Competitor Analysis, Market Analysis, Personas, Task Analysis, Information Architecture, Wireframing, Interaction, Story board, Journey map, empathy map, User Research, Heuristic Analysis, Interaction Design, Card Sorting, Usability Testing, User Architecture, User Flow, Interviews, Rapid Sketching, Sketching, Illustration, Focus Groups, Lean UX, Agile Process, user experience research, ux process, user interface, usability, usability testing, ux design labs, emotional design, remote usability testing, Behavioural design, design psychology, customer experience, omni channel experience `}
    ]);
  }

  ngOnInit() {
  }

}
