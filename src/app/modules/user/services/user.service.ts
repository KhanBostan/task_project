import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/core/models/user';
import { ErrorHandlingService } from 'src/app/shared/services/error-handling.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.apiUrl; 
  
  private usersSubject = new BehaviorSubject<User[]>([]); 

  constructor(private http: HttpClient, private errorHandler: ErrorHandlingService) {
    this.loadUsers();
  }

  private loadUsers(): void {
    this.http.get<User[]>(this.apiUrl).pipe(
      catchError(err => {
        this.errorHandler.handleError(err);
        return of([]); 
      })
    ).subscribe(users => {
      this.usersSubject.next(users); 
    });
  }

  getUsers(): Observable<User[]> {
    return this.usersSubject.asObservable(); 
  }

  addUser(user: User): Observable<User[]> {
    const currentUsers = this.usersSubject.value;
    currentUsers.push(user); 
    this.usersSubject.next(currentUsers); 
    return this.getUsers();
  }

  updateUser(updatedUser: User): Observable<User[]> {
    const currentUsers = this.usersSubject.value;
    const index = currentUsers.findIndex(user => user.id === updatedUser.id);
    if (index !== -1) {
      currentUsers[index] = updatedUser; 
      this.usersSubject.next(currentUsers); 
    }
    return this.getUsers();
  }

  deleteUser(id: number): Observable<User[]> {
    const currentUsers = this.usersSubject.value;
    const updatedUsers = currentUsers.filter(user => user.id !== id);
    this.usersSubject.next(updatedUsers); 
    return of(updatedUsers).pipe(
      catchError(err => {
        this.errorHandler.handleError(err);
        return of(currentUsers); 
      })
    );
  }
}
