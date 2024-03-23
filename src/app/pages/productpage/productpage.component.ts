import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.scss'],
})
export class ProductpageComponent {
  formGroup!: FormGroup;
  value: number = 50;
  actualProfit: number = 0;
  product!: Product;
  chartOptions = {
    animationEnabled: true,
    title: {
      text: 'Price Difference (Sell vs. Buy)',
    },
    axisY: {
      title: 'Price per Unit',
    },
    toolTip: {
      shared: true,
    },
    legend: {
      cursor: 'pointer',
      itemclick: function (e: any) {
        if (
          typeof e.dataSeries.visible === 'undefined' ||
          e.dataSeries.visible
        ) {
          e.dataSeries.visible = false;
        } else {
          e.dataSeries.visible = true;
        }
        e.chart.render();
      },
    },
    data: [
      {
        type: 'column', // Use column chart for better visualization of difference
        name: 'Sell Price',
        legendText: 'Sell Price',
        showInLegend: true,
        dataPoints: [{ label: '', y: 0 }],
      },
      {
        type: 'column',
        name: 'Cost Price', // Renamed to reflect buying cost
        legendText: 'Cost Price',
        showInLegend: true,
        dataPoints: [{ label: '', y: 0 }],
      },
    ],
  };
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(id).subscribe({
      next: (result) => {
        this.product = result;
        console.log(result);
      },
      error: (err) => {
        console.error('Error fetching product:', err);
      },
    });
    this.chartOptions = {
      animationEnabled: true,
      title: {
        text: 'Price Difference (Sell vs. Buy)',
      },
      axisY: {
        title: 'Price per Unit',
      },
      toolTip: {
        shared: true,
      },
      legend: {
        cursor: 'pointer',
        itemclick: function (e: any) {
          if (
            typeof e.dataSeries.visible === 'undefined' ||
            e.dataSeries.visible
          ) {
            e.dataSeries.visible = false;
          } else {
            e.dataSeries.visible = true;
          }
          e.chart.render();
        },
      },
      data: [
        {
          type: 'column', // Use column chart for better visualization of difference
          name: 'Sell Price',
          legendText: 'Sell Price',
          showInLegend: true,
          dataPoints: [
            { label: this.product.name, y: this.product.unit_price },
          ],
        },
        {
          type: 'column',
          name: 'Cost Price', // Renamed to reflect buying cost
          legendText: 'Cost Price',
          showInLegend: true,
          dataPoints: [
            { label: this.product.name, y: this.product.making_cost },
          ],
        },
      ],
    };
  }
}
