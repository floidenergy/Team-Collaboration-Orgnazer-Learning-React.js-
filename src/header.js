import * as React from 'react'

const Header = ({SelectedTeam, SelectedTeamCount}) => {
    return (
        <header 
            style={{
                textAlign: 'center',
                marginBottom: '50px'
            }}
        >
            <h1>{SelectedTeam}</h1>
            <h2>Has {SelectedTeamCount} Members</h2>
        </header>
    )
}

export default Header;