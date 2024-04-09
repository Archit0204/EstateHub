const zod = require("zod");

const signupSchema = zod.object({
    firstName: zod.string(),
    lastName: zod.string().optional(),
    email: zod.string().email(),
    password: zod.string().min(6),
    confirmPassword: zod.string().min(6)
});

const signinSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6)
});

module.exports = {
    signupSchema,
    signinSchema
};