import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DashboardC3';
  dataDonut = [
    ['PUJ', 20],
    ['EIJG', 50],
    ['UD', 30],
  ];

  refresh;
  num = 20;

  ngOnInit() {

    this.refresh = setInterval(() => {
      console.log('intervalo');

      const numnew = this.dataDonut[0][1];
      this.dataDonut[0][1] = this.num;
      this.dataDonut = [...this.dataDonut];
      this.num += 5;
    }, 1000);
  }

}
