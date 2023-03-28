//import { userPerformanceKind } from "./userPerformanceKind";
/**
 * @class
 * @classdesc modelises the data of the user's performance  displayed on the radarchart 
 */
export class userPerformanceData {
    constructor(data) {
        this.value = data.value;
        this.kind = data.kind;
        //  this.kind = new userPerformanceKind(data.kind).kindId;

    }
}