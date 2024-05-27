//Webpack
import { Link } from 'react-router-dom';
import { BsChevronDown } from "react-icons/bs";

//Styles
import './Navigation.css';

const Navigation = () => {
    return (
        <nav class='container'>
            {/* menu bar website */}
            <ul className='container-menu'>
                <li>
                    <Link to='/'>
                        خانه
                        <BsChevronDown className='icon' />
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        فروشگاه
                        <BsChevronDown className='icon' />
                    </Link>
                </li>
                <li>
                    <Link to='/'>درباره ما</Link>
                </li>
                <li>
                    <Link to='/'>تماس باما</Link>
                </li>
                <li>
                    <Link to='/'>بلاگ</Link>
                </li>
            </ul>
            {/* text to menubar */}
            <Link to='/#' className='container-text'>
                مشاهده پیشنهادات ویژه
            </Link>
        </nav>
    );
};

export default Navigation;