import { Component, OnInit } from '@angular/core';
import { GitserviceService } from '../services/gitservice.service';
import { Profile } from '../profile';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any;

  constructor( private gita:GitserviceService) {
    this.createUser()
    
    
   }

  ngOnInit(): void {
    

  }
  createUser(){

    this.gita.getUsers().subscribe((res)=>{
      
      // console.log(res)
      // let dataSent=new Profile(res.id,res.avatar_url,res.login,res.followers,res.following,new Date(res.created_at),res.organizations_url,res.hirerable,res.email,res.email)
      // this.users.push(dataSent);
      this.users=res
      
      
      console.log(this.users)
      
    })

  }

}
