import React from "react";

const Modal=() =>{
    return(
        <>
        <div className="overlay">
            <div className="overlay-inner">
                <button className="close"><i class="fas fa-times"></i></button>
                <div className="inner-box">
                    <img src="./images/book.jpg" alt=""/>
                    <div className="info">
                        <h1>REACTJS by Alisher</h1>
                        <h3>HIIIIIIIIIIIIIII</h3><br/><br/>
                        <h4>Ltd <span>2016-04-21</span></h4>
                        <a href="#"><button>More</button></a>
                    </div>
                </div>
                <h4 className="description">“This is it! This is the answer. It says here that a bolt of lightning is going to strike the clock tower at precisely 10:04 p.m. next Saturday night! If... If we could somehow harness this lightning... channel it into the flux capacitor... it just might work.”</h4>
            </div>
        </div>
        </>
    )
}

export default Modal;