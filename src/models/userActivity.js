/**
 * @class
 * @classdesc Modelise the user Activity 
 */
export class userActivity {
    /**
     * 
     * @param {Object} data 
     */
    constructor(data) {
        this.UseID = data.UseID;
        this.sessions = data.sessions;
    }

}