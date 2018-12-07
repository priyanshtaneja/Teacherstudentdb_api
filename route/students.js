const route=require('express').Router()

let students=[
    {name:'abc' ,year:1,college:'JMI'},
    {name:'pqr' ,year:2,college:'DTU'},
    {name:'ajjc' ,year:1,college:'IIIT'},
    {name:'pqrcs' ,year:2,college:'NSIT'}
 
]

route.get('/',(req,res)=>res.send(students))
route.post('/',(req,res)=>{
    students.push({
        name:req.body.name,
        year:req.body.year,
        college:req.body.college
    })
    res.send(students)
})
route.get('/add',function(req,res){
    students.push({
        name:req.query.name,
        year:req.query.year,
        college:req.query.college
    })
    res.send(students)
    })
    
    route.get('/remove',(req,res)=>{
        students.pop()
        res.send(students)
    })
    
route.get('/:id',(req,res)=>{
    if(isNaN(parseInt(req.params.id))){
        next()
    }
    else{
        res.send(students[req.params.id])
    }
})


module.exports=route