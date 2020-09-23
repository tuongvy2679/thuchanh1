import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai5',
  templateUrl: './bai5.component.html',
  styleUrls: ['./bai5.component.css']
})
export class Bai5Component implements OnInit {
  arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  arrResult = [];

  constructor() { }
  title = "Bài 5: Cho biết các số là số chính phương có trong một dãy số";

  ngOnInit(): void {
    this.arrResult = this.arrNum.filter(x => {
      let sq = Math.sqrt(x);
      return ((sq - Math.floor(sq)) == 0);
    });
  }

}
