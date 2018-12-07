const express=require('express')
const srv=express()

srv.use(express.json())
srv.use(express.urlencoded({
    extended:true
}))

let teacher_route=require('./route/teachers')
let student_route=require('./route/students')

srv.use('/students',student_route)
srv.use('/teachers',teacher_route)

srv.listen(8000)