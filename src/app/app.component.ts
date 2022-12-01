import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  newMessage: string = '';
  messageList: string[] = [];
  @ViewChild("myInput", {static: false}) myInput!: ElementRef;
  constructor(private chatService: ChatService){

  }

  ngOnInit(){
    this.chatService.getNewMessage().subscribe((message: string) => {
      this.messageList.push(message);
    })
  }

  sendMessage(){
    this.chatService.sendMessage(this.newMessage);
    this.newMessage = '';
  }

  onSelectEmoji(e:any){
    this.newMessage += e.emoji.native
  }

}
