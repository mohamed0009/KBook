import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

interface AuthResponse {
  token: string;
  user?: {
    id: number;
    username: string;
  };
  message?: string;
  status?: string;
}

interface RegisterResponse {
  status: string;
  message: string;
  user?: {
    id: number;
    username: string;
    // autres propriétés utilisateur
  };
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api';
  private readonly TOKEN_KEY = 'auth_token';
  private readonly USER_KEY = 'user_data';

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  private get localStorage(): Storage | null {
    if (isPlatformBrowser(this.platformId)) {
      return window.localStorage;
    }
    return null;
  }

  register(userData: any): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(
      `${this.apiUrl}/register`,
      userData
    );
  }

  login(credentials: any): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${this.apiUrl}/login`, credentials)
      .pipe(
        tap((response: AuthResponse) => {
          if (response.token && isPlatformBrowser(this.platformId)) {
            this.setToken(response.token);
            this.setUserData(response.user);
          }
        })
      );
  }

  logout(): void {
    const storage = this.localStorage;
    if (!storage) return;
    storage.removeItem(this.TOKEN_KEY);
    storage.removeItem(this.USER_KEY);
  }

  isAuthenticated(): boolean {
    const storage = this.localStorage;
    if (!storage) return false;
    return !!storage.getItem(this.TOKEN_KEY);
  }

  getToken(): string | null {
    const storage = this.localStorage;
    if (!storage) return null;
    return storage.getItem(this.TOKEN_KEY);
  }

  setToken(token: string): void {
    const storage = this.localStorage;
    if (!storage) return;
    storage.setItem(this.TOKEN_KEY, token);
  }

  getUserData(): any {
    const storage = this.localStorage;
    if (!storage) return null;
    const userData = storage.getItem(this.USER_KEY);
    return userData ? JSON.parse(userData) : null;
  }

  setUserData(data: any): void {
    const storage = this.localStorage;
    if (!storage) return;
    storage.setItem(this.USER_KEY, JSON.stringify(data));
  }
}
