import { Injectable } from '@angular/core';
declare const $: any;
@Injectable({
  providedIn: 'root'
})
export class AlretService {

  constructor() { }
  notify(message: string, type: string) {
    $.notify(message, type);
  }
}
