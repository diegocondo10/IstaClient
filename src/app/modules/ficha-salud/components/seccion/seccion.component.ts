import { Component, OnInit, Input } from '@angular/core';
import { SeccionFS } from '../../../../models/seccion-ficha-salud';
import { Parametro } from '../../../../models/parametro';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})
export class SeccionComponent implements OnInit {

  @Input() seccion: SeccionFS;
  constructor() { }

  ngOnInit() {
  }

}
