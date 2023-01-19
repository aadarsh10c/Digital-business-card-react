import React from "react";

//function component for Main
export default function Main (){
    return (
        <main className="content">
            <div className="content__title">
                <h3 className="content__title-main">Laura Smith</h3>
                <h5 className="content__title-sub">Frontend Developer</h5>
                <h6 className="content__title-email">laurasmith.website</h6>               
            </div>
            <div className="content__link">
                <a href="#" className="content__link-1">
                <span><i class="fa-solid fa-envelope "></i></span>
                    Email
                </a>
                <a href="#" className="content__link-2">
                    <span><i class="fa-brands fa-linkedin "></i></span>
                    Linkedin
                </a>
            </div>
            <div className="content__info">
                <div className="content__info-1">
                    <h3 className="content__info-title">
                        About
                    </h3>
                    <p className="summary">
                    I am a frontend developer with a particular interest in making things simple and automating daily tasks. 
                    I try to keep up with security and best practices, and am always looking for new things to learn.
                    </p>
                </div>
                <div className="content__info-2">
                    <h3 className="content__info-title">
                        Intrests
                    </h3>
                    <p className="summary">
                    Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. 
                    Travel geek. Pop culture ninja. Coffee fanatic.
                    </p>
                </div>
            </div>
        </main>
    );
}