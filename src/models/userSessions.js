/**
 * @class userSessions
 * @classdesc a model for the user sessions to display in the barchart
 */
export class userSessions {
    constructor(data) {
        this.day = data.day;
        this.kilogram = data.kilogram;
        this.calories = data.calories;


    }
}