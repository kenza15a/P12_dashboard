//import userPerformanceKind from './userPerformanceKind';
/**
 * @class userPerformance
 * @classdesc  modelise the user Performance to be displayed on the radar chart
 */
export class userPerformance {
    constructor(data) {
        this.UseID = data.userId;
        this.kind = data.kind;
        // this.kind = new userPerformanceKind(data.kind);
        this.data = data.data;
    }
}