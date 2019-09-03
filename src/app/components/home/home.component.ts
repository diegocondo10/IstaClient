import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';


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

    html2canvas(document.getElementById('home'), {
      allowTaint: true,
      useCORS: false,
      scale: 1
    }).then(function (canvas) {
      var img = canvas.toDataURL("image/png");

      var doc = new jsPDF();
      doc.addImage(img, 'PNG', 7, 20, 195, 105);
      doc.save('prueba.pdf')
    })

  }

}
