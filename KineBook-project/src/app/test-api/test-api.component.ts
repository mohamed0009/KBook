import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-api',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mt-5">
      <div class="alert" [ngClass]="alertClass" role="alert" *ngIf="showAlert">
        {{ alertMessage }}
      </div>
      <h2>Test API Connection</h2>
      <p>Status: {{ status }}</p>
      <p>Message: {{ message }}</p>
      <button class="btn btn-primary" (click)="testConnection()">
        Test Connection
      </button>
    </div>
  `,
})
export class TestApiComponent implements OnInit {
  status: string = '';
  message: string = '';
  showAlert: boolean = false;
  alertMessage: string = '';
  alertClass: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.testConnection();
  }

  testConnection() {
    this.apiService.testApi().subscribe({
      next: (response: any) => {
        this.status = response.status;
        this.message = response.message;
        this.showAlert = true;
        this.alertClass = 'alert-success';
        this.alertMessage = 'Successfully connected to backend!';
        console.log('API Response:', response);
      },
      error: (error) => {
        console.error('API Error:', error);
        this.status = 'error';
        this.message = error.message;
        this.showAlert = true;
        this.alertClass = 'alert-danger';
        this.alertMessage = 'Failed to connect to backend: ' + error.message;
      },
    });
  }
}
