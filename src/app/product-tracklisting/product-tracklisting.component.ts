import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Album } from '../album';
import { t } from '@angular/core/src/render3';

@Component({
  selector: 'app-product-tracklisting',
  templateUrl: './product-tracklisting.component.html',
  styleUrls: ['./product-tracklisting.component.css']
})
export class ProductTracklistingComponent implements OnInit {

  constructor(private _productService: ProductService) { }
    albumInfo: Album;

  ngOnInit() {
    this._productService.getAlbum(1)
      .subscribe(
        response => this.albumInfo = response
      )
  }

}
