import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ScrollingService {
    public scrollToTop(): void {
        window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    }
}
