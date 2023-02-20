export class userAverageSessions {
    constructor(data) {
        this.UserId = data.UserId;
        this.sessions = data.sessions;
        // this.sessions = new userAverageSession(data.sessions);
    }
}