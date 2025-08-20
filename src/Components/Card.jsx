// Card component for thermostat's elements
import '../index.css';
import TempDisplay from './TempDisplay.jsx';
import TempControls from './TempControls.jsx';
import { useState } from 'react';

const toFahrenheit = (celsius) => {
    return (celsius * 9/5) + 32;
};

export default function Card() {
    const [celsiusTemp, setcelsiusTemp] = useState(35);
    const [displayUnit, setdisplayUnit] = useState('C');

    const tempToDisplay = displayUnit === 'F' ? toFahrenheit(celsiusTemp): celsiusTemp;

    const handleonIncrease = () => {
        setcelsiusTemp(prevTemp => prevTemp + 1);
    };

    const handleonDecrease = () => {
        setcelsiusTemp(prevTemp => prevTemp - 1);
    };
    
    const handleonCelsius = () => {
        setdisplayUnit('C');
    };

    const handleonFahrenheit = () => {
        setdisplayUnit('F');
    };


    return (
        <div className='card-container'>
            <TempDisplay  unroundedTemp={tempToDisplay} unit={displayUnit}/>
            <TempControls 
                onIncrease={handleonIncrease}
                onDeccrease={handleonDecrease}
                onCelsius={handleonCelsius}
                onFahrenheit={handleonFahrenheit}
            />
        </div>
    );
}