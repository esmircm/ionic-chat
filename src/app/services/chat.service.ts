import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { ChatModel } from './model/chat.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket: Socket) { }

  public sendChat(message: ChatModel): void {

    this.socket.emit('chat', message);
  }

  public receiveChat(): Observable<Array<ChatModel>> {

    return this.socket.fromEvent('chat');
  }

  public getUsers(): Observable<unknown> {

    return this.socket.fromEvent('users');
  }
}
