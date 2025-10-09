const jwt = require('jsonwebtoken');

const auth = {
    //verify jwt token
    verifyToken: (req, res, next) => {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if (!token) {
            return res.status(401).json({ message: 'Access denied. No token provided.' });
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
            next();
        } catch (error) {
            return res.status(401).json({ message: 'Invalid token.' });
        }
    },
    // Optional: Check if user is authenthicated (but don't block)
    optionalAuth: (req, res, next) => {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if (token) {
            try {
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                req.user = decoded;
            } catch (error) {
                // Invalid token, but we don't block the request
                req.user = null;
            }
        }
        next();
    }
};


module.exports = auth;

