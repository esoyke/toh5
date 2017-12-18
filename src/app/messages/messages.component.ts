import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
//import { ThemeService } from '../theme-control/theme.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService
    // , private themeService: ThemeService
  ) {}

  ngOnInit() {
  }

  // TODO is there a way around having to create a wrapper like this in every component where we want to use the theme service?
  // getColor(elementName: String){
  //   return this.themeService.getColor(elementName);
  // }

}
