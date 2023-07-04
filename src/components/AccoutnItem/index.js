import classNames from "classnames/bind";
import style from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style)
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://lh3.googleusercontent.com/a-/AD_cMMQbjXSTFPX46zEaVJKukH1cgy_D_qsfF4c3xRxXGznzAQ=s64-p-k-rw-no" alt="Hoa" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Tuấn Đá</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('usename')}>tuanda@vmogroup.com</span>
            </div>
        </div>
    );
}

export default AccountItem;