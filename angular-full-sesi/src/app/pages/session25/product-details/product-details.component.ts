import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {

  product: Product = {} as Product;
  private productService: ProductService;

  ProductId: number;

  constructor(
    activatedRoute: ActivatedRoute,
    productService: ProductService,
    // Kita bisa manfaatkan Router untuk melakukan navigasi
    // seperti pada contoh method goBack() di bawah
    private router: Router
  ) {
    this.ProductId = activatedRoute.snapshot.params.id
    this.productService = productService
  }

  ngOnInit(): void {
    this.getOneProduct(this.ProductId)
  }

  getOneProduct (id: number) {
    this.productService
    .getOneProduct(id)
    .subscribe(p => this.product = p)
  }

  goBack() {
    this.router.navigate(['session25/products'])
  }

}
