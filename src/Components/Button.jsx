// Button component for increment, decrement, celsius, fahrenheit buttons
import '../index.css';

export default function Button (props) {
    return (
        <button onClick={props.action} className={props.className}> {props.name} </button>
    );
}