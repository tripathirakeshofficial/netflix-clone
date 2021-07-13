import React from "react";
import "./ProfileScreen.css";
import Nav from "./../Nav";
import { useSelector } from "react-redux";
import { selectUser } from "./../features/userSlice";
import { auth } from "../firebase";
import PlansScreen from "./PlansScreen";
import { selectSubscription } from "./../features/subscriptionSlice";

function ProfileScreen() {
  const user = useSelector(selectUser);
  const subscription = useSelector(selectSubscription);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt=""
          />

          <div className="profileScreen_details">
            <h2>{user.email}</h2>
            <div className="profileScreen_plans">
              {!subscription ? (
                <h5>Select A Plan :</h5>
              ) : (
                <h5>
                  Current Subscription : {subscription.role.toUpperCase()}
                </h5>
              )}
              <br />
              <h3>Plans</h3>
              <PlansScreen />
              <button
                onClick={() => auth.signOut()}
                className="profileScreen_signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
