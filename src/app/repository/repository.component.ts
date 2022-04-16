import { Component, OnInit } from '@angular/core';
import { GitserviceService } from '../services/gitservice.service';
import { Repo } from '../repo';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  repos:any;
  term!:string

  constructor(private gt:GitserviceService) {
    this.searchReposa();
   }

  ngOnInit(): void {
  }

  

  searchReposa(){
    this.gt.updateTerm(this.term)
    this.gt.repoSearch().subscribe((al)=>{
      console.log(al.items)
      let b= al.items
      
      //   this.repos.push(new Repo(b.name,b.blob_url,b.description,b.forks,b.size,new Date(b.created_at),b.visibility,b.watchers))
      // console.log(this.repos)

      this.repos=b


    })
  }

}
