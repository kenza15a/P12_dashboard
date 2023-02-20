//import userPerformanceKind from './userPerformanceKind';
export class userPerformance {
    constructor(data) {
        this.UseID = data.userId;
        this.kind = data.kind;
        // this.kind = new userPerformanceKind(data.kind);
        this.data = data.data;
    }
}