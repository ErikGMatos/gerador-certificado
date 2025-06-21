import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Navbar } from "./_components/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [Navbar, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'gerador-certificado';
  exibeNavbar: boolean = true;
}
