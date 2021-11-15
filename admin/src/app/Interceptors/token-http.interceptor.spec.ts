import { TokenHttpInterceptor } from './token-http.interceptor';
import { TestBed } from '@angular/core/testing';

describe('TokenHttpInterceptor', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({})
    );

    it('should be created', async () => {
        const service = TestBed.get(TokenHttpInterceptor);
        await expect(service).toBeTruthy();
    });
});
