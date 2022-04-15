import { Component, OnInit } from '@angular/core';
import { GitserviceService } from '../services/gitservice.service';
import { Profile } from '../profile';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:Profile[]=[]

  constructor( private gits:GitserviceService) {
    this.gits.getUsers().subscribe((res)=>{
      console.log(res)
      // let dataSent=new Profile(res[0].avatar_url,res[0].login,res[0].followers,res[0].following,new Date(res[0].))
      
      
    })
   }

  ngOnInit(): void {
  }

}
