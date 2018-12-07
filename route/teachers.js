const route=require("express").Router()

let teachers=[
    {name:'chv' ,subject:'Maths'},
    {name:"cvg",subject:"English"}
]
route.get('/',(req,res)=>res.send(teachers))

route.get('/add',function(req,res){
teachers.push({
    name:req.query.name,
    subject:req.query.subject
})
res.send(teachers)
})

route.get('/remove',(req,res)=>{
    teachers.pop()
    res.send(teachers)
})

route.get('/:id',(req,res)=>{
    if(isNaN(parseInt(req.params.id))){
    next();
}
else{
    res.send(teachers[req.params.id])
}
})

module.exports=route