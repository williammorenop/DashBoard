import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DashboardC3';
  data2 = [
    ['Enero', 10, 20, 10, 20, 15, 25],
    ['Febrero', 1000, 20, 10, 40, 15, 25]
  ];
  tipo = '';

  hola() {
    console.log(this.tipo);
    console.log(this.data2[0][2]);

    const data = {
      columns: [],
      types: null
    };
    data.columns = this.data2;
    data.types = {
      Enero: '', // ADD
      Febrero: ''
    };
    data.types.Febrero = this.tipo;
    data.types.Enero = this.tipo;

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
      Enero: 'bar', // ADD
      Febrero: 'bar'
    };
    data.types.Febrero = this.tipo;

    const chart = c3.generate({
      bindto: '#chart1',
      data
    });
  }
}
