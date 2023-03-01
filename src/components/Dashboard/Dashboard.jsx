import React, { useEffect, useState } from "react";
import Title from "../Title/Title";
import Widget from "../Widget/Widget";
import "./dashboard.css";
import calIcon from "../Widget/icons/calories-icon.png";
import protIcon from "../Widget/icons/protein-icon.png";
import glucIcon from "../Widget/icons/carbs-icon.png";
import lipidIcon from "../Widget/icons/fat-icon.png";
import Radarchartexp from "../RadarChart/Radarchartexp";
import Piechartexp from "../Piechartexp/Piechartexp";
import Linechartexp from "../Linechartexp/Linechartexp";
import Barchartexp from "../Barchartexp/Barchartexp";
import { getUserService } from "../../services/userServiceConfiguration";
import { useParams } from "react-router-dom";

function Dashboard() {
  let { id } = useParams();
  id = parseInt(id);

  const [user, setUser] = useState();
  const [userLoaded, setUserLoaded] = useState(false);
  const [userActivity, setUserActivity] = useState();
  const [userActivityLoaded, setUserActivityLoaded] = useState(false);
  const [userAverageSessions, setuserAverageSessions] = useState();
  const [averageSessionsLoaded, setaverageSessionsLoaded] = useState(false);
  const [userPerformance, setUserPerformance] = useState();
  const [userPerformanceLoaded, setPerformanceLoaded] = useState(false);
  const [userGoal, setUserGoal] = useState();
  const [userGoalLoaded, setuserGoalLoaded] = useState(false);

  //const [usersessions, setUserSessions] = useState();
  useEffect(getData, [id]);

  /**
   *
   *
   * getdata(urlconfig)
   * if url=dev=>service1
   * esles service2
   */

  function getData() {
    //plusieurs appel des services
    getUserService()
      .getUserInfos(id)
      .then((userResponse) => {
        setUserLoaded(true);
        setUser(userResponse);
      })
      .catch((error) => {
        console.log(
          "UserInfos:Les données ne sont pas encore pretes ! verifiez si l'id de l'utilisateur est bon"
        );
      });
    //barchart
    getUserService()
      .getUserActivity(id)
      .then((userActivityResponse) => {
        setUserActivityLoaded(true);
        setUserActivity(userActivityResponse);
      })
      .catch((error) => {
        console.log(
          "UserActivity:Les données ne sont pas encore pretes ! verifiez si l'id de l'utilisateur est bon"
        );
      });
    //linechart
    getUserService()
      .getUserAverageSession(id)
      .then((useraveragesession) => {
        setaverageSessionsLoaded(true);
        setuserAverageSessions(useraveragesession);
      })
      .catch((error) => {
        console.log(
          "userSession:Les données ne sont pas encore pretes ! verifiez si l'id de l'utilisateur est bon"
        );
      });
    //radarchart
    getUserService()
      .getUserPerformanceData(id)
      .then((userPerformanceresp) => {
        setPerformanceLoaded(true);
        setUserPerformance(userPerformanceresp);
      })
      .catch((error) => {
        console.log(
          "userPerformance:Les données ne sont pas encore pretes ! verifiez si l'id de l'utilisateur est bon"
        );
      });
    //piechart
    getUserService()
      .getUserGoal(id)
      .then((goalResp) => {
        setuserGoalLoaded(true);
        setUserGoal(goalResp);
      })
      .catch((error) => {
        console.log(
          "userGoal:Les données ne sont pas encore pretes ! verifiez si l'id de l'utilisateur est bon"
        );
      });
  }

  return (
    <>
      <div className="main-container">
        <div className="page-title">
          {userLoaded && user ? (
            <Title name={user.userInfos.firstName} />
          ) : (
            <span>loading...</span>
          )}
        </div>
        <div className="page-content">
          <div className="charts">
            {userActivityLoaded && userActivity ? (
              <Barchartexp data={userActivity.sessions} />
            ) : (
              <span>loading...</span>
            )}

            <div className="charts-groupe">
              {averageSessionsLoaded && userAverageSessions ? (
                <Linechartexp data={userAverageSessions.sessions} />
              ) : (
                <span>loading...</span>
              )}
              {userPerformance && userPerformanceLoaded ? (
                <Radarchartexp data={userPerformance.data} />
              ) : (
                <span>loading...</span>
              )}
              {userGoal && userGoalLoaded ? (
                <Piechartexp data={userGoal} />
              ) : (
                <span>loading...</span>
              )}
            </div>
          </div>
          {userLoaded && user ? (
            <div className="widgets">
              <Widget
                icon={calIcon}
                grammage={user.keyData.calorieCount}
                unit="Calories"
              />
              <Widget
                icon={protIcon}
                grammage={user.keyData.proteinCount}
                unit="Proteines"
              />
              <Widget
                icon={glucIcon}
                grammage={user.keyData.carbohydrateCount}
                unit="Glucides"
              />

              <Widget
                icon={lipidIcon}
                grammage={user.keyData.lipidCount}
                unit="Proteines"
              />
            </div>
          ) : (
            <div className="widgets">
              <span>loading...</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
