import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gitsearchform',
  templateUrl: './gitsearchform.component.html',
  styleUrls: ['./gitsearchform.component.css']
})
export class GitsearchformComponent implements OnInit {

 username!: string;

submitUsername() {

}

  constructor() { }

  ngOnInit(): void {
  }

}
