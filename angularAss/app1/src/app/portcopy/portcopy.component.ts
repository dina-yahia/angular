import { Component } from '@angular/core';
import {Portcopy} from '../portcopy';
@Component({
  selector: 'app-portcopy',
  templateUrl: './portcopy.component.html',
  styleUrls: ['./portcopy.component.css']
})
export class PortcopyComponent {
  port:Portcopy[]=[
    {tittle:'LOG CABIN',img:'assets/images/1.png'},
    {tittle:'TASTY CAKE',img:'assets/images/2.png'},
    {tittle:'CIRCUS TENT',img:'assets/images/3.png'},
    {tittle:'CONTROLLER',img:'assets/images/4.png'},
    {tittle:'LOCKED SAFE',img:'assets/images/5.png'},
    {tittle:'SUBNARINE',img:'assets/images/6.png'}
  ]
  view:boolean=true
  portImg:Portcopy=
  {tittle:'LOG CABIN',img:'assets/images/1.png'}
}
