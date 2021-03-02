import React from 'react';
import image1 from '../assets/images/1.png';
import image2 from '../assets/images/2.png';
import image3 from '../assets/images/3.png';

const Header = () => {
    return (
        <div>
            <div className='headerSection'>
                <div className='container'>
                    <div className='headerSection__heroText'>
                        <div className='headerSection__title'>
                            Creating uniques brands is
                </div>
                        <div className='headerSection__title'>
                            What we do
                </div>
                    </div>
                </div>
            </div>
            <div className='headerBottom'>
                <div className='headerBottom__card'>
                    <div className='headerBottom__cardTitle'>
                        Creating uniques brands is
                    </div>
                    <div className='headerBottom__cardBtn--white'>
                        >
                    </div>
                    <div className='headerBottom__image'>
                        <img src={image1} alt="logo" />
                    </div>
                </div>
                <div className='headerBottom__card'>
                    <div className='headerBottom__cardTitle'>
                        Creating uniques brands is
                    </div>
                    <div className='headerBottom__cardBtn--white'>
                        >
                    </div>
                    <div className='headerBottom__image'>
                        <img src={image2} alt="logo" />
                    </div>
                </div>
                <div className='headerBottom__card'>
                    <div className='headerBottom__cardTitle'>
                        Creating uniques brands is
                    </div>
                    <div className='headerBottom__cardBtn--white'>
                        >
                    </div>
                    <div className='headerBottom__image'>
                        <img src={image3} alt="logo" />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Header