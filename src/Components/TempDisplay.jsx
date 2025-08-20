// Temperature Diplaying - for display temperature
import '../index.css';

export default function TempDisplay(props) {
    const roundedTemp = props.unroundedTemp.toFixed(1);
    return (
        <div>
            <p className='curr_temp'> {roundedTemp}°{props.unit} </p>
        </div>
    );
}