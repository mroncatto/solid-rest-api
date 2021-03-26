import { EnviromentDotenv } from '../providers/implements/EnviromentDotenv'

expect.extend({
  async toBeUndefined (received) {
    const env: EnviromentDotenv = new EnviromentDotenv()
    const jwtSecret = await env.get(received)
    const pass = (jwtSecret === undefined)
    if (pass) {
      return {
        message: () => 'JWT Secret is undefined!!',
        pass: true
      }
    } else {
      return {
        message: () => 'JWT Secret is not undefined !!',
        pass: false
      }
    }
  }
})

test('Check ENVs', async () => {
  await expect('ACCESS_TOKEN_SECRET').not.toBeUndefined()
  await expect('REFRESH_TOKEN_SECRET').not.toBeUndefined()
  await expect('SESSION_REFRESH').not.toBeUndefined()
  await expect('TOKEN_EXPIRES_IN').not.toBeUndefined()
})
