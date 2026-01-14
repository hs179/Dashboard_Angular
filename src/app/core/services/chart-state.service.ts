import { Injectable, signal } from '@angular/core';
import { EChartsOption } from 'echarts';

@Injectable({
  providedIn: 'root'
})
export class ChartStateService {
  private _chartOptions = signal<EChartsOption | null>(null);
  chartOptions = this._chartOptions.asReadonly();

  // 1. Add a Signal for the theme
  theme = signal<'light' | 'dark'>('light');

  // 2. Method to toggle
  toggleTheme() {
    this.theme.update(current => current === 'light' ? 'dark' : 'light');
  }

  updatePieChart(categories: any[], brands: any[]) {
    const option: EChartsOption = {
      tooltip: { trigger: 'item', formatter: '{a} <br/>{b}: {c} ({d}%)' },
      legend: { type: 'scroll', orient: 'vertical', right: 10, top: 20 },
      series: [
        {
          name: 'Category',
          type: 'pie',
          radius: [0, '30%'],
          label: { position: 'inner' },
          data: categories
        },
        {
          name: 'Brand',
          type: 'pie',
          radius: ['45%', '60%'],
          label: {
            // We remove hardcoded background colors here so ECharts theme can take over
            formatter: '{b|{b}：}{c}  {per|{d}%}  ',
            borderWidth: 0,
            rich: {
              b: { fontSize: 14, fontWeight: 'bold', lineHeight: 33 },
              per: { 
                backgroundColor: '#334455', 
                color: '#fff', 
                padding: [3, 4], 
                borderRadius: 4 
              }
            }
          },
          data: brands
        }
      ]
    };
    this._chartOptions.set(option);
  }
}