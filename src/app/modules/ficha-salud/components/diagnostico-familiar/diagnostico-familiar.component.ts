import { Component, OnInit, Input } from '@angular/core';
import { DetalleDiagnostico } from '../../../../models/detalle-diagnostico';
import { DetalleRespuesta } from '../../../../models/detalle-respuesta';
import { DetalleDiagnosticoService } from '../../services/detalle-diagnostico.service';

@Component({
  selector: 'app-diagnostico-familiar',
  templateUrl: './diagnostico-familiar.component.html',
  styleUrls: ['./diagnostico-familiar.component.css']
})
export class DiagnosticoFamiliarComponent implements OnInit {

  @Input() diagnosticos: DetalleDiagnostico[]
  @Input() idDetalle: number
  public detail: DetalleDiagnostico = this.resetDetail()
  public disableModalInput: boolean = false;
  public btn: string = 'Agregar';


  constructor(

    private srv: DetalleDiagnosticoService

  ) { }

  ngOnInit() {

  }

  private resetDetail(): DetalleDiagnostico {
    return {
      id: null,
      diagnostico: '',
      parentesco: '',
      detalleRespuesta: {
        id: this.idDetalle
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


  async btnModal(option: string) {



    switch (option) {
      case "Agregar"://Agregar
        console.log("Agregar");
        const result = await this.srv.createDetalleDiagnostico(this.detail)
        this.detail.id = result.id
        this.diagnosticos.push(this.detail)
        break;

      case "Editar"://Editar
        console.log("Editar");

        const update = await this.srv.updateDiagnostico(this.detail);
        console.log(update);
        break;

      case "Eliminar"://Eliminar
        console.log("Eliminar");
        this.srv.deleteDetalleDiagnostico(this.detail)

        this.diagnosticos.splice(
          this.diagnosticos.indexOf(this.detail)
          , 1
        )

        break;

      default:
        break;
    }


  }

}
