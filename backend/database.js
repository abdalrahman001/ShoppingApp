const mysql= reqitr('mysql2')
const config= reqitr('../config.json')
const pool =mysql.createpool({
    host: config.host,
    user: config.user,
    database: config.database,
    password: config.password

})
module.export=pool.promis()