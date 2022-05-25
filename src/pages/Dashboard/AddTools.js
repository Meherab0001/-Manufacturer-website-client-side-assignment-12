import React from 'react';
import { useForm } from 'react-hook-form';

const AddTools = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const imageStoreKey = 'cfed32034996e50c7ebfb59490dbe3c2'

    const onSubmit = async (data) => {
        const image = data.img[0]
        const formData = new FormData()
        formData.append('img', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageStoreKey}`
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                console.log('imgbb', result)
            })

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
                        placeholder="Your Name"
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
                        {errors.file?.type === 'required' && <span class="label-text-alt text-red-500">{errors.file.message}</span>}

                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Description</span>

                    </label>
                    <input type="text"
                        placeholder="Description product"
                        class="input input-bordered w-full max-w-xs"
                        {...register("description",

                            {

                                required: {
                                    value: true,
                                    message: 'Please Describe'
                                },

                            }
                        )}
                    />
                    <label class="label">
                        {errors.text?.type === 'required' && <span class="label-text-alt text-red-500">{errors.text.message}</span>}

                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Price per unit</span>

                    </label>
                    <input type="number"
                        placeholder="price"
                        class="input input-bordered w-full max-w-xs"
                        {...register("price",

                            {

                                required: {
                                    value: true,
                                    message: 'Please set price per unit'
                                },

                            }
                        )}
                    />
                    <label class="label">
                        {errors.number?.type === 'required' && <span class="label-text-alt text-red-500">{errors.number.message}</span>}

                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Minimum Qunatity</span>

                    </label>
                    <input type="number"
                        placeholder="Password"
                        class="input input-bordered w-full max-w-xs"
                        {...register("minimum_quantity",

                            {

                                required: {
                                    value: true,
                                    message: 'Please put minimum number'
                                },

                            }
                        )}
                    />
                    <label class="label">

                    </label>
                </div>
                <label class="label">
                    {errors.number?.type === 'required' && <span class="label-text-alt text-red-500">{errors.number.message}</span>}

                </label>


                <input className='btn  w-full max-w-xs text-white' type="submit" value="Add Tools" />

            </form>
        </div>
    );
};

export default AddTools;