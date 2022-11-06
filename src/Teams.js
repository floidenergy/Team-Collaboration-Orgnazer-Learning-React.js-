import React from 'react'
import { useState } from 'react'

export default function Teams ({Employees}) {
    // console.log(Employees)
    /**
       * designation:"JavaScript Developer"
          fullName:"Bob Jones"
          gender:"male"
          id: 1
          teamName:"TeamD"
       **/
    const CreateTable = ({TeamMemebers}) => {
        return(
            <section 
                style={{
                    width: '90%',
                    padding: '5px',
                    margin: '10px auto',
                    textAlign: 'center',
                    border: '2px solid lightgray',
                    borderRadius: '10px',
                    fontSize: '12px'
                }}
            >
                {TeamMemebers.map(member => 
                    <div key={member.id} style={{marginBottom: '10px'}}>
                        <h1>Full Name: {member.fullName}</h1>
                        <p>Designation: {member.designation}</p>
                    </div>
                )}
            </section>
        )
    } 

    const Teams = ['TeamA', 'TeamB', 'TeamC', 'TeamD', '']

    return(<>
            {Teams.map(Team =>{
                const [isExpended, setIsExpended] = useState(false)
                return(
                    <div key={Team}>
                        <header
                        style={{
                            width: '90%',
                            padding: '5px',
                            margin: '10px auto',
                            textAlign: 'center',
                            border: '2px solid lightgray',
                            borderRadius: '10px',
                            color: 'gray'
                        }} 
                        onClick={() => setIsExpended(!isExpended)}
                        >
                            <h2>Team Name: {Team === '' ? 'No Team assigned' : Team}</h2>
                        </header>
                            {isExpended ? <CreateTable TeamMemebers={Employees.filter(emp => emp.teamName === Team)} /> : <></>}
                    </div>
                )
            }
            )}
                                
            
        </>)
}
