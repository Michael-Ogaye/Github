import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'


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
    private userName!:string
    private searchTerm!:string
  
  
  constructor( private http:HttpClient) {


  
      
   }
   
   getUsers(): Observable <userData[]>{

     const userUrl=`https://api.github.com/users/${this.userName}?${environment.key}`
     

    return this.http.get<userData[]>(userUrl)
  }
  getUserRepos():Observable<any[]>{
    const userUrlr=`https://api.github.com/users/${this.userName}/repos?${environment.key}`

    return this.http.get<any[]>(userUrlr)

  }

  repoSearch():Observable<any>{
    const serchUrl=`https://api.github.com/search/repositories?q=${this.searchTerm}&1,5`
    return this.http.get<any>(serchUrl);


  }
  updateProf(rcv:string){
    this.userName=rcv

  }

  updateTerm(ot:string){
    this.searchTerm=ot

  }

  
  
}
