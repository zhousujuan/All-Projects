/*
  所有服务器和数据库的配置
 */
const isDev = process.env.NODE_ENV === 'development'

// mongodb的配置
const MONGO_CONFIG = {
	port: 27017,
	host: 'localhost',
	database: 'jumei_dbs',
}
// 服务器配置
let SERVER_CONFIG = {
	port: 80,
	host: '0.0.0.0',
}

if (isDev) {
	SERVER_CONFIG = {
		port: 5000,
		host: 'localhost',
	}
}

// github oauth
const CLIENT_ID =
	'4f58ad03056a3364127530a2a8c252765bc6387b8d9bfa64042831b7d4c944c9'
const CLIENT_SECRET =
	'2d1839b718ab66bf3b6905fabbda093396fa7be3d10376e3c113fcd9a9f05df9'

const SECRET = 'A0D2af~.dsa'

// 腾讯云配置
const CAPTCHA_APP_ID = 2030765311 // 秘钥应用id
const APP_SECRET_KEY = '0GHdZLovPyGCRMBcJobbSXQ**' // 验证码应用AppSecretKey
const SECRET_ID = 'AKIDFExUogtYu0rToQqZ5EWXXImJanlRmkBJ' // 秘钥secretId
const SECRET_KEY = '13FvLTjkfKjFVo2dy2rwlMwpBH8kB6m1' // 秘钥secretKey

module.exports = {
	MONGO_CONFIG,
	SERVER_CONFIG,
	SECRET,
	CLIENT_ID,
	CLIENT_SECRET,
	CAPTCHA_APP_ID,
	APP_SECRET_KEY,
	SECRET_ID,
	SECRET_KEY,
}


module.exports = {
	dev: {
	  proxyTable: {
		'/mock': {
		  target: 'http://localhost:3000',   // 需要请求的地址
		  changeOrigin: true,  // 是否跨域
		  pathRewrite: {
			'^/mock': '/'  // 替换target中的请求地址,例如请求的时候把'/login'换成'/mock/login'
		}
	  },
	}
  }
}
