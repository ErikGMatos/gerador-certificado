import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BaseUi } from "./_components/base-ui/base-ui";
import { Navbar } from "./_components/navbar/navbar";
import { CertificadoForm } from "./pages/certificado-form/certificado-form";

@Component({
  selector: 'app-root',
  imports: [Navbar, CommonModule, BaseUi, CertificadoForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'gerador-certificado';
  exibeNavbar: boolean = true;
}
