import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  product: Product = {
    name: 'cipo',
    costOfMakingUnit: 50,
    requiredQuantity: 1000,
    unitSellPrice: 75,
  };
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
        dataPoints: [
          { label: this.product.name, y: this.product.unitSellPrice },
        ],
      },
      {
        type: 'column',
        name: 'Cost Price', // Renamed to reflect buying cost
        legendText: 'Cost Price',
        showInLegend: true,
        dataPoints: [
          { label: this.product.name, y: this.product.costOfMakingUnit },
        ],
      },
    ],
  };
  constructor(private productService: ProductService) {}

  ngOnInit() {
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
            { label: this.product.name, y: this.product.unitSellPrice },
          ],
        },
        {
          type: 'column',
          name: 'Cost Price', // Renamed to reflect buying cost
          legendText: 'Cost Price',
          showInLegend: true,
          dataPoints: [
            { label: this.product.name, y: this.product.costOfMakingUnit },
          ],
        },
      ],
    };
  }
}
