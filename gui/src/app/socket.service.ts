import { Injectable } from "@angular/core";

import * as socketIo from 'socket.io-client';

import { Observable } from "rxjs";
import { environment } from "../environments/environment";

@Injectable({ providedIn: 'root' })
export class SocketService {
    private socket;

    initializeSocket() {

        this.socket = socketIo(environment.notifyService);


    }


    getSocketInstance() {
        return this.socket;
    }

    public sendNotification(message): void {

        this.socket.emit(message);


    }

    public onMessage(): Observable<string> {


        return new Observable<string>(observer => {
            this.socket.on('message', (data: string) => {


                return observer.next(data);

            }

            )
        });
    }

    public onEvent(event: Event): Observable<any> {
        return new Observable<Event>(observer => {
            this.socket.on(event, () => observer.next());
        });
    }


}