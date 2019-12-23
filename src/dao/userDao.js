//
// exports.singUp = (connection) => {
//     return new Promise((resolve, reject) => {
//         const Query = `
//         SELECT * FROM users
//         `
//         connection.query(Query, (err, result) => {
//             err && reject(err)
//             resolve(result)
//         })
//     })
// }




exports.signUp = (Transaction, req, next) => {
  return Transaction(async (connection) => {
    const Query1 = `INSERT INTO USER(user_id, user_pw, user_nickname) VALUES("${req.body.id}", "${req.body.pw}", "${req.body.nickname}")`
    await connection.query(Query1)
    const Query2 = `SELECT user_idx FROM USER WHERE user_id = "${req.body.id}"`
    const user_idx = await connection.query(Query2)
    console.log('success')
    return user_idx[0]
  }).catch(error => {
    return next(error)
  })
}

