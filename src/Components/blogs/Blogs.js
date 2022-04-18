import React from 'react';

const Blogs = () => {
    return (
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
    );
};

export default Blogs;