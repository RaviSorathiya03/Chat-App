import express from 'express';
export const Signinrouter = express.Router();
import { PrismaClient } from '@prisma/client';
import * as b from 'bcrypt'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient();


Signinrouter.post("/signup", async(req, res)=>{
    try{
        const body = req.body;
    const {username, password, firstname, lastname, mobileNumber} = body;
    if(!username || !password || !firstname || !lastname){
        return res.status(400).json({error: 'All fields are required'});
    }
    const register = await prisma.user.findFirst({
        where:{
            mobileNumber: mobileNumber,
        }
    })

    if(register){
        return res.status(400).json({error: 'User already exists'});
    }

    const hashedPassword = await b.hash(password, 10);
    const user = await prisma.user.create({
        data:{
            username: username,
            password: hashedPassword,
            firstName: firstname,
            lastName: lastname,
           
        }
    })

    res.json({success: true, user: user});
    } catch (err) {
        console.error(err);
        res.status(500).json({error: 'Server error'});
    }
})

Signinrouter.post("/signin", async(req, res)=>{
    try{
        const body = req.body;
        const {username, password} = body;
        if(!username ||!password){
            return res.status(400).json({error: 'All fields are required'});
        }
        const user = await prisma.user.findFirst({
            where:{
                username: username,
            }
        })
        if(!user){
            return res.status(400).json({error: 'User not found'});
        }
        const validPassword = await b.compare(password, user.password);
        if(!validPassword){
            return res.status(400).json({error: 'Invalid password'});
        }
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({success: true, token: token, user: user});
    } catch (err) {
        console.error(err);
        res.status(500).json({error: 'Server error'});
    }
})