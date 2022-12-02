import React from "react";
// import "./Timer.css";

function Timer(props) {
    let hour = ("0" + Math.floor((props.time / 3600000) % 60)).slice(-2)
    let min = ("0" + Math.floor((props.time / 60000) % 60)).slice(-2)
    let sec = ("0" + Math.floor((props.time / 1000) % 60)).slice(-2)
    let milsec = ("0" + ((props.time / 10) % 100)).slice(-2)

    return (
        <div className="timer">
            {Number(hour) !== Number('00') ? <span className="digits">{hour}:</span> : ''}
            {Number(min) !== Number('00') ? <span className="digits">{min}:</span> : ''}
            <span className="digits">
                {sec}
            </span>
            <sup>
                {Number(milsec) !== Number('00') ? <span style={{ fontSize: 15 }} className="digits mili-sec">
                    {milsec}
                </span> : ''}
            </sup>

        </div>
    );
}
export default Timer