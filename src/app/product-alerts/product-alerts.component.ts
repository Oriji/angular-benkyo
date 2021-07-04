import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  // REVIEW: 「!: Product | undefined;」の部分が分からない パースしてるのか？
  @Input() product!: Product | undefined;
  // html側でxxx.emit()する変数名と一致していれば、EventEmitterの変数名は何でもよい。
  @Output() notify = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
