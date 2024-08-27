import React, { useState } from 'react'

// [Step 1]
import { useForm } from 'react-hook-form' //npm install --save react-hook-for

const Login = () => {

    // [Step 2]
    const { register, handleSubmit, formState: { touchedFields, isDirty, isValid, dirtyFields, isSubmitted, errors }, watch } = useForm();

    // [Step 7] 
    const [data, setData] = useState("N/A");

    // [Step 6] 
    const onSubmit = (data) => {
        console.log(data);

        // [Step 8] 
        setData(data);
    }

    return (
        <div>
            {/* [Step 5] */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    Email
                    <div>
                        <input
                            name="email"
                            // [Step 3]
                            {...register("email", {
                                required: 'Username is required.',
                                pattern: {
                                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                    message: 'Email is incorrect',
                                },
                            })}
                        />
                    </div>
                    <p style={{ color: 'red', margin: '0' }}>
                        {errors?.email?.message}
                    </p>
                </div>
                <div>
                    Password
                    <div>
                        <input
                            name="password"
                            type="password"
                            // [Step 4]
                            {...register("password", {
                                required: 'Password is required.',
                                minLength: {
                                    value: 6,
                                    message: 'Password must be at least 6 characters.',
                                },
                                validate: (value) => {
                                    const isValid = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(value);
                                    if (!isValid)
                                        return 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special symbol.'
                                    else return true
                                },
                            })}
                        />
                    </div>
                    <p style={{ color: 'red', margin: '0' }}>
                        {errors?.password?.message}
                    </p>
                </div>
                <button type='submit'>Login</button>
            </form>

            {/* [Step 9]  */}
            <p> <strong> Data : </strong> {JSON.stringify(data)}</p>
            <p> <strong> Is Valid: </strong> {JSON.stringify(isValid)}</p>
            <p> <strong> Is Dirty : </strong> {JSON.stringify(isDirty)} </p>
            <p> <strong> Is Submited: </strong> {JSON.stringify(isSubmitted)}</p>    
            <p> <strong> Dirty Fields : </strong> {JSON.stringify(dirtyFields)} </p>
            <p> <strong> Touched Fields: </strong> {JSON.stringify(touchedFields)} </p>            

        </div>
    )
}

export default Login


/*
        <div>
            <form>
                <div>
                    Email
                    <div>
                        <input
                            name="email"
                        />
                    </div>


                </div>
                <div>
                    Password
                    <div>
                        <input
                            name="password"
                            type="password"
                        />
                    </div>

                    
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>


        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    Email
                    <div>
                        <input
                            name="email"
                        />
                    </div>



                    <p style={{ color: 'red', margin: '0' }}>
                        {errors?.email?.message}
                    </p>



                </div>
                <div>
                    Password
                    <div>
                        <input
                            name="password"
                            type="password"
                        />
                    </div>



                    <p style={{ color: 'red', margin: '0' }}>
                        {errors?.password?.message}
                    </p>


                    
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>        
*/