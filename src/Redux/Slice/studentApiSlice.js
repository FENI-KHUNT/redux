import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    value: [],
}
export const fetchStudentApi = () => (dispatch) => {
    axios.get('https://student-api.mycodelibraries.com/api/student/get').then((response) => {
        dispatch(setValue(response.data.data))
    })
}

export const AddStudentApi = (data) => (dispatch) => {
    axios.post('https://student-api.mycodelibraries.com/api/student/add',data).then((response) => {
        dispatch(fetchStudentApi())
    })
}
export const EditStudentApi = (data) => (dispatch) => {
    axios.post('https://student-api.mycodelibraries.com/api/student/update',data).then((response) => {
        dispatch(fetchStudentApi())
    })
}
export const DeleteStudentApi = (id) => (dispatch) => {
    axios.delete(`https://student-api.mycodelibraries.com/api/student/delete?id=${id}`).then((response) => {
        dispatch(fetchStudentApi())
    })
}




export const studentApiSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        setValue: (state, action) => {
            state.value = action.payload
        }
    }
})


export const {setValue} = studentApiSlice.actions
export default studentApiSlice.reducer

