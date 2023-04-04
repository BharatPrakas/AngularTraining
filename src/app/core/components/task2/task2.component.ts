import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.scss']
})
export class Task2Component {
  products = [
    { img: 'https://rukminim1.flixcart.com/image/416/416/xif0q/computer/k/j/0/-original-imagnpcf4yrh7jam.jpeg?q=70', brand: 'Accer', info: 'acer Extensa Core i5 11th Gen - (8 GB/512 GB SSD/Windows 11 Home) EX 215-54-583M Thin and Light Laptop (15.6 Inch, Charcoal Black, 1.7 Kg)', offer: 'Extra ₹2000 off', price: 42000 },

    { img: 'https://rukminim1.flixcart.com/image/416/416/xif0q/computer/k/j/0/-original-imagnpcf4yrh7jam.jpeg?q=70', brand: 'Accer', info: 'acer Extensa Core i5 11th Gen - (8 GB/512 GB SSD/Windows 11 Home) EX 215-54-583M Thin and Light Laptop (15.6 Inch, Charcoal Black, 1.7 Kg)', offer: 'Extra ₹2000 off', price: 4000 },

    { img: 'https://rukminim1.flixcart.com/image/416/416/xif0q/computer/k/j/0/-original-imagnpcf4yrh7jam.jpeg?q=70', brand: 'Accer', info: 'acer Extensa Core i5 11th Gen - (8 GB/512 GB SSD/Windows 11 Home) EX 215-54-583M Thin and Light Laptop (15.6 Inch, Charcoal Black, 1.7 Kg)', offer: 'Extra ₹2000 off', price: 45000 },

    { img: 'https://rukminim1.flixcart.com/image/416/416/xif0q/computer/k/j/0/-original-imagnpcf4yrh7jam.jpeg?q=70', brand: 'Accer', info: 'acer Extensa Core i5 11th Gen - (8 GB/512 GB SSD/Windows 11 Home) EX 215-54-583M Thin and Light Laptop (15.6 Inch, Charcoal Black, 1.7 Kg)', offer: 'Extra ₹2000 off', price: 478000 },

    { img: 'https://rukminim1.flixcart.com/image/416/416/xif0q/computer/k/j/0/-original-imagnpcf4yrh7jam.jpeg?q=70', brand: 'Accer', info: 'acer Extensa Core i5 11th Gen - (8 GB/512 GB SSD/Windows 11 Home) EX 215-54-583M Thin and Light Laptop (15.6 Inch, Charcoal Black, 1.7 Kg)', offer: 'Extra ₹2000 off', price: 42200 },

  ]

  constructor(private snackBar: MatSnackBar, public dataService: DataService) { }

  ngOnInit() {
    // this.dataService.tittle.emit('Ecommerce');
    setTimeout(() => {
      this.dataService.tittle.emit('Ecommerce');
    });
  }

  openSnakbarService() {
    this.dataService.successSnakbar('Added to cart Successfully', 'Dismiss');
  }


}
