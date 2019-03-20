import jwt from 'jsonwebtoken';

const jwtVerifyer = (request, response, next) => {
	const token = request.headers['x-access-token'];
	if (token) {
		jwt.verify(token, "secret", (error, decoded) => {
			if (error) {
				response.status(403).send('Wrong token provided');
			} else {
				request.decoded = decoded;
				next();
			}
		});
	} else {
		response.status(403).json('No token provided');
	}
};

export default jwtVerifyer;