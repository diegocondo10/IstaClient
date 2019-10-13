import { Component, OnInit, Input } from '@angular/core';
import { DetalleRespuesta } from '../../../../../../models/detalle-respuesta';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {

  @Input() public detalle: DetalleRespuesta
  @Input() form: FormGroup
  constructor() { }

  ngOnInit() {

    console.log(this.detalle.pregunta.id);

  }

}
