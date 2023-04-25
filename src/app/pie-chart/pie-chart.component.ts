import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
 
  Highcharts = Highcharts
chartOptions={}
// class il start il thanne varunn METHOD il aahnu code koduknde..so athu constructoril koduth.
  constructor(){
    // constructor il oru object create cheyth athil code koduth.
   this.chartOptions={
   
    chart: {
      type: 'pie',
      options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
      }
  },
  title: {
      text: 'Average Student Admission : 2022-2023',
      align: 'left'
  },
  
  accessibility: {
      point: {
          valueSuffix: '%'
      }
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          depth: 35,
          dataLabels: {
              enabled: true,
              format: '{point.name}'
          }
      }
  },
   credits:{
    enabled:false
   },
  series: [{
      type: 'pie',
      name: 'Count',
      data: [
          ['MEARN', 23],
          ['PYTHON', 12],
          ['ASP.NET', 8],
          ['TESTING', 20],
          ['FLUTTER', 7],
          ['BIGDATA', 30]
      ]
  }]
   }
  }
}