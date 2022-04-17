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
  dat=new Date('2022-04-17')
  dets:any
  interval:any

  constructor(private gt:GitserviceService) {
    this.searchReposa();
    this.updateDets();
   }
   updateDets(){
     
      this.interval = setInterval(() => {
        this.dets = Date.now();
        let upas:any= new Date(this.repos.updated_at)
        this.dets= this.dets - upas;
  
      }, 1000)
       
     
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
