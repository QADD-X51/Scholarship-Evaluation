import { Component, OnInit, OnChanges } from '@angular/core';
import { Intern } from '../intern';
import { InternService } from '../services/intern.service';

@Component({
  selector: 'app-intern',
  templateUrl: './intern.component.html',
  styleUrls: ['./intern.component.scss']
})
export class InternComponent implements OnInit {

  interns: Array<Intern>;

  constructor(private service: InternService) { }

  ngOnInit(): void {
    this.service.getInterns().subscribe(interns => this.interns = interns)
  }

  ngOnChanges(): void {
    this.service.getInterns().subscribe(interns => this.interns = interns)
  }

  DeleteIntern(inputID: string)
  {
    this.service.removeIntern(inputID).subscribe();
  }
}
