import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';

interface Site {
  url: string;
  availability: boolean;
  responseTime?: number;
}

@Component({
  selector: 'app-site-form',
  templateUrl: './site-form.component.html',
  styleUrls: ['./site-form.component.scss'],
})
export class SiteFormComponent {
  @Output() siteAdded = new EventEmitter<void>();

  newSite: Site = { url: '', availability: true };

  constructor(private http: HttpClient) {}

  addSite() {
    if (!this.newSite.url) {
      return;
    }

    this.http.post<Site>('http://localhost:3000/sites', this.newSite).subscribe(
      (response) => {
        this.newSite = { url: '', availability: true };
        this.siteAdded.emit();
      },
      (error) => {
        console.error(error);
        alert('Erro ao adicionar o site');
        if (error.status === 403) {
          alert('O site está indisponível');
        } else if (error.status === 404 || error.status === 500) {
          alert('O domínio não existe');
        } else {
          alert('Ocorreu um erro ao verificar a disponibilidade do site');
        }
      }
    );
  }
}
