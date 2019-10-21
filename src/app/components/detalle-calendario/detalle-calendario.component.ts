import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-calendario',
  templateUrl: './detalle-calendario.component.html',
  styleUrls: ['./detalle-calendario.component.css']
})
export class DetalleCalendarioComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

}
