import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="loading-overlay">
      <div class="loading-container">
        <div class="loading-circle"></div>
        <div class="loading-circle"></div>
        <div class="loading-circle"></div>
        <div class="loading-shadow"></div>
        <div class="loading-shadow"></div>
        <div class="loading-shadow"></div>
        <span class="loading-text">Chargement...</span>
      </div>
    </div>
  `,
  styles: [
    `
      .loading-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.95);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
      }

      .loading-container {
        width: 200px;
        height: 60px;
        position: relative;
        z-index: 1;
      }

      .loading-circle {
        width: 20px;
        height: 20px;
        position: absolute;
        border-radius: 50%;
        background-color: #2bb0b0;
        left: 15%;
        transform-origin: 50%;
        animation: circle7124 0.5s alternate infinite ease;
      }

      @keyframes circle7124 {
        0% {
          top: 60px;
          height: 5px;
          border-radius: 50px 50px 25px 25px;
          transform: scaleX(1.7);
        }

        40% {
          height: 20px;
          border-radius: 50%;
          transform: scaleX(1);
        }

        100% {
          top: 0%;
        }
      }

      .loading-circle:nth-child(2) {
        left: 45%;
        animation-delay: 0.2s;
      }

      .loading-circle:nth-child(3) {
        left: auto;
        right: 15%;
        animation-delay: 0.3s;
      }

      .loading-shadow {
        width: 20px;
        height: 4px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.1);
        position: absolute;
        top: 62px;
        transform-origin: 50%;
        z-index: -1;
        left: 15%;
        filter: blur(1px);
        animation: shadow046 0.5s alternate infinite ease;
      }

      @keyframes shadow046 {
        0% {
          transform: scaleX(1.5);
        }

        40% {
          transform: scaleX(1);
          opacity: 0.7;
        }

        100% {
          transform: scaleX(0.2);
          opacity: 0.4;
        }
      }

      .loading-shadow:nth-child(4) {
        left: 45%;
        animation-delay: 0.2s;
      }

      .loading-shadow:nth-child(5) {
        left: auto;
        right: 15%;
        animation-delay: 0.3s;
      }

      .loading-text {
        position: absolute;
        top: 75px;
        left: 0;
        right: 0;
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        color: #2bb0b0;
        font-family: 'Arial', sans-serif;
      }
    `,
  ],
})
export class LoadingComponent {}
