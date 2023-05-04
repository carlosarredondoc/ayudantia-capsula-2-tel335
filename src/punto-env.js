import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

console.log(process.env.PASSWORD)

console.log(process.env.JWT_SECRET)
console.log(process.env.PORT || 3000)
