import React from "react";
import { Timer } from "../MatchBar/MatchBar";
import { Player } from "csgogsi";

interface IProps {
  timer: Timer | null;
}
export default class Bomb extends React.Component<IProps> {
  getCaption = (type: "defusing" | "planting", player: Player | null) => {
    if(!player) return null;
    if(type === "defusing"){
      return <>
        <div className={'W'}>{player.name} <br/>zneškodnuje bombu</div>
      </>;
    }
    return <>
      <div className={'W'}>{player.name} <br/>pokladá bombu</div>
    </>;
  }
  render() {
    const { timer } = this.props;
    return (
      <div className={`defuse_plant_container ${timer && timer.type} ${timer && timer.active ? 'show' :'hide'}`}>
        {
          timer ?
          <div className={`defuse_plant_caption`}>
            {this.getCaption(timer.type, timer.player)}
          </div> : null
        }
          
          <div className="defuse_plant_bar" style={{ width: `${(timer && timer.width) || 0}%` }}></div>
      </div>
    );
  }
}
