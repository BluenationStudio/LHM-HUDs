import React from "react";
import { Player, WeaponRaw } from "csgogsi-socket";
import Weapon from "./../Weapon/Weapon";
import Avatar from "./Avatar";
import Armor from "./../Indicators/Armor";
import Bomb from "./../Indicators/Bomb";
import Defuse from "./../Indicators/Defuse";

interface IProps {
  player: Player,
  isObserved: boolean,
  isFreezetime: boolean,
}
export default class PlayerBox extends React.Component<IProps> {
  render() {
    const { player } = this.props;
    const weapons: WeaponRaw[] = Object.values(player.weapons).map(weapon => ({ ...weapon, name: weapon.name.replace("weapon_", "") }));
    const primary = weapons.filter(weapon => !['C4', 'Pistol', 'Knife', 'Grenade', undefined].includes(weapon.type))[0] || null;
    const secondary = weapons.filter(weapon => weapon.type === "Pistol")[0] || null;
    const grenades = weapons.filter(weapon => weapon.type === "Grenade");
    return (
      <div className={`player ${player.state.health === 0 ? "dead" : ""} ${this.props.isObserved ? 'active' : ''}`}>
        <div className={`hp_bar ${player.state.health <= 20 ? 'low':''}`} style={{ height: `${player.state.health}%` }}></div>
        <div className="player_row1">
          <div className="health">
            {player.state.health}
          </div>
          <Avatar steamid={player.steamid} height={70} width={70} showSkull={false} showCam={false} sidePlayer={true} />
          <div className="nick">
            {player.name}
          </div>
          <div className="dead-stats">
            <div className="labels">
              <div className="stat-label">K</div>
              <div className="stat-label">A</div>
              <div className="stat-label">D</div>
            </div>
            <div className="values">
              <div className="stat-value">{player.stats.kills}</div>
              <div className="stat-value">{player.stats.assists}</div>
              <div className="stat-value">{player.stats.deaths}</div>
            </div>
          </div>
          <div className="armor_and_utility">
                <Armor player={player} />
                <Defuse player={player} />
          </div>
        </div>
        <div className="player_row2">
            <div className="row">
              
              <div className="username">
                
                {primary || secondary ? <Weapon weapon={primary ? primary.name : secondary.name} active={primary ? primary.state === "active" : secondary.state === "active"} /> : ""}
                {player.state.round_kills ? <div className="roundkills-container">{player.state.round_kills}</div> : null}
              </div>
            </div>
            
            <div className="row">
              
              
              
              <div className="secondary_weapon">{primary && secondary ? <Weapon weapon={secondary.name} active={secondary.state === "active"} /> : ""}</div>
            </div>
        </div>
        <div className="player_row3">
          <div className="grenades">
                {grenades.map(grenade => (
                  [
                    <Weapon key={`${grenade.name}-${grenade.state}`} weapon={grenade.name} active={grenade.state === "active"} isGrenade />,
                    grenade.ammo_reserve === 2 ? <Weapon key={`${grenade.name}-${grenade.state}-double`} weapon={grenade.name} active={grenade.state === "active"} isGrenade /> : null,
                  ]
                ))}
          </div> 
        </div>
        <div className="player_row4">
          <div className="observer_slot">
            <span>
              {player.observer_slot}
            </span>
          </div>
          <div className="money">
            ${player.state.money}
          </div>
          <div className="bomb">
            <Bomb player={player} />
          </div>   
        </div>
      </div>
    );
  }
}
