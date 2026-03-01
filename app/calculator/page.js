"use client"
import React, { useState } from "react";
import styles from "./calculator.module.css"
const Calculator = () => {
    const [theme, setTheme] = useState(false);
    const [current, setCurrent] = useState("");
    const [previous, setPrevious] = useState("");
    const [operator, setOperator] = useState(null);
    const [overwrite, setOverwrite] = useState(false);
    const hanldeNumber = (Num) => {
        if (overwrite) {
            setOverwrite(false);
            setCurrent(Num)
        } else {
            setCurrent((prev) => prev + Num);
        }


    }
    const hanldeOperator = (Op) => {
        setOperator(Op);
        setPrevious(current);
        setCurrent("");
    }
    let curr = null;
    let prev = null;
    let result = null;
    let radian = null;
    const handleEqual = () => {
        curr = parseFloat(current);
        prev = parseFloat(previous)
        switch (operator) {
            case "+":
                result = prev + curr
                break;
            case "-":
                result = prev - curr
                break;
            case "/":
                result = prev / curr
                break;
            case "*":
                result = prev * curr
                break;
            case "e":
                result = prev ** curr;
                break;
            case "sin":
                radian = prev * (Math.PI / 180);
                result = Math.sin(radian)
                break;
            case "√":
                result = Math.sqrt(prev)
                break;
            case "log":
                result = Math.log(prev);

                break;

        }


        setOverwrite(true);
        setCurrent(result.toString())
        setOperator(null);
        setPrevious("");
        console.log(previous);
        console.log(current);
        console.log(operator);


        console.log(result);

    }


    const clearScreen = () => {
        result = "";
        setPrevious("");
        setOperator(null);
        setCurrent("")
    }
    const backSpace = () =>{

    }
    const ChangeTheme = () => {
        setTheme(!theme);
        console.log(theme);

    }
    return (
        <>
            <section className="flex justify-center items-center ">
                <div className={`${!theme ? styles.backgroundD: styles.backgroundL }  w-87 rounded-[39px]  h-screen`} >
                    <button className={`m-5 p-3  rounded-4xl cursor-pointer ${!theme ? styles.colorD : styles.colorL}  `} onClick={ChangeTheme}><b>Dark</b></button>
                    <div className={`relative top-30  right-3  h-2/5  pl-7 pr-7`}>
                        <span className="m-1.5"><b>{previous}</b></span>
                        <span > <b>{operator}</b></span>
                        <span className="m-1.5"> <b>{current}</b></span>
                        <div className="m-0.5"> <b>{result}</b></div>
                    </div>
                    <div className={`fixed bottom-0 h-3/5  pl-7 pr-7`}>
                        <div className={`flex gap-5  mb-4 text-center`}>
                            <div className={`pt-1.5 pb-1.5 pl-6 pr-6 ${!theme ? styles.colorD : styles.colorL} rounded-3xl cursor-pointer`} onClick={() => hanldeOperator("e")}>e</div>
                            <div className={`pt-1.5 pb-1.5 pl-6 pr-6 ${!theme ? styles.colorD : styles.colorL} rounded-3xl cursor-pointer`} onClick={() => hanldeOperator("log")}>log</div>
                            <div className={`pt-1.5 pb-1.5 pl-5 pr-5 ${!theme ? styles.colorD : styles.colorL} rounded-3xl cursor-pointer`} onClick={() => hanldeOperator("sin")}>sin</div>
                            <div className={`pt-1.5 pb-1.5 pl-6 pr-6  ${!theme ? styles.colorD : styles.colorL} rounded-3xl cursor-pointer`} onClick={() => hanldeOperator("√")}>√</div>
                        </div>
                        <div className={`flex gap-4  mb-4 text-center`}>
                            <div className={`p-3 w-15  ${!theme ? styles.colorD : styles.colorL} rounded-xl cursor-pointer`} onClick={clearScreen}>AC</div>
                            <div className={`p-3 w-15 ${!theme ? styles.colorD : styles.colorL} rounded-xl cursor-pointer`} onClick={backSpace}>⌫</div>
                            <div className={`p-3 w-15  ${!theme ? styles.colorD : styles.colorL} rounded-xl cursor-pointer`} onClick={() => hanldeOperator("*")}>*</div>
                            <div className={`p-3 w-15 ${!theme ? styles.colorD : styles.colorL} rounded-xl cursor-pointer`} onClick={() => hanldeOperator("/")}>/</div>
                        </div>
                        <div className={`flex gap-6.25  mb-4 text-center`}>
                            <div>
                                <div className={`flex gap-3  mb-4 text-center`}>
                                    <div className={`p-3 w-15  ${!theme ? styles.colorD : styles.colorL} rounded-xl cursor-pointer`} onClick={() => hanldeNumber("7")}>7</div>
                                    <div className={`p-3 w-15  ${!theme ? styles.colorD : styles.colorL} rounded-xl cursor-pointer`} onClick={() => hanldeNumber("8")}>8</div>
                                    <div className={`p-3 w-15  ${!theme ? styles.colorD : styles.colorL} rounded-xl cursor-pointer`} onClick={() => hanldeNumber("9")}>9</div>
                                </div>
                                <div className={`flex gap-3  mb-4 text-center`}>
                                    <div className={`p-3 w-15  ${!theme ? styles.colorD : styles.colorL} rounded-xl cursor-pointer`} onClick={() => hanldeNumber("4")}>4</div>
                                    <div className={`p-3 w-15  ${!theme ? styles.colorD : styles.colorL} rounded-xl cursor-pointer`} onClick={() => hanldeNumber("5")}>5</div>
                                    <div className={`p-3 w-15  ${!theme ? styles.colorD : styles.colorL} rounded-xl cursor-pointer`} onClick={() => hanldeNumber("6")}>6</div>
                                </div>
                                <div className={`flex gap-3  mb-4 text-center`}>
                                    <div className={`p-3 w-15  ${!theme ? styles.colorD : styles.colorL} rounded-xl cursor-pointer`} onClick={() => hanldeNumber("1")}>1</div>
                                    <div className={`p-3 w-15 ${!theme ? styles.colorD : styles.colorL} rounded-xl cursor-pointer`} onClick={() => hanldeNumber("2")}>2</div>
                                    <div className={`p-3 w-15  ${!theme ? styles.colorD : styles.colorL} rounded-xl cursor-pointer`} onClick={() => hanldeNumber("3")}>3</div>
                                </div>
                                <div className={`flex gap-3  mb-4 text-center`}>
                                    <div className={`p-3 w-33  ${!theme ? styles.colorD : styles.colorL} rounded-xl cursor-pointer`} onClick={() => hanldeNumber("0")}>0</div>

                                    <div className={`p-3 w-15  ${!theme ? styles.colorD : styles.colorL} rounded-xl cursor-pointer`} onClick={() => hanldeNumber(".")}>.</div>
                                </div>

                            </div>
                            <div>
                                <div className={`flex flex-col gap-4  mb-4 text-center`}>
                                    <div className={`p-3 w-15  ${!theme ? styles.colorD : styles.colorL } rounded-xl cursor-pointer`} onClick={() => hanldeOperator("-")}>-</div>
                                    <div className={`p-3 w-15 h-20 ${!theme ? styles.colorD : styles.colorL} rounded-xl cursor-pointer`} onClick={() => hanldeOperator("+")}>+</div>
                                    <div className={`p-3 w-15 h-20 ${!theme ? styles.colorD : styles.colorL} rounded-xl cursor-pointer`} onClick={() => handleEqual("=")}>=</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Calculator