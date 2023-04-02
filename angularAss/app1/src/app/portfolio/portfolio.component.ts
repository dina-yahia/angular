import { Component } from '@angular/core';
import {Portfolio} from '../portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
port:Portfolio[]=[
  {tittle:'LOG CABIN',img:'assets/images/1.png'},
  {tittle:'TASTY CAKE',img:'assets/images/2.png'},
  {tittle:'CIRCUS TENT',img:'assets/images/3.png'},
  {tittle:'CONTROLLER',img:'assets/images/4.png'},
  {tittle:'LOCKED SAFE',img:'assets/images/5.png'},
  {tittle:'SUBNARINE',img:'assets/images/6.png'}
]
view:boolean=true
portImg:Portfolio=
{tittle:'LOG CABIN',img:'assets/images/1.png'}
}
