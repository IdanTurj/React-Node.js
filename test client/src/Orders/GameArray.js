import React from 'react';
import { Route, Link } from 'react-router-dom';

const GameArray = (props) => {
    console.log(props)

    return (

        <tr>
            <th scope="row">{props.index}</th>
            <td>{props.TeamA}</td>
            <td>{props.TeamB}</td>
            <td>{props.ScoreA}</td>
            <td>{props.ScoreB}</td>
            <td>{props.Time}</td>
            <td>{props.Category}</td>
            <td><button type="submit" onClick={() => props.GameDetail(props.index)}><Link to={{ pathname: "/games/" + props.index }}>Info</Link></button></td>
        </tr>

    );
}

export default GameArray;