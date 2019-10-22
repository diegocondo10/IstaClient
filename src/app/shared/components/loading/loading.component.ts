import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  @Input()
  public info
  constructor() { }

  ngOnInit() {
    if (!this.info) {
      this.info = { title: 'CARGANDO' }
    }
  }

}
