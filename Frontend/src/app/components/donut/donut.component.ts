import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent implements OnInit, OnChanges {

  @Input()
  dataDonut: any;

  dataChart;

  chart;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges');
    console.log(changes);

    if (this.chart) {
      this.chart.load({
        columns: this.dataDonut
      });
    }
  }


  ngOnInit() {
    console.log('OnInit');

    this.dataChart = {
      bindto: '#chart2',
      data: {
        columns: this.dataDonut,
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
    // this.dataChart.data.columns = this.dataDonut;

    this.chart = c3.generate(
      this.dataChart
    );
  }
}
