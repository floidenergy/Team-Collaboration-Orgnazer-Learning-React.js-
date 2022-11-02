import femaleAvatar from './images/femaleAvatar.svg'
import maleAvatar from './images/maleAvatar.svg'

const Employees = ({employees, setEmployees, SelectedTeam, setTeam}) => {
    
    const HandleTeamChange = (event) =>{
        setTeam(event.target.value)
    }

    const handleEmployeeCardClick = event => {
        const newEmplyeesData = employees.map(employee => {
            if(employee.id === parseInt(event.currentTarget.id)){
                if(employee.teamName === SelectedTeam){
                    return {...employee, teamName:''}
                }else{
                    return {...employee, teamName: SelectedTeam}
                }
            }else{
                return employee
            }
        })

        setEmployees(newEmplyeesData)
    }

    return(
        <main>
            
            <div className="TeamSelection">
                <select id="teamDropDown" value={SelectedTeam} onChange={HandleTeamChange}>
                    <option value="TeamA">Team A</option>
                    <option value="TeamB">Team B</option>
                    <option value="TeamC">Team C</option>
                    <option value="TeamD">Team D</option>
                </select>
            </div>
            <div className="card-Container">
                {employees.map(employee =>  (
                    <div id={employee.id} className={employee.teamName === SelectedTeam ? 'card standOut' : 'card'} onClick={handleEmployeeCardClick}>
                        {(employee.gender === 'male')   ? 
                            <img src={maleAvatar} className="card-avatar" alt="Employee avatar"/>
                            : <img src={femaleAvatar} className="card-avatar" alt="Employee avatar"/>}

                        <div className="info">
                            <p className="card-name"> {employee.fullName} </p>
                            <p className="designation"> {employee.designation} </p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )

};

export default Employees;