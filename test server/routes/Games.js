const express = require('express');
const router = express.Router();
const con = require('../utils/database')


router.get('/Games', async (req, res, next) => {
    let sql = "SELECT * FROM games";

    con.execute(sql).then(result => {
        res.send(result[0]);
    }).catch(err => {
        res.send(err);
        console.log("Error : ", err);
    })
});


router.get('/getGamebyId', async (req, res) => {
    console.log("Req : ", req);
    GameId = req.query.id;
    let pr = await con.execute(`SELECT * FROM games WHERE id = ${GameId}`)
    res.send(pr[0])
    console.log("PR : ", pr);
})

router.get('/InstComment', async (req, res) => {
    let commen = req.query.comment
    let GameId = req.query.game_id
    let addOrderResult = await addOrderToDB(GameId, commen);
    res.send(addOrderResult)
    console.log("orders", addOrderResult);

});

addOrderToDB = async (GameId, comment) => {
    try {
        let ans = await con.execute("INSERT INTO comments(game_id,comment) VALUES (?,?)", [GameId, comment]);
        return ans[0]
    } catch (err) {
        return err.message;
    }
}

router.get('/InstGameId', async (req, res) => {
    let GameId = req.query.game_id
    let addGamesResult = await addGame(GameId);
    res.send(addGamesResult)
    console.log("orders", addGamesResult);

});

addGame = async (game) => {
    try {
        let ans = await con.execute("INSERT INTO comments(game_id) VALUES (?)", [game]);
        return ans[0]
    } catch (err) {
        return err.message;
    }
}

router.get('/Comments', async (req, res) => {
    console.log("Req : ", req);
    let id = req.query.game_id
    let pr = await con.execute(`SELECT * FROM comments WHERE game_id = ${id}`)
    res.send(pr[0])
    console.log("PR : ", pr);
})


module.exports = router;