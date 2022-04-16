import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

interface userData{
  avatar_url:string;
  login:string;
  html_url:string
  organizations_url:string
  repos_url:string;
  followers_Url:string;
  following_url:string
  followers:number;
  following:number;
  created_at:string;
  id:number
  hirerable:string;
  public_repos:number;
  email:string;
  blog:string;
  updated_at:number

}



@Injectable({
  providedIn: 'root'
})
export class GitserviceService {
  username='kirandash'
  
  constructor( private http:HttpClient) {

  
      
   }
   getUsers(): Observable <userData[]>{

     const userUrl=`https://api.github.com/users/${this.username}?${environment.key}`
     

    return this.http.get<userData[]>(userUrl)
  }

  
  
}
