
import { USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_MAIN_DATA, USER_PERFORMANCE } from "../data/userMockedData";
import { userSessions } from "../models/userSessions"
import { userMainData } from "../models/userMainData";
import { userActivity } from '../models/userActivity'
import { userAverageSessions } from "../models/userAverageSessions";
import { userPerformance } from "../models/userPerformance";

export const userMockedService = {
    getUserInfos,
    getUserPerformance,
    getUserGoal,
    getUserAverageSession,
    getUserSessions,
    getUserActivity,
    getUserPerformanceData,
}

/**
 * Get the first part of the user info and create a model from it
 * Used here for the title part in the dashboard component 
 * @param { Number } userId the id of the user 
 * @returns { Promise }
 */

async function getUserInfos(userId) { //title 

    const userData = USER_MAIN_DATA.filter(item => item.id === userId).shift();
    if (!userData) return Promise.reject("aucun utilisateur trouvé")
    let userInfo = new userMainData(userData);
    console.log(userInfo)
    return userInfo;
}
/**
 * Get a users activity using his id 
 * this is used for the Barchart component in the dashboard
 * @param { Number } userId the id of the user 
 * @returns { Promise }
 */
async function getUserActivity(userId) {

    const userData = USER_ACTIVITY.filter(item => item.userId === userId).shift();
    if (!userData) return Promise.reject("aucune activité trouvée")
    let userActivityFound = new userActivity(userData);
    let i = 1;
    //forcer les xaxis du barchart en modifiant le json en memoire
    userActivityFound.sessions.forEach(element => {
        Object.assign(element, { indice: i });
        i = i + 1;
    });
    console.log(userActivityFound)
    return userActivityFound;
}
/**
 * Get the actual users sessions to display them on
 * the bar chart of the dashboard adding an index to each day 
 * from 1 to 7
 * @param {Number} userId the user Id
 * @returns { Promise }
 */
async function getUserSessions(userId) {
    let sessions = []

    getUserActivity(userId).sessions.forEach(element => {
        sessions.push(new userSessions(element.sessions));

    });
    if (!sessions) return Promise.reject("no sessions found")
    console.log("le barchart data")
    console.log(sessions);
    return sessions;
}
/**
 * Get the actual user's performance data 
 * Only the information we are using to build the radarchart 
 * In the dashboard 
 * @param { Number } userId the actual user's id
 * @returns { Promise }
 */
async function getUserPerformance(userId) {

    const userData = USER_PERFORMANCE.filter(item => item.userId === userId).shift();
    if (!userData) return Promise.reject("aucun utilisateur trouvé")
    let foundUserPerformance = new userPerformance(userData);
    return foundUserPerformance;

}
/**
 * Get the actual user's performance data 
 * Adds kindType to be displayed on the radarchart in the daqhboard 
 * @param { Number } userId the actual user's id
 * @returns { Promise }
 */
//Building the radarChart
async function getUserPerformanceData(userId) {
    let data_ = await (getUserPerformance(userId))
    let kinds = data_.kind;
    data_.data.forEach((dataElement) => {
        Object.values(kinds).forEach(kindElement => {
            switch (dataElement.kind) {
                case 1:
                    Object.assign(dataElement, { kindType: 'Cardio' });
                    break;
                case 2:
                    Object.assign(dataElement, { kindType: 'Energie' });
                    break;
                case 3:
                    Object.assign(dataElement, { kindType: 'Endurance' });
                    break;
                case 4:
                    Object.assign(dataElement, { kindType: 'Force' });
                    break;
                case 5:
                    Object.assign(dataElement, { kindType: 'Vitesse' });
                    break;
                case 6:
                    Object.assign(dataElement, { kindType: 'Intensité' });
                    break;
                default:
                    break;
            }

        })

    })
    return data_;

}
/**
 * Get the users goal using his id 
 * to build the radial Bar chart in the dashboard 
 * @param { Number } userId 
 * @returns { Promise }
 */
async function getUserGoal(userId) {
    let userMainInfos = await (getUserInfos(userId));
    let userScore = [{ todayScore: userMainInfos.todayScore }]
    return userScore;
}

/**
 *  Get users average sessions using his id
 * to build the Line chart in the dashboard 
 * @param { Number } userId 
 * @returns { Promise }
 */
async function getUserAverageSession(userId) {
    const userData = USER_AVERAGE_SESSIONS.filter(item => item.userId === userId).shift();
    if (!userData) return Promise.reject("aucune session moyenne trouvée")
    let foundUserSessions = new userAverageSessions(userData);
    console.log(foundUserSessions)
    let days = ["L", "M", "M", "J", "V", "S", "D"];
    let i = 0;
    foundUserSessions.sessions.forEach(element => {
        Object.assign(element, { lDay: days[i] })
        i = i + 1;

    })

    return foundUserSessions;

}