import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  posts = [
    {
      title: 'Dağ Bisikleti',
      imageUrl: 'assets/biking.jpeg',
      username: 'dag',
      content: 'Çok hızlı sürdüm'
    },
    {
      title: 'Tırmanış',
      imageUrl: 'assets/mountain.jpeg',
      username: 'uludag',
      content: 'Bugün de iyi tırmandım'
    },
    {
      title: 'Doğa Yürüyüşü',
      imageUrl: 'assets/tree.jpeg',
      username: 'doga',
      content: 'Hadi turlayalım'
    }
  ]
}
