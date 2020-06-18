import React, { useEffect } from "react";

export default function () {
  // useEffect(() => {
  //   console.log("Loading from FB API");
  //   window.fbAsyncInit = function () {
  //     console.log('hello inside init');
  //     window.FB.init({
  //       appId: "261954274914572",
  //       cookie: true, // Enable cookies to allow the server to access the session.
  //       xfbml: true, // Parse social plugins on this webpage.
  //       version: "v7.0", // Use this Graph API version for this call.
  //     });
  //     console.log("Loading SDK...");
      
  //   };
  //   console.log("After init");
  // }, []);

  function statusChangeCallback(response) {
    // Called with the results from FB.getLoginStatus().
    console.log("statusChangeCallback");
    console.log(response); // The current login status of the person.
    if (response.status === "connected") {
      // Logged into your webpage and Facebook.
      testAPI();
    } else if (response.status === "not_authorized") {
      console.log("Please log into this app.");
    } else {
      console.log("Please log into this facebook.");
    }
  }

  function checkLoginState() {
    // Called when a person is finished with the Login Button.
    window.FB.getLoginStatus(function (response) {
      // See the onlogin handler
      statusChangeCallback(response);
    });
  }
  const loadFBAPI = () => {};

  function testAPI() {
    // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
    console.log("Welcome!  Fetching your information.... ");
    window.FB.api("/me", function (response) {
      console.log("Successful login for: " + response.name);
      document.getElementById("status").innerHTML =
        "Thanks for logging in, " + response.name + "!";
    });
  }
  const handleFBLogin = () => {
    window.FB.login(checkLoginState());
  };

  return <button onClick={handleFBLogin}>Login FB</button>;
}
