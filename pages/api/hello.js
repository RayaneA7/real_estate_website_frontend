import {getAccessToken } from '@auth0/nextjs-auth0'

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const jwt = await getAccessToken(req,res,{scopes:['openid profile email']})
  console.log("jwt : ",jwt)
  res.status(200).json({ name: 'John Doe' })
}
