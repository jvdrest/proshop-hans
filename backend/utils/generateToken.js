import jwt from 'jsonwebtoken'

const generateToken = (res, userId) => {
  const token = jwt.sign({userId}, process.env.JWT_SECRET, {
      expiresIn: '30d'
  })

  // Set JWT as HTTP-Only cookie (dus opslaan op de server en niet op frontend in localStorage)
  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',   // alleen true in production
    sameSite: 'strict',                               // volledige beveiliging/ prevent attacks
    maxAge: 30 * 24 * 60 * 60 * 1000                  // 30 days
  })
}

export default generateToken
