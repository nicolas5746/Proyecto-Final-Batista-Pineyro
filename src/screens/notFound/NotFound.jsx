import { Link } from 'react-router-dom';
import { HomeButton } from 'components/shared/buttons/Buttons';
import './notFound.sass';

const NotFound = () => {

    let text = [`Volver`, `404`, `Página no encontrada`];
    
    return (
        <div className='notFound'>
            <h1>{text[1]}</h1>
            <p>{text[2]}</p>
            <Link to='/'>
                <HomeButton text={text[0]} />
            </Link>
        </div>
    );
}

export default NotFound;