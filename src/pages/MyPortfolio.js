import React from 'react';
import { Link } from 'react-router-dom';

const MyPortfolio = () => {
    return (
        <div className=' my-12'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                <div>
                    <h3 className="text-xl text-success font-bold">Name:Meherab Hossain</h3>
                    <p>Jr.MERN Stack Developer</p>
                </div>
                <div>

                    <p>Adsress:Sherpur Sadar,Sherpur</p>
                    <p>Mymensigng,Bangaldesh.</p>
                    <h3 className="text-xs text-info font-bold">Email:meherab395@gmail.com</h3>
                    <p>contact:+8801904246211</p>

                </div>
            </div>
            <div className="divider grid-cols-1"></div>

            <div>
            </div>

            <div className='sm:grid-cols-1 lg:flex justify-between gap-10'>
            <div>
                <h1 className='text-2xl text-primary font '>Skill</h1>
                <div className='mt-3'>
                    <h2 className="text-xl">Expert:</h2>
                    <div className='flex sm:flex-wrap'>
                        <p className="text-success uppercase">html,</p>
                        <p className="text-success uppercase">css3,</p>
                        <p className="text-success uppercase">bootstrap,</p>
                        <p className="text-success uppercase">javascript,</p>
                        <p className="text-success uppercase">e6,</p>
                        <p className="text-success uppercase">react js</p>
                     
                      
                    </div>
                </div>
                <div className='mt-3'>
                    <h2 className='text-xl'>Familiar:</h2>
                    <div className='flex'>
                        <p>NodeJs,</p>
                        <p>Express,</p>
                        <p>MongoDB,</p>
                        <p>Firebase</p>
                    </div>
                </div>
                <div className='mt-3'>
                    <h2 className='text-xl'>Tools:</h2>
                    <div className='flex'>
                        <p>Github,</p>
                        <p>VSCode,</p>
                        <p>Netlify,</p>
                        <p>Heroku</p>
                    </div>
                </div>
                <div className='mt-5'>
                    <h2 className='text-2xl uppercase'>Education:</h2>
                    <h4 className='text-xl'>Department of Physics</h4>
                    <p className='text-sm'>Govt. Titumir College,Mohakhali</p>
                    <p className='text-sm'>Session:19-2020</p>
                </div>
                <div>

                </div>
            </div>
          
            <div className=''>
                <h2 className="text-2xl text-info">My Projects</h2>
                <div className='mt-3'>
                    <h2 className="text-xl text-primary">Simple Project</h2>
                    <Link className='text-blue-500' to=''>Live link</Link>
                    <h3 className='text-xl'>Tools:</h3>
                    <p>HTML5,CSS,Javascript</p>
                </div>
                <div className='mt-3'>
                    <h2 className="text-xl text-primary">Simple Project</h2>
                    <Link className='text-blue-500' to=''>Live link</Link>
                    <h3 className='text-xl'>Tools:</h3>
                    <p>HTML5,CSS,Javascript</p>
                </div>
                <div className='mt-3'>
                    <h2 className="text-xl text-primary">Simple Project</h2>
                    <Link className='text-blue-500' to=''>Live link</Link>
                    <h3 className='text-xl'>Tools:</h3>
                    <p>HTML5,CSS,Javascript</p>
                </div>
            </div>
         
            </div>
        </div>
    );
};

export default MyPortfolio;