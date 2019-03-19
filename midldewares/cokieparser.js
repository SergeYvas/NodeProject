const cookieParser = (request, response, next) => {
	if(request.headers.cookie) {
        const cookie = request.headers.cookie;

        request.parsedCookies = cookie
                .split(';')
                .reduce((res, c) => {
                    const [key, val] = c.trim().split('=').map(decodeURIComponent)

                    try {
                        return Object.assign(res, { [key]: JSON.parse(val) })
                    } catch (e) {
                        return Object.assign(res, { [key]: val })
                    }
                }, {});

		
	}
	next();
};

export default cookieParser;