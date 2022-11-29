import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { io } from "socket.io-client";
import { environment as env } from 'src/environment/environment';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  public message$: BehaviorSubject<string> = new BehaviorSubject('');
  
  constructor() {}

  // socket = io('http://192.168.9.17:3000');
  socket = io('http://localhost:3000');
  public sendMessage(message:any) {
    this.socket.emit('message', message);
  }

  public getNewMessage = () => {
    this.socket.on('message', (message) =>{
      this.message$.next(message);
    });
    
    return this.message$.asObservable();
  };
}
