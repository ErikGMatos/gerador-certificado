import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import html2canvas from 'html2canvas';
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { CertificadoService } from '../../_services/certificado';
import { ICertificado } from '../../interfaces/certificado';

@Component({
  selector: 'app-certificado',
  imports: [SecondaryButton, RouterLink],
  templateUrl: './certificado.html',
  styleUrl: './certificado.css'
})
export class Certificado implements OnInit {
  constructor(private readonly certificadoService: CertificadoService, private readonly route: ActivatedRoute) { }
  id: string | null = null;
  certificado: ICertificado | undefined;
  @ViewChild('certificadoContainer') certificadoElement!: ElementRef

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.certificado = this.certificadoService.certificados.find(item => item.id === this.id)
    });
  }

  downloadCertificado(){
    if(!this.certificado) return;
    html2canvas(this.certificadoElement.nativeElement, {scale: 2}).then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'certificado'+ this.certificado?.nome.replaceAll(' ', '_') +'.png';
      link.click();
      link.remove();
      canvas.remove();
    })
  }
}
