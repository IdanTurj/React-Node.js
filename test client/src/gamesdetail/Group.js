import React, { Component } from 'react';
import axios from 'axios';

// import { Route, Link } from 'react-router-dom';
import GamesDet from './Gamedetail';


class Orders extends Component {

    state = {
        Games: [],
        Commentes: [],
        ShowComment: []
    }

    componentDidMount = () => {
        console.log("this.props : ", this.props.match.params.id)
        let id = Number(this.props.match.params.id);
        axios.get(`http://localhost:5000/getGamebyId?id=${id}`)
            .then(response => {
                console.log("datA", response)
                this.Arry = response.data
                this.setState({ Games: this.Arry })
            })

        axios.get(`http://localhost:5000/Comments?game_id=${id}`)
            .then(response => {
                console.log("datA", response)
                this.Arry = response.data
                this.setState({ ShowComment: this.Arry })
            })
    }

    CommentFN = () => {
        console.log("this.props : ", this.props.match.params.id)
        let id = Number(this.props.match.params.id);
        let comments = document.getElementById("commentIn").value;
        axios.get(`http://localhost:5000/InstComment?game_id=${id}&comment=${comments}`)
            .then(response => {
                console.log("datA", response)
                this.Arry = response.data
                this.setState({ Commentes: this.Arry })
            })
        this.componentDidMount();
    }






    render() {
        let commen = this.state.ShowComment.map(item => {
            return (<tr>
                {/* <td>{item.game_id}</td> */}

                <td>{item.comment}</td>
                <td>{item.time}</td>
            </tr>)
        })

        let ord = this.state.Games.map(item => {
            return (<GamesDet Cat={item.category} A={item.team_a} B={item.team_b} SA={item.score_a} SB={item.score_b} T={item.time}></GamesDet>)

        })

        //    SELECT games.team_a AS TeamA,
        //     games.team_b AS TeamB, games.score_a AS ScoreA, games.category AS Categor
        // games.score_b AS ScoreB FROM games JOIN comments ON comments.game_id = games.id

        return (
            <div className="container">
                <h1>Game Info</h1>
                <table className="table table-hover mb-50 text-light">
                    <thead>
                        <tr>
                            <th scope="col">Game</th>
                            <th scope="col">Team_A</th>
                            <th scope="col">Team_B</th>
                            <th scope="col">Score_A</th>
                            <th scope="col">Score_B</th>
                            <th scope="col">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ord}
                    </tbody>
                </table>
                <div className="row">
                    <div className="col-4">
                        <textarea className="texts" id="commentIn"></textarea>
                        <button type="submit" onClick={() => this.CommentFN()}>Add Comment</button>
                    </div>
                </div>
                <div className="col-12 mt-20">
                    <h1>Comments</h1>
                    <table className="table table-hover text-light">
                        <thead>
                            <tr>

                                <th scope="col">Comment</th>
                                <th scope="col">Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {commen}
                        </tbody>
                    </table>
                </div>

            </div >
        )
    }
}



export default Orders;

