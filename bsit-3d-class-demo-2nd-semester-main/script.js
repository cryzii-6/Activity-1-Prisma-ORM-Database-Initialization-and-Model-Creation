const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createAccountWithProfile() {
    const account = await prisma.account.create({
        data: {
            email: "test@example.com",
            password: "securepassword",
            profile: {
                create: {
                    name: "John Doe",
                    age: 25
                }
            }
        },
        include: {
            profile: true
        }
    });

    console.log("Account Created:", account);
}

createAccountWithProfile();
