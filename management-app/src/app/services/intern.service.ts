import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Intern } from '../intern';

@Injectable({
  providedIn: 'root'
})
export class InternService {

  readonly baseUrl = "https://localhost:5001"
  readonly httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getInterns() {
    return this.httpClient.get<Array<Intern>>(this.baseUrl + "/Intern", this.httpOption);
  }

  addIntern(inputName: string, inputSurname: string, inputGender: string, inputBDay:string, inputBMonth:string, inputBYear:string)
  {
    let newIntern: Intern = {
      id: "",
      name: inputName,
      surname: inputSurname,
      gender: inputGender,
      birthDay: inputBDay,
      birthMonth: inputBMonth,
      birthYear: inputBYear
    }

    return this.httpClient.post(this.baseUrl + "/Intern", newIntern, this.httpOption);
  }

  removeIntern(inputID: string)
  {
    return this.httpClient.delete(this.baseUrl + '/Intern/' + inputID, this.httpOption);
  }

  editIntern(inputID: string, inputName: string, inputSurname: string, inputGender: string, inputBDay:string, inputBMonth:string, inputBYear:string)
  {
    let newIntern: Intern = {
      id: inputID,
      name: inputName,
      surname: inputSurname,
      gender: inputGender,
      birthDay: inputBDay,
      birthMonth: inputBMonth,
      birthYear: inputBYear
    }

    return this.httpClient.put(this.baseUrl + "/Intern/" + inputID, newIntern, this.httpOption);
  }
}
