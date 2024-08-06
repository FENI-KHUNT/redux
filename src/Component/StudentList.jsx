// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { DeleteStudentApi } from '../Redux/Slice/studentApiSlice';

// const StudentList = () => {
//     const data = useSelector(state => state.student.value);
//     const dispatch = useDispatch();

//     const deleteData = (id) => {
//         dispatch(DeleteStudentApi(id));
//     };

//     return (
//         <table className='table'>
//             <thead>
//                 <tr>
//                     <th>ID</th>
//                     <th>User Image</th>
//                     <th>First Name</th>
//                     <th>Last Name</th>
//                     <th>Hobby</th>
//                     <th>City</th>
//                     <th>Age</th>
//                     <th>Gender</th>
//                     <th>Action</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {data.map((element, index) => (
//                     <tr key={index}>
//                         <td>{element._id}</td>
//                         <td><img src={element.image} alt="" height={40} width={40} /></td>
//                         <td>{element.firstName}</td>
//                         <td>{element.lastName}</td>
//                         <td>{element.hobbies}</td>
//                         <td>{element.city}</td>
//                         <td>{element.age}</td>
//                         <td>{element.gender}</td>
//                         <td>
//                             {/* <button className='btn btn-warning py-0' onClick={() => setobj(element)}>EDIT</button> */}
//                             <button className='btn btn-danger py-0 ms-2' onClick={() => deleteData(element._id)}>DELETE</button>
//                         </td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     );
// };

// export default StudentList;
