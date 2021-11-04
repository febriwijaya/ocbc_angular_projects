import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from '../services/auth.service';

/**
 * Mengenai HTTP Interceptor (HttpInterceptor)
 *
 * Interceptor membantu kita dalam "menangkap" request yang akan dilempar
 * ke dalam server, dan mengubahnya sesuai dengan kebutuhan.
 *
 * Interceptor ini dapat dibuat dengan perintah
 *
 *     ng g[enerate] interceptor <nama_interceptor>
 *
 * Contoh interceptor ini ada pada session 26 part 2: Angular HttpClient.
 * Di sini, kita akan menambahkan Authorization token ke dalam HTTP Header
 * sebelum melemparkannya ke dalam server.
 *
 * Lebih lengkapnya: https://angular.io/guide/http#setting-default-headers
 *
 * Kemudian, pindah ke file index.ts pada direktori ini untuk mengetahui
 * cara penggunaan HttpInterceptor ini.
 */

@Injectable()
export class AuthInterceptor
  implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // Ambil data dari AuthService
    const authToken = this.auth.getAuthorizationToken()

    // Clone request, lalu isi Authorization sebagai salah satu HTTP Header
    request = request.clone({ setHeaders: { Authorization: `Bearer ${authToken}` } })

    return next.handle(request);
  }
}
