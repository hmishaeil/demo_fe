import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private toastr: ToastrService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return next.handle(request)
      .pipe(
        catchError((error: any) => {
          let errorMsg = "Unexpected error! Please contact support team.";

          // Client errors
          if (error.error instanceof ErrorEvent) {
            console.error(typeof (error))
            errorMsg = `CLIENT Error: ${error.error.message}`;
          }
          // Server errors
          else if (error instanceof HttpErrorResponse) {
            console.log(error)

            const errors = error?.error?.errors || error?.error?.message;

            errorMsg = '<i class="fa fa-lg fa-exclamation-triangle m-2"></i>' + '<br>';

            if (errors instanceof Array) {
              errors?.forEach((error: string) => {
                errorMsg += '- ' + error + '<br>'
              });
            } else if (errors instanceof String) {
              errorMsg += '- ' + errors + '<br>'
            } else {
              errorMsg = '<i class="fa fa-lg fa-exclamation-triangle m-2"></i>' + '<br>';
            }

            switch (error.status) {
              case 0:
                this.toastr.error(errorMsg += "Connection refused.");
                break;
              case 400:
              case 401:
              case 409:
                this.toastr.error(errorMsg);
                break;
              case 403:
                this.toastr.error("Permission Denied.")
                break;
              case 404:
                this.toastr.error("Invalid resource requested.")
                break;
              default:
                this.toastr.error(errorMsg)
                break;
            }
          }
          return throwError(errorMsg);
        })
      )
  }
}
