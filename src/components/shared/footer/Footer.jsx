import './footer.sass';

const Footer = () => {

    let text = [`Nicolás Batista Piñeyro`, 2022];

    return (
        <div className='footer'>
            <footer>
                <p>{text[0]} &copy; {text[1]}</p>
            </footer>
        </div>
    );
}

export default Footer;