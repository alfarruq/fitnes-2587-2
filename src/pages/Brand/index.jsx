
import './style.css'
import img from '../../assets/urur.png'
import img1 from '../../assets/lglg.png'
import img2 from '../../assets/son.png'
import img3 from '../../assets/sar.png'
import rasm1 from '../../assets/rasm1.png'
import rasm2 from '../../assets/rasm2.png'
import rasm3 from '../../assets/rasm3.png'
import rasm4 from '../../assets/rasm4.png'
import rasm5 from '../../assets/rasm5.png'
import rasm6 from '../../assets/rasm6.png'

function Brand() {
    return (
        <div className='container'>
            <div className='hid '>
                <p style={{ color: 'yellow' }}>О НАШЕМ БРЕНДЕ</p>
                <h3>TRUE - СОВЕРШЕННОE ФИТНЕС-ОБОРУДОВАНИЕ</h3>
            </div>
            <div className="ota">
                <  img src={img} alt="" />
                <div className='sasat'>
                    <p><span className='mimu'>Это совершенство обеспечивается высококачественными, долговечными материалами и технологиями, которые мы используем для производстве наших машин. Но оно также создается и благодаря нашей преданности клиентам и их потребностям.</span></p>
                    <p ><span className='didu'>Наша опытная команда предлагает комплексное обслуживание, начиная от планирования объекта до технического обслуживания и оснащения ваших залов новейшими технологиями. Являясь вашим надежным партнером, мы делаем все возможное, чтобы ваше предприятие продолжало эффективно работать годы и годы.</span></p>
                    <p><span className='gugu'>Вы можете рассчитывать на нас в предоставлении одних из лучших услуг в отрасли. Мы ориентированы на оптимизацию срока службы вашего фитнес-оборудования. Мы всегда ищем способы расширить сферу взаимодействия с нашими клиентами, будь то предоставление учебных материалов для ваших сотрудников и инструкторов, или разработка технологических решений, отвечающих потребностям современных пользователей.</span></p>
                    <p><span className='suslik'>Свяжитесь с нами, чтобы узнать, как партнерство с TRUE может помочь вашей компании добиться успеха.</span></p>
                </div>
            </div>
            <div className='lalu'>
                <div className='sss'>
                    <img src={img1} alt="" />
                    <div className='ertik'>
                        <h4>О компании TRUE</h4><br />
                        <div className='aaa'></div><br />
                        <p>На протяжении всего времени своего существования TRUE придерживается главных принципов: высокого качество продукции и обеспечение первоклассного сервиса, это позволяет бренду удерживать лидирующие позиции и выстраивать с покупателями долгосрочные и доверительные отношения.</p>
                    </div>
                </div>
                <div className='ddd'>
                    <h4 className='qq'>Этапы развития компании True Fitness</h4><br />
                    <h4 className='ww'>История развития, история внедрения инноваций</h4><br />
                    <p>С момента своего основания в 1981 году компания TRUE основывалась на двух основных руководящих принципах: создавать продукты высочайшего качества и поддерживать их превосходным обслуживанием. С годами фитнес-индустрия изменилась, появились новые рынки и изменились потребности наших клиентов, но эти принципы остаются неизменными, и мы неустанно продолжаем следить за актуальностью наших технологий.</p><br />
                    <p>В соответствии с нашими ценностями TRUE всегда стремилась оборудовать наши тренажеры новейшими технологиями и функциями безопасности. Мы с самого начала предоставляли нашим клиентам самые лучшие возможности для тренировок, обеспечивая при этом им уверенность в безопасности. Вот некоторые из революционных достижений, которых мы добились в отрасли за нашу более чем 45-летнюю историю.</p><br />
                </div>
                <img src={img2} alt="" />
                <img src={img3} alt="" />
            </div>
            <div>
                <h3></h3>
                <div>
                    <div className="box"></div>
                </div>
            </div>
            <section className="innovations">
                <h2>НАШИ ИННОВАЦИИ</h2>

                <div className="grid">
                    <div className="card">
                        <img src={rasm1} alt="" />
                        <p>ТРЕНАЖЕР ЛЕСТНИЦА TRUE PALISADE</p>
                        <span></span>
                    </div>

                    <div className="card">
                        <img src={rasm2} alt="" />
                        <p>ФУНКЦИОНАЛЬНЫЙ ТРЕНИНГ С COMPOSITE STRENGTH</p>
                        <span></span>
                    </div>

                    <div className="card">
                        <img src={rasm3} alt="" />
                        <p>РАМЫ ДЛЯ СТРЕЙТЧИНГА TRUE STRETCH</p>
                        <span></span>
                    </div>

                    <div className="card">
                        <img src={rasm4} alt="" />
                        <p>ЛАТЕРАЛЬНЫЙ ТРЕНАЖЕР TRUE TRAVERSE</p>
                        <span></span>
                    </div>

                    <div className="card">
                        <img src={rasm5} alt="" />
                        <p>БЕГОВАЯ ДОРОЖКА TRUE ALPINE RUNNER</p>
                        <span></span>
                    </div>

                    <div className="card">
                        <img src={rasm6} alt="" />
                        <p>ЭЛЛИПТИЧЕСКИЙ ТРЕНАЖЕР TRUE SPECTRUM</p>
                        <span></span>
                    </div>
                </div>
            </section>
            <div className="hero">
                <div className="overlay"></div>

                <div className="content">
                    <span className="brand">TRUE FITNESS</span>

                    <h1>
                        ПОЛУЧИТЕ <br />
                        <span className="blue">ЭКСКЛЮЗИВНОЕ ПРЕДЛОЖЕНИЕ</span> НА <br />
                        ТРЕНАЖЕРЫ <span className="blue">TRUE FITNESS</span>
                    </h1>

                    <p className="subtitle">
                        МЫ БУДЕМ РАДЫ ПРОКОНСУЛЬТИРОВАТЬ ВАС И ПОМОЧЬ С ПОДБОРОМ ОБОРУДОВАНИЯ
                    </p>

                    <div className="form">
                        <input type="text" placeholder="ИМЯ" />
                        <input type="text" placeholder="+998 (99)-999-99-99" />
                        <input type="email" placeholder="E-MAIL" />
                        <button>ОТПРАВИТЬ</button>
                    </div>

                    <p className="policy">
                        «НАЖИМАЯ НА КНОПКУ, ВЫ ДАЕТЕ СОГЛАСИЕ НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ И
                        СОГЛАШАЕТЕСЬ С ПОЛИТИКОЙ КОНФИДЕНЦИАЛЬНОСТИ»
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Brand;