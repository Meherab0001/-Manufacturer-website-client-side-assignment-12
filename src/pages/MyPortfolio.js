import React from 'react';

const MyPortfolio = () => {
    return (
        <div className=' my-12'>
            <div className='flex justify-between'>
                <div>
                    <h3 className="text-xl text-success font-bold">Name:Meherab Hossain</h3>
                    <p>Jr.MERN Stack Developer</p>
                </div>
                <div>

                    <p>Adsress:Sherpur Sadar,Sherpur</p>
                    <p>Mymensigng,Bangaldesh.</p>
                    <h3 className="text-xs text-info font-bold">Email:meherab395@gmail.com</h3>
                    <p>contact:+88019042446211</p>

                </div>
            </div>

            <div>
            <h1 className='text-2xl text-primary font '>Skill</h1>
                <div>
                  <h2 className="text-xl">Expert:</h2>
                  <p className="text-success uppercase">html</p>
                  <p className="text-success uppercase">css3</p>
                  <p className="text-success uppercase">bootstrap</p>
                  <p className="text-success uppercase">javascript</p>
                  <p className="text-success uppercase">e6</p>
                  <p className="text-success uppercase">reactjs</p>
                  <p className="text-success uppercase">rest api</p>
                  <p className="text-success uppercase">json</p>
                </div>
                <div>
                    <h2 className='text-xl'>Familiar:</h2>
                    <p>NodeJs</p>
                    <p>Express</p>
                    <p>MongoDB</p>
                    <p>Firebase</p>
                </div>
                <div>
                    <h2 className='text-xl'>Tools:</h2>
                    <p>Github</p>
                    <p>VSCode</p>
                    <p>Netlify</p>
                    <p>Heroku</p>
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
            <div></div>
        </div>
    );
};

export default MyPortfolio;