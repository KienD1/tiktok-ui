import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import styles from './Header.module.scss'
import images from '~/assets/image';
import { Wrapper as PoopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccoutnItem';


const cx = classNames.bind(styles)
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, []);
    })



    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt='Tiktok' />
            </div>
            <Tippy
                visible={searchResult.length > 0}
                interactive
                render={attrs => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PoopperWrapper>
                            <h4 className={cx('search-title')}>
                                Accounts
                            </h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </PoopperWrapper>
                    </div>
                )}>
                <div className={cx('search')}>
                    <input placeholder='Search accounts and videos' spellCheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <button className={cx('loading')}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </button>

                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy>
            <div className={cx('action')}>

            </div>
        </div>
    </header>
}

export default Header;