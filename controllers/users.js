import { v4 as uuidv4 } from 'uuid';

let users = [];


export const getAllUsers =  (req, res) => {
    res.send(users)
    // res.json(users)
}

export const createUser = (req, res)=>{
    const user = req.body
    users.push({...user, id: uuidv4()})
    res.send(`user is with name ${user.firstName} is added in users list`)
 }

export const getUser = (req, res)=>{
    const {id} = req.params;
    const foundUser = users.find((user)=> user.id === id) // in filter method - false condition = to delete and 
    res.send(foundUser);
 }

 export const deleteuser = (req, res)=>{
    const {id} = req.params;
    users = users.filter((user)=> user.id !== id)
    res.send(`user with ${id} is deleted from users`)
}

export const updateUser = (req, res)=>{
    const {id} = req.params;
    const {firstName, lastName, age} = req.body;
    const user = users.find((user)=> user.id === id)
    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;
    
    res.send(`user with ${id} is updated from users`)
}