import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import * as c3 from 'c3';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit, OnChanges {
  @Input()
  data3;
  data2 = [
    ['Enero', 10, 20, 10, 20, 15, 25],
    ['Febrero', 10, 20, 10, 30, 15, 25]
  ];
  tipo = 'bar';

  refresh;

  constructor(/*private dataService: DataService*/) { }

  hola() {
    console.log(this.tipo);
    this.createChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges');
    console.log(changes);

    if (this.data3) {
      this.createChart();
    }

    // if (this.chart) {
    //   this.chart.load({
    //     columns: this.dataDonut
    //   });
    // }
  }

  ngOnInit() {
  }

  createChart() {
    const data = {
      json: [],
      type: null,
      keys: {
        value: ['william', 'santiago', 'alvaro'],
      }
    };
    // data.columns = this.data2;
    data.json = this.data3;
    //data.types = {
    //  Enero: 'bar',
    //  Febrero: 'bar'
    //};
    data.type = this.tipo;

    const chart = c3.generate({
      bindto: '#chart1',
      data
    });
  }
}
