import './buttons.sass';

export const HomeButton = ({ text }) => {

    return (
        <div className='homeButton'>{text}</div>
    );
}

export const BlueButton = ({ text, onClick, style }) => {

    return (
        <div
            className='blueButton'
            style={style}
            onClick={onClick}
        >
            {text}
        </div>
    );
}

export const WhiteButton = ({ text, onClick, style }) => {
    
    return (
        <div
            className='whiteButton'
            style={style}
            onClick={onClick}
        >
            {text}
        </div>
    );
}