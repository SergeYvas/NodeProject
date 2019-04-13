import user from '../config';
import jwt from "jsonwebtoken";


const faluereAuth = {
    code: 404,
    message: "Not Found",
    data: "some error text"
};

export default function authJWT(req, res) {
    const isVerifiedName = user.name === req.parsedQuery.userName;
    const isVerifiedPassword = user.email === req.parsedQuery.email;

    if (isVerifiedName && isVerifiedPassword) {
        const token = jwt.sign(user, 'secret')

        res.json({
            success: true,
            token
        });
    } else {
        res.status(404).send(JSON.stringify(faluereAuth));
    }
}