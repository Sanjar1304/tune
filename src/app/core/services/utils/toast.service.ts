import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomToasterService {
  private toastSubject = new BehaviorSubject<{ message: string, type: 'success' | 'error' | 'info' | 'warning' } | null>(null);
  toast$ = this.toastSubject.asObservable();

  showToast(message: string, type: 'success' | 'error' | 'info' | 'warning') {
    this.toastSubject.next({ message, type });
    setTimeout(() => this.toastSubject.next(null), 3000); // Auto-hide after 3 seconds
  }
}
