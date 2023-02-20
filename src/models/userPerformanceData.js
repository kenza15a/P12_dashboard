//import { userPerformanceKind } from "./userPerformanceKind";

export class userPerformanceData {
    constructor(data) {
        this.value = data.value;
        this.kind = data.kind;
        //  this.kind = new userPerformanceKind(data.kind).kindId;

    }
}