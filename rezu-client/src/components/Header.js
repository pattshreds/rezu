import React from 'react';

const Header = () => {
    return (
        <>
            {/*
    ==========
    Navbar
    ==========
    */}

            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className='container-fluid'>
                    <a className='navbar-brand' href='#'>
                        Rezu
                    </a>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarNavDropdown'
                        aria-controls='navbarNavDropdown'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div
                        className='collapse navbar-collapse'
                        id='navbarNavDropdown'
                    >
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <a
                                    className='nav-link active'
                                    aria-current='page'
                                    href='#'
                                >
                                    Home
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a
                                    className='nav-link'
                                    data-bs-toggle='modal'
                                    data-bs-target='#staticBackdrop'
                                >
                                    Write a Review
                                </a>
                            </li>
                            <li className='nav-item dropdown'>
                                <a
                                    className='nav-link dropdown-toggle'
                                    href='#'
                                    id='navbarDropdownMenuLink'
                                    role='button'
                                    data-bs-toggle='dropdown'
                                    aria-expanded='false'
                                >
                                    Account
                                </a>
                                <ul
                                    className='dropdown-menu'
                                    aria-labelledby='navbarDropdownMenuLink'
                                >
                                    <li>
                                        <a className='dropdown-item' href='#'>
                                            Sign-up
                                        </a>
                                    </li>
                                    <li>
                                        <a className='dropdown-item' href='#'>
                                            Login
                                        </a>
                                    </li>
                                    <li>
                                        <a className='dropdown-item' href='#'>
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/*
==========
Carousel
==========
*/}

            <div
                id='carouselExampleControls'
                className='carousel slide'
                data-bs-ride='carousel'
            >
                <div className='carousel-inner'>
                    <div
                        className='carousel-item active'
                        style={{
                            backgroundImage: `url(https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80)`,
                        }}
                    ></div>

                    <div
                        className='carousel-item'
                        style={{
                            backgroundImage: `url(https://techcrunch.com/wp-content/uploads/2020/09/58DD7162-94E0-4AEB-84B6-53AE202A4AB4-4486-00000139CCC16B0F.jpg)`,
                        }}
                    ></div>

                    <div
                        className='carousel-item'
                        style={{
                            backgroundImage: `url(https://www.santacruzbicycles.com/files/styles/scb_natural_1440_auto/public/hero/my21_hero_bronson_beef.jpg?itok=9vVwcdfX)`,
                        }}
                    ></div>
                </div>

                <button
                    className='carousel-control-prev'
                    type='button'
                    data-bs-target='#carouselExampleControls'
                    data-bs-slide='prev'
                >
                    <span
                        className='carousel-control-prev-icon'
                        aria-hidden='true'
                    ></span>
                    <span className='visually-hidden'>Previous</span>
                </button>

                <button
                    className='carousel-control-next'
                    type='button'
                    data-bs-target='#carouselExampleControls'
                    data-bs-slide='next'
                >
                    <span
                        className='carousel-control-next-icon'
                        aria-hidden='true'
                    ></span>
                    <span className='visually-hidden'>Next</span>
                </button>
            </div>
        </>
    );
};

export default Header;
