import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseUi } from "./_components/base-ui/base-ui";
import { Navbar } from "./_components/navbar/navbar";
import { CertificadoService } from './_services/certificado';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar, CommonModule, BaseUi],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  constructor(private certificadoService: CertificadoService){}
  protected title = 'gerador-certificado';
  exibeNavbar: boolean = true;

  ngOnInit(): void {
    const certificados = localStorage.getItem('certificados');
    this.certificadoService.certificados = certificados ? JSON.parse(certificados) : [];
  }
}
