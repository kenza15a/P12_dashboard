import React, { useEffect, useState } from "react";
import Title from "../Title/Title";
import Widget from "../Widget/Widget";
import "./dashboard.css";
import calIcon from "../Widget/icons/calories-icon.png";
import protIcon from "../Widget/icons/protein-icon.png";
import glucIcon from "../Widget/icons/carbs-icon.png";
import lipidIcon from "../Widget/icons/fat-icon.png";
import Radarchartexp from "../RadarChart/Radarchartexp";
import RadialChart from "../RadialChart/RadialChart";
import Linechartexp from "../Linechartexp/Linechartexp";
import Barchartexp from "../Barchartexp/Barchartexp";
import { getUserService } from "../../services/userServiceConfiguration";
import { Navigate, useParams } from "react-router-dom";
import { defaulUserId } from "../../config/config";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import WidgetSkelton from "../WidgetSkelton/WidgetSkelton";
import ChartSkelton from "../ChartSkelton/ChartSkelton";
import NotAvailableMessage from "../NotAvailableMessage/NotAvailableMessage";
/**
 * Displays the dashboard with all the charts using the userId
 * @returns  {React.ReactElement}.
 */

function Dashboard() {
  //Imposing the default id

  let { id } = useParams();
  const params = useParams();
  if (!params.id) {
    id = defaulUserId;
  } else {
    id = parseInt(id);
  }

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
  const [verifiedAll, setVerifiedAll] = useState(true);
  //const [apiLoaded, setApiLoaded] = useState(false);

  useEffect(getData, [id]);

  function getData() {
    getUserService()
      .getUserInfos(id)
      .then((userResponse) => {
        setUserLoaded(true);
        setUser(userResponse);
      })
      .catch((error) => {
        setVerifiedAll(false);
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
    //RadialChart
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
      {verifiedAll ? (
        <div className="main-container">
          <div className="page-title">
            {userLoaded && user ? (
              <Title name={user.userInfos.firstName} />
            ) : (
              <Skeleton height="20%" width="80%" count={2} />
            )}
          </div>
          <div className="page-content">
            <div className="charts">
              <div className="barchart-dashbord">
                {userActivityLoaded && userActivity ? (
                  <Barchartexp data={userActivity.sessions} />
                ) : (
                  <Skeleton height={200} width="80%" />
                )}
              </div>
              <div className="charts-groupe">
                {averageSessionsLoaded && userAverageSessions ? (
                  <div>
                    <Linechartexp data={userAverageSessions.sessions} />
                  </div>
                ) : (
                  <ChartSkelton />
                )}
                {userPerformance && userPerformanceLoaded ? (
                  <div>
                    <Radarchartexp data={userPerformance.data} />
                  </div>
                ) : (
                  <ChartSkelton />
                )}
                {userGoal && userGoalLoaded ? (
                  <div>
                    <RadialChart data={userGoal} />
                  </div>
                ) : (
                  <ChartSkelton />
                )}
              </div>
            </div>
            {userLoaded && user ? (
              <div className="widgets">
                <Widget
                  icon={calIcon}
                  grammage={user.keyData.calorieCount + "kCal"}
                  unit="Calories"
                />
                <Widget
                  icon={protIcon}
                  grammage={user.keyData.proteinCount + "g"}
                  unit="Proteines"
                />
                <Widget
                  icon={glucIcon}
                  grammage={user.keyData.carbohydrateCount + "g"}
                  unit="Glucides"
                />

                <Widget
                  icon={lipidIcon}
                  grammage={user.keyData.lipidCount + "g"}
                  unit="Lipides"
                />
              </div>
            ) : (
              <WidgetSkelton />
            )}
          </div>
        </div>
      ) : (
        <div className="message-container">
          <div className="message">
            <NotAvailableMessage />
          </div>
        </div>
      )}
    </>
  );
}

export default Dashboard;
