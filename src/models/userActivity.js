import { userSessions } from "./userSessions";
export class userActivity {
    constructor(data) {
        this.UseID = data.UseID;
        this.sessions = data.sessions;
    }

}