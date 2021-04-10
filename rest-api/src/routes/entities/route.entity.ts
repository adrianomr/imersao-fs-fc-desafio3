import { threadId } from "node:worker_threads";

export class Route {

    _id: string;
    title: string;
    startPosition: { lat: number; lng: number };
    endPosition: { lat: number; lng: number };

    constructor(title, startPosition, endPosition){
        this.title = title
        this.startPosition = startPosition;
        this.endPosition = endPosition
    }
}
