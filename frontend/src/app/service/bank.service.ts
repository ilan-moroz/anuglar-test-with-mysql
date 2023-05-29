import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AccountAction } from 'src/Models/AccountAction';

@Injectable({
  providedIn: 'root',
})
export class BankService {
  constructor(private http: HttpClient) {}

  // service that get all account actions by bank account number
  getBankActions(bankAccountNumber: number): Observable<any> {
    const api = `http://localhost:8080/api/v1/bank/allActions/${bankAccountNumber}`;
    return this.http.get(api);
  }

  // service that and new action to the database
  addNewAction(newAction: AccountAction) {
    const api = `http://localhost:8080/api/v1/bank/newAction`;
    return this.http.post(api, newAction);
  }
}
