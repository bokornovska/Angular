import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, catchError } from "rxjs";
import { environment } from "src/environments/environment.development";
import { ErrorService } from "./core/error/error.service";

const { appUrl } = environment;

@Injectable()
export class AppInterceptor implements HttpInterceptor {

    constructor(private router: Router, private errorService: ErrorService) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (req.url.startsWith('/api')) {
            req = req.clone({
                url: req.url.replace('/api', appUrl),
                withCredentials: true,
            })
        }

        return next.handle(req).pipe(
            catchError(err => {
                // 
                this.errorService.setError(err);

                this.router.navigate(['/error'])
                return [err]
            })
        )
    }
}

export const appInteerceptorProvider: Provider = {
    multi: true,
    useClass: AppInterceptor,
    provide: HTTP_INTERCEPTORS,
}