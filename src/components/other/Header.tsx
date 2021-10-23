import React, { FC } from 'react';
import rst_logo from '../../images/icons/rst-logo-2.svg';

const Header: FC = () => {
    return (
        <header className="header">
            <div className="rst-logo__wrapper">
                <img className="rst-logo"
                    src={rst_logo}
                    alt="" />
            </div>
        </header>
    )
}

export default Header
