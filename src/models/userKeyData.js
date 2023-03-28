/**
 * @class
 * @classdesc modelises the userKey dar calories count protein count carbs count lipids counts
 * to be used for the widgets in the dashboard
 */
export class userKeyData {
    constructor(data) {

        this.calorieCount = data.calorieCount;
        this.proteinCount = data.proteinCount;
        this.carbohydrateCount = data.carbohydrateCount;
        this.lipidCount = data.lipidCount;

    }
}