//This class is responsible for all interation with the data API (a .NET Core WebAPI, which in turn interacts with a repository), and emitting notifications when data changes 

import { Inject, Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Account, Category, Transaction, User } from './interfaces';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

    // --Events--
    @Output() accountAdded = new EventEmitter();
    @Output() accountDeleted = new EventEmitter();
    @Output() accountUpdated = new EventEmitter();
    @Output() categoryAdded = new EventEmitter();
    @Output() categoryDeleted = new EventEmitter();
    @Output() categoryUpdated = new EventEmitter();
    @Output() transactionAdded = new EventEmitter();
    @Output() transactionDeleted = new EventEmitter();
    @Output() transactionUpdated = new EventEmitter();
    @Output() userDeleted = new EventEmitter();
    @Output() userDemoted = new EventEmitter();
    @Output() userPromoted = new EventEmitter();
    @Output() userReset = new EventEmitter();

    constructor(private http: HttpClient) { }


    // --Accounts--
    getAccounts(): Observable<Account[]> {
        console.log("data.service.getAccounts...");
        return this.http.get<Account[]>('/api/Accounts');
    }

    getAccount(id): Observable<Account> {
        console.log("data.service.getAccount...");
        return this.http.get<Account>('/api/Accounts/' + id);
    }

    addAccount(accountToAdd: Account) {
        console.log("data.service.addAccount received: " + JSON.stringify(accountToAdd));
        const response = this.http.post<Account>('/api/Accounts', accountToAdd)
            .toPromise()
            .then(result => {
                this.accountAdded.emit(result);
            });
    }

    deleteAccount(id: number) {
        console.log("data.service.deleteAccount received: " + id);
        const response = this.http.delete<Account>('/api/Accounts/' + id)
            .toPromise()
            .then(result => {
                this.accountDeleted.emit(result);
            });
    }

    updateAccount(accountToUpdate: Account) {
        console.log("data.service.updateAccount received: " + JSON.stringify(accountToUpdate));
        const response = this.http.put<Account>('/api/Accounts', accountToUpdate)
            .toPromise()
            .then(result => {
                this.accountUpdated.emit(result);
            });
    }


    // --Categories--
    getCategories(): Observable<Category[]> {
        console.log("data.service.getCategories...");
        return this.http.get<Category[]>('/api/Categories');
    }

    getCategory(id): Observable<Category> {
        console.log("data.service.getCategory...");
        return this.http.get<Category>('/api/Categories/' + id);
    }

    addCategory(categoryToAdd: Category) {
        const response = this.http.post<Category>('/api/Categories', categoryToAdd)
            .toPromise()
            .then(result => {
                this.categoryAdded.emit(result);
            });
    }

    deleteCategory(id: number) {
        const response = this.http.delete<Category>('/api/Categories/' + id)
            .toPromise()
            .then(result => {
                this.categoryDeleted.emit(result);
            });
    }

    updateCategory(categoryToUpdate: Category) {
        const response = this.http.put<Category>('/api/Categories', categoryToUpdate)
            .toPromise()
            .then(result => {
                this.categoryUpdated.emit(result);
            });
    }


    // --Transactions--
    getTransactions(): Observable<Transaction[]> {
        console.log("data.service.getTransactions...");
        return this.http.get<Transaction[]>('/api/Transactions');
    }

    getTransaction(id): Observable<Transaction> {
        console.log("data.service.getTransaction...");
        return this.http.get<Transaction>('/api/Transactions/' + id);
    }

    addTransaction(transactionToAdd: Transaction) {
        const response = this.http.post<Transaction>('/api/Transactions', transactionToAdd)
            .toPromise()
            .then(result => {
                this.transactionAdded.emit(result);
            });
    }

    deleteTransaction(id: number) {
        const response = this.http.delete<Transaction>('/api/Transactions/' + id)
            .toPromise()
            .then(result => {
                this.transactionDeleted.emit(result);
            });
    }

    updateTransaction(transactionToUpdate: Transaction) {
        const response = this.http.put<Transaction>('/api/Transactions', transactionToUpdate)
            .toPromise()
            .then(result => {
                this.transactionUpdated.emit(result);
            });
    }


    // --Users--
    getUsers(): Observable<User[]> {
        return this.http.get<User[]>('/api/Users');
    }

    getUser(id): Observable<User> {
        console.log("data.service.getUser...");
        return this.http.get<User>('/api/User/' + id);
    }

    makeAdmin(id: string) {
        const response = this.http.put<HttpResponse<any>>('/api/Users/Admin/' + id, id)
            .toPromise()
            .then(result => {
                this.userPromoted.emit(result);
            });
    }

    unmakeAdmin(id: string) {
        const response = this.http.put<HttpResponse<any>>('/api/Users/NoAdmin/' + id, id)
            .toPromise()
            .then(result => {
                this.userDemoted.emit(result);
            });
    }

    resetPassword(id: string, newPassword: string) {
        const response = this.http.put<HttpResponse<any>>('/api/Users/Reset' + id, newPassword)
            .toPromise()
            .then(result => {
                this.userReset.emit(result);
            });
    }

    deleteUser(id: string) {
        const response = this.http.delete<User>('/api/Users' + id)
            .toPromise()
            .then(result => {
                this.userDeleted.emit(result);
            });
    }
}
