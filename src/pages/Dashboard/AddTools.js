import React from 'react';
import { useForm } from 'react-hook-form';

const AddTools = () => {
    const { register, formState: { errors }, handleSubmit ,reset} = useForm();

    const imageStoreKey = '1844e0acbd9be3a9a02d26c79a260bfb'

    const onSubmit = async (data) => {

        const image = data.img[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageStoreKey}`
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                const img=result.data.url
                const addTools = {
                    name: data.name,
                    description: data.description,
                    price: data.price,
                    img:img,
                    minimum_quantity: data.minimum_quantity,
                    quantity: data.quantity
        
                }


                fetch('https://young-fjord-38482.herokuapp.com/tools', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(addTools)
                })
                    .then((res => {
                        console.log(res)
                        return res.json()
                    }))
            })
          
       
      
        reset()
      

    };
    return (
        <div>
            <h2 className='text-3xl font-bold text-info'>Add Tools</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Tools Name</span>

                    </label>
                    <input type="text"
                        placeholder="Tools Name"
                        class="input input-bordered w-full max-w-xs"
                        {...register("name",

                            {

                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                },

                            }
                        )}
                    />
                    <label class="label">
                        {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}

                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Tools Image</span>

                    </label>
                    <input type="file"
                     
                        class="input input-bordered w-full max-w-xs"
                        {...register("img",

                            {

                                required: {
                                    value: true,
                                    message: 'Image is Required'
                                },

                            }
                        )}
                    />
                    <label class="label">
                        {errors.img?.type === 'required' && <span class="label-text-alt text-red-500">{errors.img.message}</span>}

                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Price per Unit</span>

                    </label>
                    <input type="text"
                        placeholder="Price per unit"
                        class="input input-bordered w-full max-w-xs"
                        {...register("price",

                            {

                                required: {
                                    value: true,
                                    message: 'Price is Required'
                                },

                            }
                        )}
                    />
                    <label class="label">
                        {errors.price?.type === 'required' && <span class="label-text-alt text-red-500">{errors.price.message}</span>}

                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Minimum Quantity</span>

                    </label>
                    <input type="text"
                        placeholder="Minimum Quantity"
                        class="input input-bordered w-full max-w-xs"
                        {...register("minimum_quantity",

                            {

                                required: {
                                    value: true,
                                    message: 'Minimum Quantity is Required'
                                },

                            }
                        )}
                    />
                    <label class="label">
                        {errors.minimum_quantity?.type === 'required' && <span class="label-text-alt text-red-500">{errors.minimum_quantity.message}</span>}

                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Quantity</span>

                    </label>
                    <input type="text"
                        placeholder="Quantity"
                        class="input input-bordered w-full max-w-xs"
                        {...register("quantity",

                            {

                                required: {
                                    value: true,
                                    message: 'Quantity is Required'
                                },

                            }
                        )}
                    />
                    <label class="label">
                        {errors.quantity?.type === 'required' && <span class="label-text-alt text-red-500">{errors.quantity.message}</span>}

                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Description</span>

                    </label>
                    <input type="text"
                        placeholder="Description tools"
                        class="input input-bordered w-full max-w-xs"
                        {...register("description",

                            {

                                required: {
                                    value: true,
                                    message: 'Description is Required'
                                },

                            }
                        )}
                    />
                    <label class="label">
                        {errors.description?.type === 'required' && <span class="label-text-alt text-red-500">{errors.description.message}</span>}

                    </label>
                </div>








                <input className='btn  w-full max-w-xs text-white' type="submit" value="Add Tools" />

            </form>
        </div>
    );
};

export default AddTools;