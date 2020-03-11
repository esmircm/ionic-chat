import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  public users = 0;
  public message = '';
  public messages: Array<string> = new Array<string>();

  constructor(private chatService: ChatService) { }

  ngOnInit() {

    this.listenReceiveChat();
    this.listenGetUsers();
  }

  public addChat(): void {

    this.messages.push(this.message);
    this.chatService.sendChat(this.message);
    this.message = '';
  }

  private listenReceiveChat(): void {

    this.chatService.receiveChat().subscribe((message: string) => {
      this.messages.push(message);
    });
  }

  private listenGetUsers(): void {

    this.chatService.getUsers().subscribe((users: number) => {
      this.users = users;
    });
  }

}
