import './style.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Katalog Section */}
                <div className="footer-column">
                    <h3>КАТАЛОГ ТОВАРОВ</h3>
                    <ul>
                        <li><a href="#">КАРДИО ТРЕНАЖЕРЫ</a></li>
                        <li><a href="#">COMPOSITE STRENGTH</a></li>
                        <li><a href="#">TRUE STRETCH</a></li>
                        <li><a href="#">САЙКЛИНГ</a></li>
                        <li><a href="#">ГРУППОВЫЕ ТРЕНИРОВКИ</a></li>
                        <li><a href="#">СИЛОВЫЕ ТРЕНИРОВКИ</a></li>
                        <li><a href="#">КОНСОЛИ</a></li>
                    </ul>
                    <p className="copyright">© TRUE FITNESS</p>
                </div>

                {/* Informatsiya Section */}
                <div className="footer-column">
                    <h3>ИНФОРМАЦИЯ</h3>
                    <ul>
                        <li><a href="#">О БРЕНДЕ</a></li>
                        <li><a href="#">ПРЕИМУЩЕСТВА</a></li>
                        <li><a href="#">ОТКРЫТЬ КЛУБ</a></li>
                        <li><a href="#">ПРОДУКЦИИ</a></li>
                        <li><a href="#">КОНТАКТЫ</a></li>
                    </ul>
                </div>

                {/* Kontaktlar Section */}
                <div className="footer-column">
                    <h3>КОНТАКТЫ</h3>
                    <ul>
                        <li><a href="#">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</a></li>
                        <li><a href="#">КОНТАКТЫ</a></li>
                    </ul>
                </div>

                {/* Podpiska Section */}
                <div className="footer-column">
                    <h3>ПОДПИСАТЬСЯ НА НОВОСТИ И АКЦИИ</h3>
                    <div className="subscribe-box">
                        <input type="email" placeholder="E - MAIL" />
                        <button type="submit">➤</button>
                    </div>
                    <div className="social-icons">
                        <a href="#"></a>
                        <a href="#"></a>
                        <a href="#"></a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;