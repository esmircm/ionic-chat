import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { ChatModel } from '../../services/model/chat.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  public users = 0;
  public message = '';
  public chats: Array<ChatModel> = new Array<ChatModel>();

  constructor(private chatService: ChatService) { }

  ngOnInit() {

    this.listenReceiveChat();
    this.listenGetUsers();
  }

  public addChat(): void {

    const newMessage: ChatModel = {
      message: this.message
    };

    this.chats.push(newMessage);

    this.chatService.sendChat(newMessage);
    this.message = '';
  }

  private listenReceiveChat(): void {

    this.chatService.receiveChat().subscribe((chat: Array<ChatModel>) => {
      this.chats = chat;
    });
  }

  private listenGetUsers(): void {

    this.chatService.getUsers().subscribe((users: number) => {
      this.users = users;
    });
  }

}
