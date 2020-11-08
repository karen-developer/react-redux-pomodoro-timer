import React from 'react';
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux';
import { setSession, setBreak, setSeconds } from '../actions';

export function LengthController(props) {

    const isOn = useSelector(state => state.isOn);
    const isBreak = useSelector(state => state.isBreak);
    const breakLength = useSelector(state => state.breakLength);
    const sessionLength = useSelector(state => state.sessionLength);
    const dispatch = useDispatch();
    const currentVal = (props.mode === 'break' ? breakLength : sessionLength);

    const lengthSetter = (type, val) => {
        if (!isOn) {
            
            const newVal = currentVal + val;
            if (newVal >= 1 && newVal <= 60) {               
                if ((isBreak && props.mode === 'break') || (!isBreak && props.mode === 'session')) {
                    dispatch(setSeconds(newVal * 60));
                }
                if (props.mode === 'break') {
                    dispatch(setBreak(newVal));
                } else {
                    dispatch(setSession(newVal))
                }
            }
        }
    }

    return (
        <div className="length-control">
            <div id={props.mode + "-label"}>{props.mode}</div>
            <button id={props.mode + "-increment"} value="+" onClick={() => lengthSetter(props.mode + 'Length', 1)}><AiFillCaretUp /></button>
            <div id={props.mode + "-length"}>{currentVal}</div>
            <button id={props.mode + "-decrement"} value="-" onClick={() => lengthSetter(props.mode + 'Length', -1)}><AiFillCaretDown /></button>
        </div>
    )
}