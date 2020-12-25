import React from "react";
import Auth from "../../components/HOC/Auth";
function Home() {
  return (
    <div>
      <h1>HOME</h1>
    </div>
  );
}

export default Auth(Home);
