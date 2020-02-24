import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';
import { DataService } from './services/data.service';

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
  num = 20;
  dataBar;
  refresh;

  constructor(private dataService: DataService) {

  }

  ngOnInit() {

    this.getPointsBar();
    this.refresh = setInterval(() => {
      console.log('intervalo');
      //Donut
      const numnew = this.dataDonut[0][1];
      this.dataDonut[0][1] = this.num;
      this.dataDonut = [...this.dataDonut];
      this.num += 5;

      // Bar
      this.getPointsBar();
    }, 10000);

  }

  getPointsBar() {
    this.dataService.getPointBar().subscribe(data => {
      console.log(data);
      this.dataBar = data;
    });
  }

}
