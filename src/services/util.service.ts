import * as crypto from 'crypto'

export class UtilService {
  static randomChar(length = 1): string {
    const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let result = ''
    for (let index = 0; index < length; index++) {
      result += charSet.charAt(Math.floor(Math.random() * charSet.length))
    }
    return result
  }

  static randomNumber(length = 1): string {
    let result = ''
    for (let index = 0; index < length; index++) {
      result += String(Math.floor(Math.random() * 10))
    }
    return result
  }

  static randomCharAndNumber(length = 1): string {
    const set = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let result = ''
    for (let index = 0; index < length; index++) {
      result += set.charAt(Math.floor(Math.random() * set.length))
    }
    return result
  }

  static md5(value: Buffer): string {
    return crypto.createHash('md5').update(value).digest('base64')
  }

  static sha1(stringToSign: string, secret: string): string {
    return crypto.createHmac('sha1', secret).update(stringToSign).digest().toString('base64');
  }
}
