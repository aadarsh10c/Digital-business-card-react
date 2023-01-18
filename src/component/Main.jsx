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
            <div className="content__info"></div>
        </main>
    );
}