import { TestBed, inject } from '@angular/core/testing';
import { MessageObjects } from '../data/data';
import { MessageService } from './message.service';
import { MessageObj } from '../objects/message-obj';

describe('MessageService', () => {
  let testMessage1: MessageObj;
  let testMessage2: MessageObj;
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService]
    });
    service = TestBed.get(MessageService);
    testMessage1 = new MessageObj('hello');
    testMessage2 = new MessageObj('world');
    MessageObjects.push(testMessage1);
    MessageObjects.push(testMessage2);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //
  // it('should add a message to the message service', () => {
  //
  // });
  //
  // it('should get message', () => {
  //   service.addMessageToService(testMessage1);
  //   console.log(service.getMessage().map(val => val.json());
  //   service.getMessage().toPromise().then( (result) =>{
  //     console.log("result: "+result)
  //     //expect(result.message).toEqual('helo')
  //   });
  // });

  it('should get message by messageId (message exist)', () =>{
    expect(service.getMessageByMessageId(0).message).toEqual('hello');
  });

  it('should get message by messageId (message does not exist)', () =>{
    expect(service.getMessageByMessageId(10)).toBeUndefined();
  });

  it('should edit message by messageId (message does exist)', () => {
    service.editMessageByMessageId(0, 'goodbye');
    expect(service.getMessageByMessageId(0).message).toEqual('goodbye');
  });
  it('should edit message by messageId (message does not exist)', () => {
    expect(service.editMessageByMessageId(14, 'goodbye')).toBeFalsy();
  });

});
