import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
showN:boolean = true
showE:boolean = true
showP:boolean = true
showM:boolean = true
nameValue:string=''
emailValue:string=''
phoneValue:string=''
messageValue:string=''
showName(){
  this.nameValue =="aaa"? this.showN=true:this.showN=false
  this.nameValue ==""
}
showEmail(){
  this.emailValue =="mm"? this.showE=true:this.showE=false
  this.emailValue ==""
}
showphone(){
  this.phoneValue =="aaa"? this.showP=true:this.showP=false
  this.phoneValue ==""
}
showMessage(){
  this.messageValue =="aaa"? this.showM=true:this.showM=false
  this.messageValue ==""
}
}
