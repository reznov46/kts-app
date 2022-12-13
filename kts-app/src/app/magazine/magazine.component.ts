import { Component, OnInit } from '@angular/core';
import { GunService } from '../gun.service';

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.scss'],
})
export class MagazineComponent implements OnInit {
  gunsList: any[] = [];
  constructor(private gunsService: GunService) {}

  ngOnInit(): void {
    this.getGuns();
  }

  getGuns() {
    this.gunsService.guns().subscribe((res) => {
      console.log(res);
      this.gunsList = res;
    });
  }
}
