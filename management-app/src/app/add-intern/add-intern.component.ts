import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InternService } from '../services/intern.service';

@Component({
  selector: 'app-add-intern',
  templateUrl: './add-intern.component.html',
  styleUrls: ['./add-intern.component.scss']
})
export class AddInternComponent implements OnInit {

  name: string
  surname: string
  gender: string
  date: string

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute, private service: InternService) { }

  ngOnInit(): void {
  }

  AddClick()
  {
    this.service.addIntern(this.name,this.surname, this.gender, this.date.substring(8, 2) , this.date.substring(5, 2), this.date.substring(0, 4)).subscribe();
  }

}
