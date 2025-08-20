// Bar compomnent for navigation bar
import '../index.css';

export default function Bar(props) {
    return (
        <div className='navigation-bar'>
            <h1 className='app-name'> {props.title} </h1>
            <div className='nav-link'>
                <a href='#' className='links'> about </a>
                <a href='#' className='links'> Github </a>
            </div>
        </div>
    );
} 