import './style.css'
import logo from '../../assets/logo.png';

function Header() {
    return (
        <div>

            <header className="header">
                <div className="container header__container">
                    <img src={logo} alt="logo" />
                    <div className="header__nav">
                        <div className='header__contact'>
                            <select name="" id="">
                                <option value="ru">RU</option>
                            </select>
                            <h2>+998 (90)-606-66-66</h2>
                        </div>
                        <button className='btn'>оставить заявку</button>
                    </div>
                </div>
                <hr />

                <nav className="header__menu">
                    <ul>
                        <li><a href="#brand">о бренде</a></li>
                        <li><a href="#products">
                            <select className='select' name="" id="">
                                <option value="ru">продукции</option>
                            </select></a></li>
                        <li><a href="#advantages">преимущества</a></li>
                        <li><a href="#open-club">открытый клуб</a></li>
                        <li><a href="#contact">контакты</a></li>
                    </ul>
                </nav>
            </header >




        </div >


    );
}

export default Header;