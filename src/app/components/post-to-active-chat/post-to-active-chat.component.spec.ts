import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MessageService } from '../../services/message.service';

import { PostToActiveChatComponent } from './post-to-active-chat.component';

describe('PostToActiveChatComponent', () => {
  let component: PostToActiveChatComponent;
  let fixture: ComponentFixture<PostToActiveChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostToActiveChatComponent ],
      providers: [MessageService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostToActiveChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});