import React, { useState, useEffect } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [arr, setArr] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        const countStr = count.toString().split("");
        while (countStr.length < 5) {
            countStr.unshift("0");
        }
        setArr(countStr.reverse());
    }, [count]);

    return (
        <div class="container mt-4 p-5 bg-primary text-white rounded">
            <div class="row mt-4 p-5 text-white rounded">
                <div class="col text-center">
                    <h2>Simple Counter</h2>
                </div>
            </div>
            <div class="row text-center g-4. mt-4 p-5 bg-dark text-white rounded">
                <div class="col">
                    <div class="counter">
                        <i class="fa fa-coffee fa-2x"></i>
                        <h2 class="timer count-title count-number" data-to="100" data-speed="1500">{arr[4]}</h2>
                    </div>
                </div>
                <div class="col">
                    <div class="counter">
                        <i class="fa fa-bug fa-2x"></i>
                        <h2 class="timer count-title count-number" data-to="1700" data-speed="1500">{arr[3]}</h2>
                    </div>
                </div>
                <div class="col">
                    <div class="counter">
                        <i class="fa fa-bug fa-2x"></i>
                        <h2 class="timer count-title count-number" data-to="11900" data-speed="1500">{arr[2]}</h2>
                    </div></div>
                <div class="col">
                    <div class="counter">
                        <i class="fa fa-bug fa-2x"></i>
                        <h2 class="timer count-title count-number" data-to="157" data-speed="1500">{arr[1]}</h2>
                    </div>
                </div>
                <div class="col">
                    <div class="counter">
                        <i class="fa fa-bug fa-2x"></i>
                        <h2 class="timer count-title count-number" data-to="157" data-speed="1500">{arr[0]}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;