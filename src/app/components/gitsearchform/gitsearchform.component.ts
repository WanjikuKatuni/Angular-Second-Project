import { Component, OnInit } from '@angular/core';
import { GitsearchService } from 'src/app/service/gitsearch.service';

@Component({
  selector: 'app-gitsearchform',
  templateUrl: './gitsearchform.component.html',
  styleUrls: ['./gitsearchform.component.css']
})
export class GitsearchformComponent implements OnInit {

 username!: string;
 gitsearchService:GitsearchService;

submitUsername() {
  this.gitsearchService.getUserData(this.username);
  

}

  constructor(gitsearchService:GitsearchService) { 
    this.gitsearchService = gitsearchService;
  }

  ngOnInit(): void {
  }

}
