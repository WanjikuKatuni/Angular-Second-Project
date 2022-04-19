import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { GitsearchService } from 'src/app/service/gitsearch.service';

@Component({
  selector: 'app-gitresult',
  templateUrl: './gitresult.component.html',
  styleUrls: ['./gitresult.component.css']
})
export class GitresultComponent implements OnInit {

  user!: User;
  userRepositories:any = [];
  gitsearchService:GitsearchService

  constructor(gitsearchService:GitsearchService) {
    this.gitsearchService = gitsearchService;
   }

  ngOnInit(): void {
    this.user = this.gitsearchService.user;
    this.userRepositories=this.gitsearchService.repos
  }

}
