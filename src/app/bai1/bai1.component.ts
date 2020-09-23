import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai1',
  templateUrl: './bai1.component.html',
  styleUrls: ['./bai1.component.css']
})
export class Bai1Component implements OnInit {
  x: number;
  n: number;
  s = 0;

  constructor() { }
  title = "Bài 1: Tính S(n) = x + x^2 + x^3 + … + x^n";

  ngOnInit(): void {
  }

  bai1() {
    this.s = 0;
    let lt = 1;
    for (let i = 1; i <= this.n; i++) {
      lt *= this.x;
      this.s += lt;
    }
  }

}
