import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai6',
  templateUrl: './bai6.component.html',
  styleUrls: ['./bai6.component.css']
})
export class Bai6Component implements OnInit {
  arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  S = 0;

  constructor() { }
  title = "Bài 6: Tính tổng các phần tử là các số dương có trong một dãy số.";

  ngOnInit(): void {
    this.arrNum.map(x => {
      this.S += x > 0 ? x : 0;
    });
  }

}
