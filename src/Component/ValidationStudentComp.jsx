import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddStudentApi, deleteApi, DeleteStudentApi, editApi, EditStudentApi, fetchStudentApi } from '../Redux/Slice/studentApiSlice';
import { useForm } from 'react-hook-form'

function ValidationStudentComp() {
    const { register, handleSubmit, watch, control, reset, setValue, formState: { errors } } = useForm()
    const data = useSelector(state => state.student.value)
    const dispatch = useDispatch();
    const [hobbies, setHobbies] = useState([]);

    useEffect(() => {
        dispatch(fetchStudentApi())
    }, [])

    const onSubmit = (data) => {
       data.hobbies = hobbies;
     if (data.id) {
            dispatch(EditStudentApi(data));
        } else {
            dispatch(AddStudentApi(data));
        }
        reset();
    };


    const deleteData = (id) => {
        dispatch(DeleteStudentApi(id))
    }

    const editData = (element) => {
        setValue('id', element._id)
        setValue('firstName', element.firstName)
        setValue('lastName', element.lastName)
        setValue('hobbies',element.hobbies)
        setValue('age', element.age)
        setValue('city', element.city)
        setValue('gender', element.gender)
      
    }

    // resister (input value )
    // watch (edit time data)
    // handlesubmit (submit )
    const handleHobbyChange = (event) => {
        const { value, checked } = event.target;
        setHobbies(Hobbies =>
            checked ? [...Hobbies, value] : Hobbies.filter(x => x !== value)
        );
    };

    return (
        <>
            <div>
                <h1 className='text-center font_white'>ValidationStudentComp</h1>
                <form className='w-50 mx-auto p-3  my-4 rounded font_white shadow_form' onSubmit={handleSubmit(onSubmit)}>

                    <label className='w-100 mt-2'>First Name</label>
                    <input type="text" className='w-100' name='firstName' value={watch('firstName') ?? ''}  {...register("firstName", { required: true })} />
                    {errors.firstName && <span className='text-danger'>First Name is required.</span>}

                    <label className='w-100 mt-2'>Last Name</label>
                    <input type="text" className='w-100' name='lastName' value={watch('lastName') ?? ''} {...register("lastName", { required: true })} />
                    {errors.lastName && <span className='text-danger'>Last Name is required.</span>}

                    <label className='w-100 mt-2'>Age</label>
                    <input type="number" className='w-100' name='age' value={watch('age') ?? ''} {...register("age", { required: true })} />
                    {errors.age && <span className='text-danger'>Agse Name is required.</span>}

                    <label className='w-100 mt-2'>City</label>
                    <select name="city" className='w-100' value={watch('city') ?? ''} {...register("city")}>
                        <option value="" disabled>Select a city</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Mumbai">Mumbai</option>

                    </select>

                    <label className='w-100 mt-2'>Gender</label>
                    <input type="radio" name="gender" value='male' checked={watch('gender') == 'male'} {...register("gender")} />Male
                    <input type="radio" name="gender" className='ms-3' value='female' checked={watch('gender') == 'female'} {...register("gender")} />Female
                    {errors.gender && <span className='text-danger'>hobbies Name is required.</span>}

                    <br />

                    <label className='w-100 mt-2'>Hobbies</label>
                    <input type="checkbox" name="hobbies" value='Dancing' checked={hobbies.includes('Dancing',{ required: true })} onChange={handleHobbyChange} />Dancing
                    <input type="checkbox" className='ms-3' name="hobbies" value='Shopping' checked={hobbies.includes('Shopping',{ required: true })} onChange={handleHobbyChange} />Shopping
                    <input type="checkbox" className='ms-3' name="hobbies" value='Listening to music' checked={hobbies.includes('Listening to music',{ required: true })} onChange={handleHobbyChange} />Listening to music
                    {errors.hobbies && <span className='text-danger'>hobbies Name is required.</span>}
                   

        <br />
                    <button className='btn btn-success mt-3' >SAVE</button>
                </form>
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Hobby</th>
                        <th>City</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((element, index) => {
                            return <tr key={index}>
                                <td>{element._id}</td>
                                <td>{element.firstName}</td>
                                <td>{element.lastName}</td>
                                <td>{element.hobbies}</td>
                                <td>{element.city}</td>
                                <td>{element.age}</td>
                                <td>{element.gender}</td>
                                <td>
                                    <button className='btn btn-warning py-0' onClick={() => editData(element)}>EDIT</button>
                                    <button className='btn btn-danger py-0 ms-2' onClick={() => deleteData(element._id)}>DELETE</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default ValidationStudentComp;
