import React from 'react';
import footerImg from '../../assets/images/background-footer.jpg'

const Footer = () => {
    const currentYear= new Date().getFullYear(); 
    return (
        <div
           className='w-full my-20 '

           style={{
            background: `url(${footerImg})`,
            backgroundSize: 'cover'
        }}
        >
            <footer className=" p-10  ">
                <div className='footer '>
                    <div>
                        <span className="footer-title">Product</span>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                    <div>
                        <span className="footer-title">Legal</span>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                </div>
                <div>
                    <footer className="footer footer-center p-4 text-base-content">
                        <div>
                            <p>Copyright © {currentYear}- All right reserved by Mechanicis Ltd</p>
                        </div>
                    </footer>
                </div>
            </footer>
        </div>
    );
};

export default Footer;