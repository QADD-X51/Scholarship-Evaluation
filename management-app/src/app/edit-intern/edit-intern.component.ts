import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InternService } from '../services/intern.service';

@Component({
  selector: 'app-edit-intern',
  templateUrl: './edit-intern.component.html',
  styleUrls: ['./edit-intern.component.scss']
})
export class EditInternComponent implements OnInit {

  name: string
  surname: string
  gender: string
  date: string

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute, private service: InternService) { }

  ngOnInit(): void {
  }

  EditClick()
  {
    let id: string
    this._activatedRoute.params.subscribe(parameter => id = parameter['id'])
    this.service.editIntern(id ,this.name,this.surname, this.gender, this.date.substring(8, 2) , this.date.substring(5, 2), this.date.substring(0, 4)).subscribe();
  }

}
