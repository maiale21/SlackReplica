import { Component, OnInit, EventEmitter, Output, OnDestroy} from '@angular/core';
<<<<<<< HEAD

import { MessageObj } from '../../objects/message-obj';
import { CreateMessageService } from '../../services/create-message.service';
import { Subscription } from 'rxjs/Subscription';
// import {ActiveUsersService} from '../../services/active-user.service'
import { MessageObjects } from '../../data/data';
// import {ActiveUsersService} from '../../services/active-user.service'

=======
import { MessageObj } from '../../style/message-obj'
import { CreateMessageService } from '../../services/create-message.service'
import { Subscription } from 'rxjs/Subscription'
>>>>>>> 165caedf811d2eb83b60ec24910ee6426655a93b

@Component({
  selector: 'app-post-to-active-chat',
  templateUrl: './post-to-active-chat.component.html',
  styleUrls: ['./post-to-active-chat.component.css']
})
<<<<<<< HEAD
export class PostToActiveChatComponent { // implements OnInit {
  constructor(private createMessageService: CreateMessageService) {
=======
export class PostToActiveChatComponent {
  constructor(private createMessageService:CreateMessageService){
>>>>>>> 165caedf811d2eb83b60ec24910ee6426655a93b

  }


  makePost(message: any): void { // HTMLDataElement
    this.createMessageService.addMessage(message.value);
    message.value = '';
  }

}
