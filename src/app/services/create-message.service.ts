import { Injectable } from '@angular/core';
import { MessageObj } from '../style/message-obj';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { MessageObjects } from '../data/data';

@Injectable()
export class CreateMessageService {

  constructor() { }

  addMessage(message: string) {
    const messageObj = this.createMessageObj(message);
    MessageObjects.push(messageObj);
  }

  createMessageObj(message: string): MessageObj {
      const messageObj: MessageObj = {
        message: message,
        messageId: CreateMessageService.generateId(),
        userId: 0,
        time: new Date()
      }
      return messageObj;
  }

  private static generateId(): number {
    return new Date().getTime();
  }

}
