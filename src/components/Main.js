import React, {Component} from 'react';

import Friends from "./Friends";


class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            friends: Friends,
            currentFriend: 0
        }
    }


    render() {
        return (
            <main className="clearfix">
                <section className="float-left w-25 mr-2">
                    <img className="col hero" src={this.state.friends[this.state.currentFriend]} alt="Luke Skywalker"/>
                </section>
                <section className="float-right w-50 row no-gutters border ml-1">
                    <h2 className="col-12 text-center">Dream Team</h2>

                    {this.state.friends.filter(el => el !== this.state.friends[this.state.currentFriend]).map(
                        el => (
                            <img className="col-4 p-1" src={el} alt="friend"/>
                        )
                    )}

                </section>
                <p className="farGalaxy">It is a period of civil war.
                    Rebel spaceships, striking
                    from a hidden base, have won
                    their first victory against
                    the evil Galactic Empire.

                    During the battle, Rebel
                    spies managed to steal secret
                    plans to the Empire's
                    ultimate weapon, the DEATH
                    STAR, an armored space
                    station with enough power
                    to destroy an entire planet.

                    Pursued by the Empire's
                    sinister agents, Princess
                    Leia races home aboard her
                    starship, custodian of the
                    stolen plans that can save her
                    people and restore
                    freedom to the galaxy....</p>
            </main>
        );
    }
}

export default Main;