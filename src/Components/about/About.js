import React from "react";

const About = () => {
  return (
    <div className="p-5">
      <div className="mb-5">
        <h1>About me:</h1>
        <p>
          My everyday work is completing all my tasks. I love to do what i love.
          I love who I am.
        </p>
      </div>
      <div className="container m-5">
        <div className="row">
          <div className="col">
            <img src="https://i.ibb.co/86twjbq/Background.png" alt="" />
          </div>

          <div className="col ">
            <h4 className="text-dark font-weight-bold">Hasan Ahamed</h4>
            <p>~ <span className="text-info">Competitor in Programming hero</span></p>
            <br />
            <p className="text-dark font-italic">
              The first and only goal of my life is to achieve success in life.I
              am willing to do whatever it takes to achieve this. I believe
              that, if I want to success in any particular thing first i have to
              determine my mind. There is no way to give up. For now, I want to
              be a web developer. To make myself as a good developer , I can
              sacrifice all of my happiness. I beleive in "Do or do not. There
              is no try." So that, since I started once there is no question to
              stop.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
