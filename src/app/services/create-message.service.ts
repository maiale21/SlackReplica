import { Injectable } from '@angular/core';
import { MessageObj } from '../objects/message-obj';
import { MessageObjects } from '../data/data';


@Injectable()
export class CreateMessageService {

  constructor() { }

// <<<<<<< HEAD
//   addMessage(message: string) {
//     const messageObj = this.createMessageObj(message);
//     MessageObjects.push(messageObj);
//   }
//
//   createMessageObj(message: string): MessageObj {
//       const messageObj: MessageObj = {
//         message: message,
//         messageId: CreateMessageService.generateId(),
//         userId: 0,
//         time: new Date()
//       }
//       return messageObj;
//   }
//
//   private static generateId(): number {
//     return new Date().getTime();

  addMessage(message: string) {
    const newMessage: MessageObj = new MessageObj(message);
    MessageObjects.push(newMessage);

  }

}
