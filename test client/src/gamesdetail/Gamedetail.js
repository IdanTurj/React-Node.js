import React from 'react';

const GamesDet = (props) => {
    console.log(props)

    return (


        <tr>
            <td>{props.Cat}</td>
            <td>{props.A}</td>
            <td>{props.B}</td>
            <td>{props.SA}</td>
            <td>{props.SB}</td>
            <td>{props.T}</td>
            <td>{props.Com}</td>
        </tr>

        // A={item.TeamA} B={item.TeamB} SA={item.ScoreA} SB={item.ScoreB} T={item.Time} Cat={item.Categor}
    );
}

export default GamesDet;