import * as z from 'zod'

export const signinSchema = z.object({
    username: z.string(),
    password: z.string(),
})

export const signupSchema = z.object({
    username: z.string(),
    password: z.string(),
    firstname: z.string(),
    lastname: z.string(),

})