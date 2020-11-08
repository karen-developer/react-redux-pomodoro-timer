import React from 'react';
import { IconContext } from 'react-icons';
import { LengthController } from './LengthController';
import { TimerWrapper } from './TimerWrapper';
import { Footer } from './Footer';
import Fade from 'react-reveal/Fade';
import './Pomodoro.css';

function Pomodoro() {

    return (
        <IconContext.Provider value={{ className: 'react-icons' }}>
            <Fade top>
            <div className="pomodoro-wrapper">
                <div className="pomodoro-container">                 
                    <LengthController mode="session" /> 
                    <TimerWrapper />                    
                    <LengthController mode="break" />                                  
                </div>
                <div className="shadow"></div>
                <Footer />
            </div>
            </Fade>            
        </IconContext.Provider>
    );
}

export default Pomodoro;
