import React from 'react';
import { Team } from 'csgogsi-socket';
import TeamLogo from './TeamLogo';
import eus from '../../assets/eus.png';


export default class WinAnnouncement extends React.Component<{ team: Team | null, show: boolean }> {
    render() {
        const { team, show } = this.props;
        if(!team) return null;
        return <div className={`win_text ${show ? 'show' : ''} ${team.orientation} ${team.side}`}>
            <div className="winnerLogo"><TeamLogo team={team} /></div>
            <span><div className="teamName">{team.name}</div></span><span>Vyhráva Kolo!</span>
            <div className="ucLogo"><img src={eus} alt="Logo"/></div>
            </div>
    }
}
