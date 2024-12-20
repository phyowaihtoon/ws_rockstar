import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
    const user = await prisma.user.create({
        data : {
            name:"David",
            username:"david",
            posts:{
                create:[
                    {content:'First post from David'},
                    {content:'Second post from David'}
                ]
            }
        }
    });

    console.log(user);
}

main();