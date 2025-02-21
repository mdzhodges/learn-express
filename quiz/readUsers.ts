import express, {NextFunction, Response} from 'express';
const router = express.Router();
import {UserRequest} from './types'



//search for user
router.get('/username/:name', (req: UserRequest, res: Response) => {
    const name = req.params.name;
    let users_with_name = req.users?.filter(function(user) {
        return user.username === name;
    })
    if(users_with_name?.length === 0 ) {
        res.send({
            error: {message: '${name} not found', status: 404}
        })
    }
    else{
        res.send(users_with_name);
    }
})

// a route that sends the usernames of the users to the client
router.get('/usernames', (req: UserRequest, res: Response) => {
    let usernames = req.users?.map((user) => {
        return {id: user.id, username: user.username};
    });
    res.send(usernames);
});

export default router;