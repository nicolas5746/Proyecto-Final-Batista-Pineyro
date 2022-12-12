import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './buttons.sass';

export const HomeButton = ({ text }) => {
    return (
        <div className='homeButton'>{text}</div>
    );
}

export const BlueButton = ({ text, onClick, style }) => {
    return (
        <div className='blueButton' style={style} onClick={onClick}>{text}</div>
    );
}

export const WhiteButton = ({ text, onClick, style }) => {
    return (
        <div className='whiteButton' style={style} onClick={onClick}>{text}</div>
    );
}

export const AddButton = ({ onClick }) => {

    let buttonStyle = { marginLeft: '1%' }

    return (
        <>
            <Button
                color='primary'
                variant='contained'
                style={buttonStyle}
                onClick={onClick}
            >
                {' '}
                <AddIcon fontSize='smaller' />
            </Button>
        </>
    );
}

export const RemoveButton = ({ onClick }) => {

    let buttonStyle = { marginRight: '1%' }

    return (
        <>
            <Button
                color='primary'
                variant='contained'
                style={buttonStyle}
                onClick={onClick}
            >
                {' '}
                <RemoveIcon fontSize='smaller' />
            </Button>
        </>
    );
}