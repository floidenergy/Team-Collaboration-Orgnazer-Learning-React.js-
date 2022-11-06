import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './style.css'
import Nav from './nav';
import EmployeesCards from './employees';
import Teams from './Teams'

import Footer from './footer';

function App(){

    const [employees, setEmployees] = React.useState(JSON.parse(localStorage.getItem('EmployeesList')) || [{
            id: 1,
            fullName: "Bob Jones",
            designation: "JavaScript Developer",
            gender: "male",
            teamName: "TeamA",
        },
        {
            id: 2,
            fullName: "Jill Bailey",
            designation: "Node Developer",
            gender: "female",
            teamName: "TeamA",
        },
        {
            id: 3,
            fullName: "Gail Shepherd",
            designation: "Java Developer",
            gender: "female",
            teamName: "TeamA",
        },
        {
            id: 4,
            fullName: "Sam Reynolds",
            designation: "React Developer",
            gender: "male",
            teamName: "TeamB",
        },
        {
            id: 5,
            fullName: "David Henry",
            designation: "DotNet Developer",
            gender: "male",
            teamName: "TeamB",
        },
        {
            id: 6,
            fullName: "Sarah Blake",
            designation: "SQL Server DBA",
            gender: "female",
            teamName: "TeamB",
        },
        {
            id: 7,
            fullName: "James Bennet",
            designation: "Angular Developer",
            gender: "male",
            teamName: "TeamC",
        },
        {
            id: 8,
            fullName: "Jessica Faye",
            designation: "API Developer",
            gender: "female",
            teamName: "TeamC",
        },
        {
            id: 9,
            fullName: "Lita Stone",
            designation: "C++ Developer",
            gender: "female",
            teamName: "TeamC",
        },
        {
            id: 10,
            fullName: "Daniel Young",
            designation: "Python Developer",
            gender: "male",
            teamName: "TeamD",
        },
        {
            id: 11,
            fullName: "Adrian Jacobs",
            designation: "Vue Developer",
            gender: "male",
            teamName: "TeamD",
        },
        {
            id: 12,
            fullName: "Devin Monroe",
            designation: "Graphic Designer",
            gender: "male",
            teamName: "TeamD",
        },
    ]);

    const [SelectedTeam, setTeam] = React.useState(JSON.parse(localStorage.getItem('TeamSelected')) || 'TeamB')
    
    // console.log(employees.filter(emp => emp.teamName == 'TeamA'));
//TODO: MAKE IT SO IT STORES IN LOCAL STORAGE

    React.useEffect(()=> {
        localStorage.setItem('EmployeesList', JSON.stringify(employees))
    }, [employees])

    React.useEffect(() => {
        localStorage.setItem('TeamSelected', JSON.stringify(SelectedTeam));
    }, [SelectedTeam])

    return(
        <BrowserRouter>
            <Nav />

            <Routes>
                <Route path='/' element={<EmployeesCards
                                            employees={employees}
                                            setEmployees={setEmployees}
                                            SelectedTeam={SelectedTeam}
                                            setTeam={setTeam}
                                            />}
                                        />
                <Route path='/teams' element={<Teams Employees={employees}/>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App