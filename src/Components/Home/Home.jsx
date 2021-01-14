import React, { useState, useEffect } from "react";
import Blog from "../Blog/Blog";
import Button from "../Button/Button";
import "./Home.css";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://dev.to/api/articles?username=harsha")
            .then(response => response.json())
            .then(data => {
                setPosts(data)
                setIsLoading(false);
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
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
            <Blog isLoading={isLoading} posts={posts}/>
        </div>
    );
};
export default Home;
