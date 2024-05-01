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

const profileSchema = zod.object({
    contact: zod.string().length().optional(),
    gender: zod.string().optional(),
    DoB: zod.string().optional(),
    address: zod.string().optional()
});

const propertySchema = zod.object({
    name: zod.string(),
    price: zod.number(),
    description: zod.string(),
    address: zod.string(),
    bedrooms: zod.number(),
    bathrooms: zod.number(),
    propertyType: zod.string(),
    imageUrl: zod.string().url().optional(),
    featured: zod.boolean().optional()
})

module.exports = {
    signupSchema,
    signinSchema,
    profileSchema,
    propertySchema
};