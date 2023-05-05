const axios = require('axios')

exports.homeRoutes = (req,res)=>{
     axios.get('http://localhost:3000/api/users')
     .then(function(response){
        res.render('index',{users:response.data})
     })
     .catch(err=>{
        res.send(err)
     })
}

exports.addPage = (req,res)=>{
    res.render('add__user')
}

exports.updatePage = (req,res)=>{
    res.render('update')
}