import { Link } from 'react-router-dom';

//Webpack
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { BsBagFill } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";

//Styles
import styles from './Header.module.css';

//Images
import Logo from '../../assets/Images/website-logo.png';

const Head = () => {
    return (
        <div className={styles.container}>
            <div className={styles.LogoPanel}>
                {/* logo web site */}
                <Link to='/' className={styles.Link}>
                    <img src={Logo} alt="logo" className={styles.WebsiteLogo} />
                </Link>
                <hr />
                <section className={styles.CaptionLogo}>
                    <h2 className={styles.CaptionLogoName}>فروشگاه انلاین کاوه</h2>
                    <h2 className={styles.CaptionLogCaption}>فروشگاهی از جنس تکنولوژی های بروز</h2>
                </section>
            </div>
            {/* component search  */}
            <SerchBox />
            {/* buttom login */}
            <button className={styles.Login}>
                <p className={styles.LoginText}>ورود / ثبت نام</p>
                <BsArrowLeftSquareFill className={styles.LoginIcon} />
            </button>
            {/*  */}
            <div className={styles.CartBox}>
                <BsBagFill className={styles.CartBoxIcon} />
                <p className={styles.CartBoxText}>سبد خرید</p>
                <div className={styles.CartBoxNum}></div>
            </div>
            {/* favorite box */}
            <div className={styles.FavoritesBox}>
                <FaRegHeart className={styles.IconHeart} />
            </div>
        </div>
    );
};

//Component serch box
export const SerchBox = () => {
    return (
        <form className={styles.SearchBox}>
            {/* input search to header */}
            <input
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                className={styles.SearchBoxInput}
                placeholder="جستجوی مححصول"
                type="search" />
            {/* icon search to header */}
            <div className={styles.SearchBoxIcon}>
                <RiSearchLine className={styles.IconSearch} />
            </div>
        </form>
    );
};

export default Head;