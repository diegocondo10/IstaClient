import { Component, OnInit, Input } from '@angular/core';
import { DetalleDiagnostico } from '../../../../models/detalle-diagnostico';

@Component({
  selector: 'app-diagnostico-familiar',
  templateUrl: './diagnostico-familiar.component.html',
  styleUrls: ['./diagnostico-familiar.component.css']
})
export class DiagnosticoFamiliarComponent implements OnInit {

  @Input() diagnosticos: DetalleDiagnostico[]
  public detail: DetalleDiagnostico = {
    diagnostico: {
      parentesco: '',
      diagnostico: ''
    }
  }
  public btn: string = 'Agregar';
  constructor() { }

  ngOnInit() {

  }

  btnTbl(detail: DetalleDiagnostico, option: string) {
    this.detail = detail;
    this.btn = option
  }

}
