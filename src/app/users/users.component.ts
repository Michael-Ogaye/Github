import { Component, OnInit } from '@angular/core';
import { GitserviceService } from '../services/gitservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  data:any=[]

  constructor( private gits:GitserviceService) {
    this.gits.getUsers().subscribe((res)=>{
      console.log(res)
      
    })
   }

  ngOnInit(): void {
  }

}
