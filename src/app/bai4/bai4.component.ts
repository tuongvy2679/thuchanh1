import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai4',
  templateUrl: './bai4.component.html',
  styleUrls: ['./bai4.component.css']
})
export class Bai4Component implements OnInit {
  ds = [{hoten: 'Nguyen Thi Mai', quequan: 'Hung Yen', diemthi:9}, {hoten: 'Tran Thi Anh', quequan: 'Ha Noi', diemthi:7.5},{ hoten: 'Hoang Thi Dung', quequan: 'Hai Phong', diemthi:8.3}];
  constructor() { }
  title = "Bài 4: lọc ra một danh sách mới những người có điểm thi lớn hơn 8 và quê ở Hai Phong.";

  ngOnInit(): void {
    console.log(this.ds.filter(sv => {
      return sv.diemthi > 8 && sv.quequan == 'Hai Phong';
    }));
  }
}
