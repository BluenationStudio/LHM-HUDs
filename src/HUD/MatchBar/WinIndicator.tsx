import React from 'react';
import { Team } from 'csgogsi-socket';
import TeamLogo from './TeamLogo';
import ucLogo from '../../assets/ucPrestige.png';


export default class WinAnnouncement extends React.Component<{ team: Team | null, show: boolean }> {
    render() {
        const { team, show } = this.props;
        if(!team) return null;
        return <div className={`win_text ${show ? 'show' : ''} ${team.orientation} ${team.side}`}>
            <span><div className="teamName">{team.name}</div></span><span>Vyhráva Kolo!</span>
            </div>
    }
}
