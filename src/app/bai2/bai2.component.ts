import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai2',
  templateUrl: './bai2.component.html',
  styleUrls: ['./bai2.component.css']
})
export class Bai2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
    var gt = (n) => {
      let s = 1;
      for (let i = 1; i <= n; i++) {
        s = s * i;
      }
      return s;
    }
    let s = 0;
    let n = 3;
    let x = 2;  
    for (let i = 1; i <= n; i++) {
      s = s + Math.pow(x, i) / gt(i) + (-1) * Math.pow(x, i) / gt(i);
    }
    console.log(s);
  }

}
