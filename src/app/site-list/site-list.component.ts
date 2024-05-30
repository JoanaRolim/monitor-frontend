import { Component, OnInit } from '@angular/core';
import { SiteService } from '../service/site.service';

interface Site {
  url: string;
  availability: boolean;
  responseTime: number | null;
  createdAt: string;
}

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.scss']
})
export class SiteListComponent implements OnInit {
  sites: Site[] = [];
  lastUpdated: string = '';
  errorMessage: string = '';

  constructor(private siteService: SiteService) {}

  ngOnInit(): void {
    this.fetchSites();
    this.lastUpdated = new Date().toLocaleString();
    setInterval(() => {
      this.fetchSites();
    }, 60000);
  }

  fetchSites(): void {
    this.siteService.getSites().subscribe(
      (data: Site[]) => {
        this.sites = data;
        this.lastUpdated = new Date().toLocaleString();
      },
      (error: any) => {
        this.errorMessage = 'Falha ao obter os sites';
      }
    );
  }

  getStatusColor(site: Site): string {
    return site.availability ? 'green' : 'red';
  }

  onSiteAdded(): void {
    this.fetchSites();
  }
}
