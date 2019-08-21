import { Component, OnInit, Input } from '@angular/core';
import { Seccion } from '../../../../models/seccion';
import { Parametro } from '../../../../models/parametro';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})
export class SeccionComponent implements OnInit {

  @Input() seccion: Seccion;
  constructor() { }

  ngOnInit() {
  }

}
