import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import StudentComp from './Component/StudentComp';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import StudentList from './Component/StudentList';
import ValidationStudentComp from './Component/ValidationStudentComp';


function App() {
  return (
  <>
 {/* <CounterCom/> */}
 {/* <ChartCom/> */}
{/* <ApexChartComp/> */}
{/* <StudentComp/> */}
<ValidationStudentComp/>
{/* <BrowserRouter>
      <Routes>
        <>
        <Route path='/' element={<StudentComp/>}/>
          <Route path='/StudentComp' element={<StudentComp/>}>
          <Route path=':id' element={<StudentComp/>}/>
          </Route>
          <Route path='/StudentList' element={<StudentList/>}/>
        </>
      </Routes>
</BrowserRouter> */}
  </>
  );
}

export default App;
