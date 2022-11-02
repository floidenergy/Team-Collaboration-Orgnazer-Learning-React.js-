const Header = ({SelectedTeam, SelectedTeamCount}) => {
    return (
        <header>
            <h1>{SelectedTeam}</h1>
            <h2>Has {SelectedTeamCount} Members</h2>
        </header>
    )
}

export default Header;