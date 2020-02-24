import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const chart = c3.generate({
      bindto: '#chart3',
      data: {
        columns: [
          ['data1', 300, 350, 300, 0, 0, 0],
          ['data2', 130, 100, 140, 200, 150, 50]
        ],
        types: {
          data1: 'area',
          data2: 'area-spline'
        }
      }
    });

  }

}
