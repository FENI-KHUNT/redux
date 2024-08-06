import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  AddStudentApi, deleteApi, DeleteStudentApi, editApi, EditStudentApi, fetchStudentApi } from '../Redux/Slice/studentApiSlice';
import { useParams } from 'react-router-dom';

function StudentComp() {
    const [obj, setobj] = useState({})
    const params = useParams();
    const data = useSelector(state => state.student.value)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchStudentApi())
    }, [])


    const getInputValue = (e) => {
        if(e.target.type === 'checkbox'){
            if(obj[e.target.name] == undefined){
                obj [e.target.name] = [];
            }
            if(e.target.checked){
                setobj ({ ...obj , [e.target.name]: [ ...obj[e.target.name], e.target.value ]}) 
            }else{
               setobj({ ...obj , [e.target.name]: obj[e.target.name].filter(x => x != e.target.value)}) 
            }
        }else if(e.target.type === 'file'){   
         setobj({ ...obj , [e.target.name] : e.target.files[0]})
        }
        else{
            setobj( { ...obj , [e.target.name] : e.target.value})
        }
    }

    const saveData =(e) =>{
        e.preventDefault();
        if (obj._id) {
            editApi(obj._id)
        } 
        else {
          AddApi()
        }
        setobj({})
    
        console.log(obj)
        
    }   
    const AddApi = () => {
        let formDataObj = new FormData()
        formDataObj.append('firstName', obj.firstName);
        formDataObj.append('lastName', obj.lastName);
        formDataObj.append('age', obj.age);
        formDataObj.append('city', obj.city);
        formDataObj.append('hobbies', obj.hobbies);
        formDataObj.append('gender', obj.gender);
        formDataObj.append('userimage', obj.userimage);
        
        dispatch(AddStudentApi(formDataObj))

      }
      const editApi = () => {
        let formDataObj = new FormData()
        formDataObj.append('id',obj._id)
        formDataObj.append('firstName', obj.firstName);
        formDataObj.append('lastName', obj.lastName);
        formDataObj.append('age', obj.age);
        formDataObj.append('city', obj.city);
        formDataObj.append('hobbies', obj.hobbies);
        formDataObj.append('gender', obj.gender);
        formDataObj.append('userimage', obj.userimage);
        
        dispatch(EditStudentApi(formDataObj))

      }
    //   console.log(data);
   const deleteData = (id)=>{
    dispatch(DeleteStudentApi(id))
   }

    return (
        <>
        <div>
            <h1 className='text-center font_white'>Add Student</h1>
      <form className='w-50 mx-auto p-3  my-4 rounded font_white shadow_form'>

        <label className='w-100 mt-2'>First Name</label>
        <input type="text" className='w-100' name='firstName' value={obj.firstName ?? ''} onChange={getInputValue} />

        <label className='w-100 mt-2'>Last Name</label>
        <input type="text" className='w-100' name='lastName' value={obj.lastName ?? ''} onChange={getInputValue} />

        <label className='w-100 mt-2'>Age</label>
        <input type="number" className='w-100' name='age' value={obj.age ?? ''} onChange={getInputValue} />

        <label className='w-100 mt-2'>City</label>
        <select name="city" className='w-100' value={obj.city ?? ''} onChange={getInputValue}>
          <option value="" disabled>Select a city</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Chennai">Chennai</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>

        </select>

        <label className='w-100 mt-2'>Gender</label>
        <input type="radio" name="gender" value='male' checked={obj.gender == 'male'} onChange={getInputValue} />Male
        <input type="radio" name="gender" className='ms-3' value='female' checked={obj.gender == 'female'} onChange={getInputValue} />Female

        <label className='w-100 mt-2'>Hobbies</label>
        <input type="checkbox" name="hobbies" value='Dancing' checked={obj.hobbies?.includes('Dancing')} onChange={getInputValue} />Dancing
        <input type="checkbox" className='ms-3' name="hobbies" value='Shopping' checked={obj.hobbies?.includes('Shopping')} onChange={getInputValue} />Shopping
        <input type="checkbox" className='ms-3' name="hobbies" value='Listening to music' checked={obj.hobbies?.includes('Listening to music')} onChange={getInputValue} />Listening to music

        <label className='w-100 mt-2'>Student Image</label>
        <input type="file" className='w-100' name='userimage' onChange={getInputValue} />
        <br />
        <button className='btn btn-success mt-3' onClick={(e) => saveData(e)}>SAVE</button>
       </form>
    </div>
    <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>User Image</th>
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
                            <td><img src={element.image} alt="" height={40} width={40} /></td>
                            <td>{element.firstName}</td>
                            <td>{element.lastName}</td>
                            <td>{element.hobbies}</td>
                            <td>{element.city}</td>
                            <td>{element.age}</td>
                            <td>{element.gender}</td>
                            <td>
                                <button className='btn btn-warning py-0' onClick={()=>setobj(element)}>EDIT</button>
                                <button className='btn btn-danger py-0 ms-2' onClick={()=>deleteData(element._id)}>DELETE</button>
                            </td>   
                        </tr>
                    })
                }
            </tbody>
        </table>
        </>
    )
}

export default StudentComp;
