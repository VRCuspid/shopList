const mysql=require('mysql')
let pool = mysql.createPool({
    user: 'root',
    password: 'root',
    database: '1608a'
});
function query(sql,arr,ck){
    pool.getConnection(function(err,con){
        if(err){
           return ck(err)
        }
        con.query(sql,arr,function(err,data){
            if(err){
                return ck(err)
            }
            ck(null,data)
        })
    })
}
module.exports=query