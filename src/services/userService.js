/*import { myConfig } from "../config/config";
//import { USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_MAIN_DATA, USER_PERFORMANCE } from "../data/userMockedData";
import { userSessions } from "../models/userSessions"
import { userMainData } from "../models/userMainData";
import { userActivity } from '../models/userActivity'
import { userAverageSessions } from "../models/userAverageSessions";
import { userPerformance } from "../models/userPerformance";
import axios from "axios";
export const userService = {
    getUserInfos,
    getUserPerformance,
    getUserGoal,
    getUserAverageSession,
    getUserSessions,
    getUserActivity,
    getUserPerformanceData

}
/**fetch data using axios */
/*async function getAllData() {

    try {
        const response = await axios.get('userMockedData.json');

        const allData = response.data;

        console.log(`all the data are `, allData);

        return allData;
    } catch (errors) {
        console.error(errors);
    }
}


async function getUserInfos(userId) { //title 
    const allData = await (getAllData());
    const userData = allData.USER_MAIN_DATA.filter(item => item.id === userId).shift();
    if (!userData) return Promise.reject("aucun utilisateur trouvé")
    let userInfo = new userMainData(userData);
    return userInfo;
}
async function getUserActivity(userId) { //barchart 
    const allData = await (getAllData());
    const userData = allData.USER_ACTIVITY.filter(item => item.userId === userId).shift();
    if (!userData) return Promise.reject("aucune activité trouvée")
    let userActivityFound = new userActivity(userData);
    return userActivityFound;
}

async function getUserSessions(userId) {//barchart
    let sessions = []

    getUserActivity(userId).sessions.forEach(element => {
        sessions.push(new userSessions(element.sessions));

    });
    if (!sessions) return Promise.reject("no sessions found")
    return sessions;
}
async function getUserPerformance(userId) {
    const allData = await (getAllData());
    const userData = allData.USER_PERFORMANCE.filter(item => item.userId === userId).shift();
    if (!userData) return Promise.reject("aucun utilisateur trouvé")
    let foundUserPerformance = new userPerformance(userData);
    return foundUserPerformance;

}
//construire data for radar chart
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
async function getUserGoal(userId) { //piechart
    let userMainInfos = await (getUserInfos(userId));
    // let userScore = [{ todayScore: userMainInfos.todayScore }, { todayScore: 1 - userMainInfos.todayScore }];
    let userScore = [{ todayScore: userMainInfos.todayScore }]
    console.log(userScore);
    return userScore;
}


async function getUserAverageSession(userId) {
    const allData = await (getAllData());

    const userData = allData.USER_AVERAGE_SESSIONS.filter(item => item.userId === userId).shift();
    if (!userData) return Promise.reject("aucune session moyenne trouvée")
    let foundUserSessions = new userAverageSessions(userData);
    return foundUserSessions;

}*/
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

async function getAllUserData(userId) {
    const apiUrl = "http://localhost:3000/user/"
    try {
        const response = await axios.get(`${apiUrl}${userId}`);

        return response.data;

    } catch (error) {
        console.error(error + "  this error comes from axios fetch ");
    }

}

async function getUserInfos(userId) {
    const allUserData = await getAllUserData(userId);
    if (!allUserData) return Promise.reject("je n'ai pas trouvé les infos de lutilisaeur demandé")
    const currentUserMainData = new userMainData(allUserData.data);
    console.log("user main data are")
    console.log(currentUserMainData)
    return currentUserMainData;
}

async function getUserActivity(userId) { //barchart 
    const apiUrl = "http://localhost:3000/user/"
    try {
        const response = await axios.get(`${apiUrl}${userId}/activity`);
        const currentUserActitivity = response.data;
        if (!currentUserActitivity) return Promise.reject("aucune activité trouvée")
        let userActivityFound = new userActivity(currentUserActitivity.data);
        let i = 1;
        //forcer les xaxis du barchart en modifiant le json en memoire
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
async function getUserSessions(userId) {
    let sessions = []

    getUserActivity(userId).sessions.forEach(element => {
        sessions.push(new userSessions(element.sessions));

    });
    if (!sessions) return Promise.reject("no sessions found")
    return sessions;
}
async function getUserPerformance(userId) {
    /*  const allData = await (getAllUserData(userId));
      const userData = allData.USER_PERFORMANCE;
      if (!userData) return Promise.reject("aucun utilisateur trouvé")
      let foundUserPerformance = new userPerformance(userData);
      return foundUserPerformance;
  */
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
//construire data for radar chart
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
async function getUserGoal(userId) { //piechart
    let userMainInfos = await (getUserInfos(userId));
    console.log("on est dans le score ");
    console.log(userMainInfos.todayScore)
    // let userScore = [{ todayScore: userMainInfos.todayScore }, { todayScore: 1 - userMainInfos.todayScore }];
    let userScore = [{ todayScore: userMainInfos.todayScore }]
    console.log(userScore);
    return userScore;
}


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

    /*const allData = await (getAllUserData(userId));
    const userData = allData.USER_AVERAGE_SESSIONS;
    if (!userData) return Promise.reject("aucune session moyenne trouvée")
    let foundUserSessions = new userAverageSessions(userData);
    return foundUserSessions;*/

}