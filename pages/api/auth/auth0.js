import { handleAuth, handleLogin, getAccessToken } from '@auth0/nextjs-auth0'

export default handleAuth({
  async login (req, res) {
    try {
      await handleLogin(req, res, {
        authorizationParams: {
          redirect_uri: 'http://localhost:3000',
          audience: process.env.AUTH0_AUDIENCE,
          response_type:"id_token",
        //   scope: 'openid profile email'
        },
        
      })
    } catch (error) {
      res.status(error.status || 400).end(error.message)
    }
  }
})
