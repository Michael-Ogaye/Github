import { Component, OnInit } from '@angular/core';
import { GitserviceService } from '../services/gitservice.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  constructor(private gt:GitserviceService) {
    this.searchReposa();
   }

  ngOnInit(): void {
  }

  searchReposa(){
    this.gt.repoSearch().subscribe((al)=>{
      console.log(al)
    })
  }

}
