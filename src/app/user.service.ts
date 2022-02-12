import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from './model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  createUser(userData:UserData): Observable<UserData> {
    return this.http.post<UserData>("https://6207c58322c9e90017d32ef7.mockapi.io/userdata",userData)
  }

  userData(): Observable<Array<UserData>>{
    return this.http.get<Array<UserData>>("https://6207c58322c9e90017d32ef7.mockapi.io/userdata")
  }

  userById(id:string):Observable<UserData> {
    return this.http.get<UserData>(`https://6207c58322c9e90017d32ef7.mockapi.io/userdata/${id}`)
  }

  updateUserById(id:string,userData:UserData):Observable<UserData>{
    return this.http.put<UserData>(`https://6207c58322c9e90017d32ef7.mockapi.io/userdata/${id}`,userData)
  }

  deleteUserById(id:string):Observable<UserData>{
    return this.http.delete<UserData>(`https://6207c58322c9e90017d32ef7.mockapi.io/userdata/${id}`)
  }

}
