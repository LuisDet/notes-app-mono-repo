const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authorization = req.get('authorization');
  let token = null;

  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    token = authorization.substring(7);
  }

  const { id: userId } = jwt.verify(token, process.env.SECRET);

  if (!token || !userId) {
    return res.status(401).json({ error: 'token missing or invalid' });
  }

  req.userId = userId;

  next();
};
