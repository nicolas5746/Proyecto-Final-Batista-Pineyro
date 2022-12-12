import './greeting.sass';

const Greeting = ({ greeting }) => {

    return (
        <h1
            id='greeting'
            className='text-2xl font-bold tracking-tight text-gray-900'
        >
            {greeting}
        </h1>
    );
}

export default Greeting;