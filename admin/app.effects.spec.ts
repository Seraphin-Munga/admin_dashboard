import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AppEffects } from './app.effects';

describe('AppEffects', () => {
    /* eslint-disable @typescript-eslint/no-explicit-any*/
    const actions$: Observable<any> = new Observable<any>();
    let effects: AppEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AppEffects, provideMockActions(() => actions$)]
        });

        effects = TestBed.get<AppEffects>(AppEffects);
    });

    it('should be created', async () => {
        await expect(effects).toBeTruthy();
    });
});
