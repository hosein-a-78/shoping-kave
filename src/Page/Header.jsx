
import { MdOutlineSearch } from "react-icons/md";
import { Link } from 'react-router-dom';
//Images
import Logo from '../assets/image/Logo.png';

//styles
import styles from './Header.module.css';


const Header = () => {

    return (
        <header className={styles.container}>
            <Link to='/'>
                <img src={Logo} alt="logo" />
            </Link>
            <div>
                <p>فروشگاه انلاین کاوه</p>
                <span>فروشگاهی از جنس تکنولوژی های بروز</span>
            </div>
            <SerchBox className={styles.serchBox} />
            <p>ورود/ثبت نام</p>
            <p>سبد خرید</p>
        </header>
    );
};



//Component serch box
export const SerchBox = () => {
    return (
        <div >
            <button >
                <MdOutlineSearch />
            </button>
            <input type="text" placeholder="جستجوی محصول" onChange={(e) => setSearch(e.target.value.toLowerCase())} />
        </div>
    );
};


export default Header;