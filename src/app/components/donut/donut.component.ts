import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent implements OnInit {

  data2 = [
    ['PUJ', 20],
    ['EIJG', 50],
    ['UD', 30],
  ];

  dataChart;

  constructor() { }

  ngOnInit() {
    this.dataChart = {
      bindto: '#chart2',
      data: {
        columns: this.data2,
        type: 'donut',
        /*types: {
          PUJ: 'pie',
          EIJG: 'donut',
          UD: 'donut'
        }*/
      },
      donut: {
        title: 'Titulo'
      },
      // onclick: (d, i) => { console.log('onclick', d, i); },
      // onmouseover: (d, i) => { console.log('onmouseover', d, i); },
      // onmouseout: (d, i) => { console.log('onmouseout', d, i); }
    };
    // this.dataChart.data.columns = this.data2;

    const chart = c3.generate(
      this.dataChart
    );
  }
}
