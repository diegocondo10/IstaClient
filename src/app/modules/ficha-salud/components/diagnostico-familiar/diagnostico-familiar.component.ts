import { Component, OnInit, Input } from '@angular/core';
import { DetalleDiagnostico } from '../../../../models/detalle-diagnostico';

@Component({
  selector: 'app-diagnostico-familiar',
  templateUrl: './diagnostico-familiar.component.html',
  styleUrls: ['./diagnostico-familiar.component.css']
})
export class DiagnosticoFamiliarComponent implements OnInit {

  @Input() diagnosticos: DetalleDiagnostico[]
  public detail: DetalleDiagnostico = this.resetDetail()
  public disableModalInput: boolean = false;
  public btn: string = 'Agregar';


  constructor() { }

  ngOnInit() {

  }

  private resetDetail() {
    return {
      diagnostico: {
        parentesco: '',
        diagnostico: ''
      }
    }
  }

  btnTbl(detail: DetalleDiagnostico, option: string) {
    this.detail = detail || this.resetDetail();
    this.btn = option

    if (option == 'Eliminar') {
      this.disableModalInput = true
    } else {
      this.disableModalInput = false;
    }
  }


  btnModal(option: string) {



    switch (option) {
      case "Agregar"://Agregar
        console.log("Agregar");

        break;

      case "Editar"://Editar
        console.log("Editar");

        break;

      case "Eliminar"://Eliminar
        console.log("Eliminar");
        break;

      default:
        break;
    }


  }

}
