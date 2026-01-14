import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { ChartStateService } from '../../core/services/chart-state.service';
import { NgxEchartsDirective } from 'ngx-echarts';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MySharedLibComponent } from 'my-shared-lib';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgxEchartsDirective, CommonModule, FormsModule, MySharedLibComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  private http = inject(HttpClient);
  public chartService = inject(ChartStateService);
  private route = inject(ActivatedRoute);

  limit = signal<any>(10);
  activeTab: 'overview' | 'line' | 'bar' = 'overview';

  setActiveTab(tab: 'overview' | 'line' | 'bar') {
    this.activeTab = tab;
  }

  // Dummy Line Chart Options
  lineChartOptions: EChartsOption = {
    title: { text: 'Monthly Sales' },
    tooltip: { trigger: 'axis' },
    xAxis: { type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
    yAxis: { type: 'value' },
    series: [{ data: [150, 230, 224, 218, 135, 147], type: 'line', smooth: true }]
  };

  // Dummy Bar Chart Options
  barChartOptions: EChartsOption = {
    title: { text: 'Stock by Category' },
    tooltip: { trigger: 'axis' },
    xAxis: { type: 'category', data: ['Electronics', 'Clothing', 'Home', 'Toys'] },
    yAxis: { type: 'value' },
    series: [{ data: [120, 200, 150, 80], type: 'bar' }]
  };

  ngOnInit() {
    const resolvedData = this.route.snapshot.data['initialProducts'];

    if (resolvedData) {
      console.log('Using data from Resolver');
      this.processAndDisplayData(resolvedData.products);
    }
  }

  processAndDisplayData(products: any[]) {
    const catCounts: Record<string, number> = {};
    const brandCounts: Record<string, number> = {};

    products.forEach(p => {
      catCounts[p.category] = (catCounts[p.category] || 0) + 1;
      brandCounts[p.brand || 'Other'] = (brandCounts[p.brand || 'Other'] || 0) + 1;
    });

    const categories = Object.keys(catCounts).map(k => ({ name: k.toUpperCase(), value: catCounts[k] }));
    const brands = Object.keys(brandCounts).map(k => ({ name: k, value: brandCounts[k] }));

    this.chartService.updatePieChart(categories, brands);
  }

  onLimitChange(value: any) {
    const val = Number(value);
    if (val > 0 && val <= 10000) {
      this.limit.set(val);
      const url = `https://dummyjson.com/products?limit=${this.limit()}`;
      this.http.get<any>(url).subscribe(res => {
        this.processAndDisplayData(res.products);
      });
    }
  }
}