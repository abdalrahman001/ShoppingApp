const db=require('../database')
module.exports=class User  {
    constructor(name,email,password){
        this.name=name;
        this.email=email;
        this.password=password;
    }
    static find(email){
        return db.execute(
            'SELECT * FROM users WHERE email=?',
            [email]
        )
    }
    static findById(id){
        return db.execute(
            'SELECT * FROM users WHERE id=?',
            [id]
        )
    }
       
    
    static save(user){
        return db.execute(
            'INSERT INTO users(name,email,password) VALUES(?,?,?)',
            [user.name,user.email,user.password]
        );
    }
};