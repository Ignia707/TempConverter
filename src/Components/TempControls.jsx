// Temperature Controls - for increment, decrement, change scale
import '../index.css';
import Button from './Button.jsx';

export default function TempControls(props) {
    return (
        <div className='controls'>
            <div className='button-flex'>
                <Button action={props.onIncrease} className='temp-change-button' name='+'/>
                <Button action={props.onDeccrease} className='temp-change-button' name='-'/>    
            </div>
            <div>
                <hr/>
                <p className='metric'> METRICS </p>
            </div>
            <div className='button-flex'>
                <Button action={props.onCelsius} className='metric-change-button' name='Celsius'/>
                <Button action={props.onFahrenheit} className='metric-change-button' name='Fahrenheit'/>    
            </div>
        </div>
    );
}