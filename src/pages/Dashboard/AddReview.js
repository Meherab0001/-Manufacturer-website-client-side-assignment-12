import React from 'react';
import reviewImg from '../../assets/images/review-background-1.jpg'
const AddReview = () => {



    const handleSubmit = (event) => {
        event.preventDefault()
        const review={
            tools:event.target.tools.value,
            name: event.target.name.value,
            email:event.target.email.value,
            description:event.target.description.value,
            rating:event.target.rating.value,
        }
       fetch('http://localhost:5000/reviews',{
        method: 'POST',
        headers:{
            'content-type': 'application/json',
        },
        body: JSON.stringify(review)
       })
        .then((res =>res.json()))
      
    }
    return (
        <section className=''
        style={{
            background: `url(${reviewImg})`,
            backgroundSize:'cover'
        }}
        >

            <div className='text-center my-3'>
                <h2 className='text-3xl text-center text-primary'>Add Review </h2>

            </div >
            <div className='flex justify-center'>
                <form
                    onSubmit={handleSubmit}
                    className='grid grid-cols-1 gap-5'>
                  
                    <input type="text" name='tools' placeholder="Tools Name" className="input input-bordered w-full max-w-xs" required/>
                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                    <input type="email" name='email' placeholder="Your email" className="input input-bordered w-full max-w-xs" required />
                    <textarea name='description' class="textarea textarea-bordered" placeholder="Your review here" required></textarea>
                    <div class="rating" required>
                        <input type="radio" name="rating" class="mask mask-star-2 bg-orange-400"  />
                        <input type="radio" name="rating" class="mask mask-star-2 bg-orange-400"/>
                        <input type="radio" name="rating" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating" class="mask mask-star-2 bg-orange-400" />
                    </div>
                   
                
                    <input type="submit" value="Review" className="btn btn-secondary w-full max-w-xs" />

                </form>
            </div>
        </section>
    );
};

export default AddReview;