import { userInfos } from "./userInfos";
import { userKeyData } from "./userKeyData";
export class userMainData {
    constructor(data) {

        this.id = data.id;
        this.userInfos = new userInfos(data.userInfos);
        this.todayScore = data.todayScore;
        this.keyData = new userKeyData(data.keyData);
    }
}