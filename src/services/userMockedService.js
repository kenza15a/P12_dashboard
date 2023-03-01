
import { USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_MAIN_DATA, USER_PERFORMANCE } from "../data/userMockedData";
import { userSessions } from "../models/userSessions"
import { userMainData } from "../models/userMainData";
import { userActivity } from '../models/userActivity'
import { userAverageSessions } from "../models/userAverageSessions";
import { userPerformance } from "../models/userPerformance";
import { element } from "prop-types";

export const userMockedService = {
    getUserInfos,
    getUserPerformance,
    getUserGoal,
    getUserAverageSession,
    getUserSessions,
    getUserActivity,
    getUserPerformanceData

}
/**fetch data using axios */



async function getUserInfos(userId) { //title 

    const userData = USER_MAIN_DATA.filter(item => item.id === userId).shift();
    if (!userData) return Promise.reject("aucun utilisateur trouvé")
    let userInfo = new userMainData(userData);
    return userInfo;
}
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

    const userData = USER_PERFORMANCE.filter(item => item.userId === userId).shift();
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
    return userScore;
}

//linechart
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