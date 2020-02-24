import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  data2 = [
    ['Enero', 10, 20, 10, 20, 15, 25],
    ['Febrero', 10, 20, 10, 30, 15, 25]
  ];
  tipo = 'bar';

  refresh;

  constructor() { }

  hola() {
    console.log(this.tipo);
    console.log(this.data2[0][2]);

    const data = {
      columns: [],
      types: null
    };
    data.columns = this.data2;
    data.types = {
      Enero: this.tipo,
      Febrero: this.tipo
    };
    const chart = c3.generate({
      bindto: '#chart1',
      data
    });

    chart.flush();
  }

  ngOnInit() {
    const data = {
      columns: [],
      types: null
    };
    data.columns = this.data2;
    data.types = {
      Enero: 'bar',
      Febrero: 'bar'
    };

    const chart = c3.generate({
      bindto: '#chart1',
      data
    });

    this.refresh = setInterval(() => {
      console.log('intervalo');
    }, 1000);
  }
}
