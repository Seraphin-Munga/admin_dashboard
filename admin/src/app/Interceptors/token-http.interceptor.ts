import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationResourceService } from '../core/services/authentication-resource.service';


@Injectable({
    providedIn: 'root'
})
export class TokenHttpInterceptor implements HttpInterceptor {
    public constructor(private readonly _jwtService: AuthenticationResourceService) { }
    /* eslint-disable @typescript-eslint/no-explicit-any*/
    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //Add auth Token
        const authenticationToken = this._jwtService.getToken();
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${authenticationToken}`
            }
        });
        return next.handle(req);
    }
}
