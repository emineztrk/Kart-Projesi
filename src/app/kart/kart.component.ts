import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-kart',
  templateUrl: './kart.component.html',
  styleUrls: ['./kart.component.css']
})
export class KartComponent {

  @Input() title:string = '';
  @Input() imageUrl:string = '';
  @Input() username:string = '';
  @Input() content:string = '';

}
