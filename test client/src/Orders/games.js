import React, { Component } from 'react';
import axios from 'axios';

import { Route, Link } from 'react-router-dom';
import GameArray from './GameArray';
class Games extends Component {

    state = {
        ShowGameDetail: [],
        games: [],


    }

    componentDidMount = () => {


        this.OnGames();
        // this.Cars();
    }

    OnGames = () => {
        axios.get(`http://localhost:5000/Games`)
            .then(response => {
                console.log("datA", response)
                this.Arry = response.data
                this.setState({ games: this.Arry })
            })
    }

    // Cars = () => {
    //     axios.get(`http://localhost:5000/getColor`)
    //         .then(response => {
    //             console.log("datA", response)
    //             this.Arry = response.data
    //             this.setState({ colors: this.Arry })
    //         })
    // }


    GameFN = (id) => {


        axios.get(`http://localhost:5000/getGamebyId?id=${id}`)
            .then(response => {
                console.log("Details", response)
                this.Arry = response.data
                this.setState({ ShowGameDetail: this.Arry }, () => {
                    console.log("GameID", this.state.ShowGameDetail);
                })
            })
    }


    render() {

        // let ShowCar = this.state.ShowCarArray.map(item => {
        //     return (<GroupArray id={item.id}></GroupArray>)
        // })

        let GameResult = this.state.games.map(item => {
            return (<GameArray TeamA={item.team_a} TeamB={item.team_b} ScoreA={item.score_a} ScoreB={item.score_b} Time={item.time}
                Category={item.category} index={item.id} GameDetail={() => this.GameFN(item.id)}></GameArray>)
        })


        return (
            <div className="container">
                <h2 className="h2reg">Games</h2>
                <div className="login-box">
                    <div className="col-12">
                        <table className="table table-hover text-light">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Team_A</th>
                                    <th scope="col">Team_B</th>
                                    <th scope="col">Score_A</th>
                                    <th scope="col">Score_B</th>
                                    <th scope="col">Time</th>
                                    <th scope="col">Category</th>
                                </tr>
                            </thead>
                            <tbody>
                                {GameResult}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-3">

                    </div>
                </div>
            </div >
        )
    }
}



export default Games;

