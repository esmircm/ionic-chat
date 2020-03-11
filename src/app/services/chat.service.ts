import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket: Socket) { }

  public sendChat(message: string): void {

    this.socket.emit('chat', message);
  }

  public receiveChat(): Observable<unknown> {

    return this.socket.fromEvent('chat');
  }

  public getUsers(): Observable<unknown> {

    return this.socket.fromEvent('users');
  }
}
