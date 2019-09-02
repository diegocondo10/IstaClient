import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import * as jsPDF from 'jspdf';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public user: User;

  constructor(
    private userSrv: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = this.userSrv.getUserLoggedIn();
  }

  generarPdf() {
    const doc = new jsPDF();
    doc.fromHTML(document.getElementById('home'),10,10);
    doc.save('Reporte Prueba');
  }

}
