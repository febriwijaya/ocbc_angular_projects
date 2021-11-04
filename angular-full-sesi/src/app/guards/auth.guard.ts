import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

/**
 *
 * Guard bertindak sebagai "satpam" di dalam aplikasi kita.
 *
 * Untuk men-generate guard ini, bisa kita gunakan perintah
 *
 *     ng g[enerate] guard <nama_guard>
 *
 * Ada beberapa interface yang dapat kita jalankan di sini:
 * - CanActivate -> seperti pada guard ini
 * - CanActivateChild
 * - CanDeactivate
 * - CanLoad
 *
 * Setiap interface di atas memiliki function-nya tersendiri.
 * Kalian dapat lihat selengkapnya di sini:
 * https://angular.io/guide/router#preventing-unauthorized-access
 *
 * Lalu, setelah kita setup di sini, kita dapat menaruhnya di Router.
 * Dalam hal ini: Session26RouterModule (session26-routing.module.ts)
 *
 */

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (
    private auth: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.auth.isAuthenticated) return true

      window.alert("You are not authenticated. Please sign in first.")
      this.router.navigate(['session26', 'signin'])

      return false
  }

}
