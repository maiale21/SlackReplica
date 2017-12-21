import {Component} from '@angular/core';
import {CreateMessageService} from '../../services/create-message.service';

// import {ActiveUsersService} from '../../services/active-user.service'


@Component({
  selector: 'app-post-to-active-chat',
  templateUrl: './post-to-active-chat.component.html',
  styleUrls: ['./post-to-active-chat.component.css']
})

export class PostToActiveChatComponent {
  constructor(private createMessageService: CreateMessageService) {

  }
  makePost(message: any): void {

    this.createMessageService.addMessage(message.value);
    message.value = '';
  }
}
