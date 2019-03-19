import url from 'url';

const queryParser = (req, res, next) => {
    const { url } = res;

    req.parsedQuery = url.parse(url, true).query;
    next()
}

export default queryParser;