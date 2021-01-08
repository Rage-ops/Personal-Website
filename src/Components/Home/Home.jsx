import React from "react";
import Button from "../Button/Button";
import "./Home.css";

const Home = () => {
    return (
        <div className="header">
            <h1 className="header-txt">
                Hi, I'm Harsha! <span className="wave">👋🏻 </span>
            </h1>
            <h2 className="header-description code">
                A developer who's keen on learning something new everyday.
            </h2>
            <span className="home-btn">
                <Button link={"About"}
                    btnData={"Know more ↗"}
                    btnColor={"btn-dark"}
                />
            </span>
            <span className="home-btn">
                <Button
                    link={`mailto:harsha.sam23@gmail.com`}
                    btnData={`Contact me`}
                    btnColor={"btn-white"}
                />
            </span>
        </div>
    );
};
export default Home;
