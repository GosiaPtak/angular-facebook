import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CacheManagerService {
private cache = new Map();
  constructor() { }

  save(url: string, res: HttpResponse<any>){this.cache.set(url, res); }
  get(url: string){ return this.cache.get(url); }
  has(url: string) { return this.cache.has(url); }
}
