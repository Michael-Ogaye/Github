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
}



@Injectable({
  providedIn: 'root'
})
export class GitserviceService {
  username='Michael-Ogaye'
  
  constructor( private http:HttpClient) {

  
      
   }
   getUsers(): Observable <userData[]>{

     const userUrl=`https://api.github.com/users/${this.username}?access_token=${environment.key}`
     

    return this.http.get<userData[]>(userUrl)
  }

  
  
}
