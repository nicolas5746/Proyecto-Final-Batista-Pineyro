import { Link } from 'react-router-dom';
import { BlueButton, WhiteButton } from 'components/shared/buttons/Buttons';

const IsinCart = ({ added, onClick }) => {

    return (
        <>
            {added ?
                (<>
                    <Link to='/cart'>
                        <WhiteButton
                            style={{ textTransform: 'uppercase', width: '120%' }}
                            text={`Ir al carrito`} />
                    </Link>
                </>)
                :
                (<>
                    <BlueButton
                        style={{ textTransform: 'uppercase' }}
                        text={`agregar al carrito`}
                        onClick={onClick}
                    />
                </>)
            }
        </>
    )
}

export default IsinCart;