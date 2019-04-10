import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CacheManagerService } from '../services/cache-manager.service';
import { tap, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CacheInterceptor implements HttpInterceptor {
  constructor(private cache: CacheManagerService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const url = req.url;
    if (this.cache.has(url)){
      return this.cache.get(url);
    }
    return next.handle(req)
    .pipe(
      tap(
        (res: HttpResponse<any>) => {
          filter(evt => evt instanceof HttpResponse),
          console.log(res);
        }
      )
    );
  }
}
