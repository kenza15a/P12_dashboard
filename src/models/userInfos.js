/**
 * @class
 * @classdesc modelise the user infos 
 */
export class userInfos {
    /**
     * 
     * @param {Object} data 
     
     */
    constructor(data) {
      
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.age = data.age;
    }
}