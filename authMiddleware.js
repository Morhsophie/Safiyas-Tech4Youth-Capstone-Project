const jwt = require("jsonwebtoken");

function protect(req, res, next) {
 const authorization = req.headers.authorization;
 if (!authorization || !authorization.startsWith("Bearer ")) {
  return res.status(401).json({ message: "Access denied. Please log in." });
 }

 try {
  const token = authorization.slice("Bearer ".length);
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  if (typeof decoded === "string" || typeof decoded.id !== "string") {
   return res.status(401).json({ message: "Invalid or expired token. Please log in again." });
  }

  req.user = { id: decoded.id };
  return next();
 } catch (error) {
  if (error instanceof jwt.JsonWebTokenError) {
   return res.status(401).json({ message: "Invalid or expired token. Please log in again." });
  }
  console.error("Token verification failed:", error);
  return res.status(500).json({ message: "Unable to verify your session." });
 }
}

module.exports = protect;
