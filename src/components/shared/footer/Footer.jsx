import './footer.sass';

const Footer = () => {

    let text = [`Nicolás Batista Piñeyro`, 2022];

    return (
        <footer>
            <div className='footer'>
                <p>{text[0]} &copy; {text[1]}</p>
            </div>
        </footer>
    );
}

export default Footer;