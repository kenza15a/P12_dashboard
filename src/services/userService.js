
import axios from "axios";
import { userMainData } from "../models/userMainData";
import { userSessions } from "../models/userSessions"
import { userActivity } from '../models/userActivity'
import { userAverageSessions } from "../models/userAverageSessions";
import { userPerformance } from "../models/userPerformance";
export const userService = {

    getAllUserData,
    getUserInfos,
    getUserActivity,
    getUserAverageSession,
    getUserSessions,
    getUserGoal,
    getUserPerformance,
    getUserPerformanceData
}
/**
 * Get all the user's data using his id 
 * Fetching the api with Axious 
 * @param { Number } userId 
 * @returns { Promise }
 */
async function getAllUserData(userId) {
    const apiUrl = "http://localhost:3000/user/"
    try {
        const response = await axios.get(`${apiUrl}${userId}`);

        return response.data;

    } catch (error) {
        console.error(error + "  this error comes from axios fetch ");

        //throw une exeption  pour verifier l'id 
        return false;

    }

}
/**
 * Gets the information of the user using his id 
 * it's used to build the title in the dashboard
 * @param { Number } userId the id of the actual user  
 * @returns { Promise}
 */


async function getUserInfos(userId) {
    const allUserData = await getAllUserData(userId);
    console.log("id introuvable")
    console.log(allUserData);
    if (!allUserData) return Promise.resolve("je n'ai pas trouvé les infos de lutilisaeur demandé")
    const currentUserMainData = new userMainData(allUserData.data);
    return currentUserMainData;
}


/**
 * Gets the current user Actvity 
 * To build the barchart of the dashboard
 * Using Axios to fetch the data from  the API
 * @param {Number} userId the current user's Id 
 * 
 * @returns { Promise }
 */
async function getUserActivity(userId) { //barchart 
    const apiUrl = "http://localhost:3000/user/"
    try {
        const response = await axios.get(`${apiUrl}${userId}/activity`);
        const currentUserActitivity = response.data;
        if (!currentUserActitivity) return Promise.reject("aucune activité trouvée")
        let userActivityFound = new userActivity(currentUserActitivity.data);
        let i = 1;
        //Force the xaxis of the barchart by modifying the json in memory
        userActivityFound.sessions.forEach(element => {
            Object.assign(element, { indice: i });
            i = i + 1;
        });
        console.log("les activités de user sont")
        console.table(userActivityFound)
        return userActivityFound;

    } catch (error) {
        console.error(error + "  no activity this error comes from axios fetch ");
    }


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
    return sessions;
}
/**
 * Get the actual user's performance data using Axios to fetch the data 
 * Only the information we are using to build the radarchart 
 * In the dashboard 
 * 
 * @param { Number } userId the actual user's id
 * @returns { Promise }
 */
async function getUserPerformance(userId) {

    const apiUrl = "http://localhost:3000/user/"

    try {
        const response = await axios.get(`${apiUrl}${userId}/performance`);
        const currentUserPerformance = response.data;
        if (!currentUserPerformance) return Promise.reject("aucune performance  trouvée")
        let userFoundPerform = new userPerformance(currentUserPerformance.data);
        console.log("la performance de  l'utilisateur  est")
        console.table(userFoundPerform)
        return userFoundPerform;

    } catch (error) {
        console.error(error + "  no perfrormance  this error comes from axios fetch ");
    }
    //
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
    console.log("on est dans le score ");
    console.log(userMainInfos.todayScore);
    let userScore = [{ todayScore: userMainInfos.todayScore }]
    console.log(userScore);
    return userScore;
}

/**
 *  Get users average sessions using his id
 * Using Axios to fetch the data from the Api 
 * to build the Line chart in the dashboard 
 * @param { Number } userId 
 * @returns { Promise }
 */
async function getUserAverageSession(userId) {
    const apiUrl = "http://localhost:3000/user/";
    try {
        const response = await axios.get(`${apiUrl}${userId}/average-sessions`);
        const currentUserSesssions = response.data;
        if (!currentUserSesssions) return Promise.reject("aucune performance  trouvée")
        let userFoundPerform = new userAverageSessions(currentUserSesssions.data);
        console.log("les sessions de   l'utilisateur  sont ")
        console.table(userFoundPerform)
        let days = ["L", "M", "M", "J", "V", "S", "D"];
        let i = 0;
        userFoundPerform.sessions.forEach(element => {
            Object.assign(element, { lDay: days[i] })
            i = i + 1;

        })
        return userFoundPerform;

    } catch (error) {
        console.error(error + "  no sessions  this error comes from axios fetch ");
    }


}