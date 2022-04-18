import React from "react";

const About = () => {
  return (
    <div>
      <div>
        <h1>Question Answer:</h1>
        <h2>Difference between authorization and authentication:</h2>
        <h4>Ans:</h4>
        <p>
          Authorization is the process which stands for verifying what a user
          have access to. While Authentication stands for the process of
          verifying and confirming a User's id and passwords in a particular
          website, app or in an organization.Authorization is the step after a
          succesful authentication. It gives access to a user in particular
          policies and rules. But authentication challenges the user to validate
          their credentials.
        </p>
        <h2>
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h2>
        <h4>Ans:</h4>
        <p>
          Most apps and websites uses authenticationto identity their user.
          Knowing the identity of a user allows an app to save the user data and
          provide the services only to those user. This is task of backend and
          it also a critical task for junior dev. Here come Firebase. Firebase
          authentication provides backend services, SDKs, a lot of UI libraries.
          It helps to authenticate users in a particular app. It supports
          authentication using passwords, phone number. It also supoorts some
          identity providers like Google, Facebook and Twitter, and more.
        </p>
        <p>
          Some other popular authenticators are: GoogleAuthenticator, Microsoft
          Authenticator, Authy, Okta
        </p>
        <h2>
          What other services does firebase provide other than authentication
        </h2>
        <h4>Ans:</h4>
        <p>
          Though firebase developed by Firebase inc but now it acquired by
          google. Firebase gives some valuable feature then other does. It gives
          cloud Firestore, Hostig, Cloud messaging, Dynamic Links, Remote config
          etc.
        </p>
      </div>
      <div>
        <h1>About me:</h1>
        <p>
          My everyday work is completing all my tasks. I love to do what i love.
          I love who I am.
        </p>
        <div>
          <div>
              <img src="" alt="" />
          </div>
          <div>
            <h4>Hasan Ahamed</h4>
            <p>Competitor in Programming hero</p>
            <br />
            <p>
            The first and only goal of my life is to achieve success in life.I am willing to do whatever it takes to achieve this. I believe that, if I want to success in any particular thing first i have to determine  my mind. There is no way to give up. For now, I want to be a web developer. To make myself as a good developer , I can sacrifice all of my happiness. I beleive in "Do or do not. There is no try." So that, since I started once there is no question to stop.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
