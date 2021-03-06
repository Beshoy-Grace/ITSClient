import { AlertifyService } from './../../../services/alertify.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router, NavigationExtras } from '@angular/router';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private router: Router, private toastr: AlertifyService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
         
            catchError(error => {
              console.log("inter first")
                if (error) {
                    if (error.status === 400) {
                      console.log("inter 400")
                        if (error.error.errors) {
                            throw error.error;
                        } else {
                            this.toastr.error(error.error.message);
                        }
                    }
                    if (error.status === 401) {
                      console.log("inter 401")
                        this.toastr.error(error.error.message);
                    }
                    if (error.status === 404) {
                      console.log("inter 404")
                        this.router.navigateByUrl('/not-found');
                    }
                    if (error.status === 500) {
                      console.log("inter 500")
                        const navigationExtras: NavigationExtras = {state: {error: error.error}};
                        this.router.navigateByUrl('/server-error', navigationExtras);
                    }
                }
                return throwError(error);
            })
        );
    }

}
