import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
    const user=await prisma.user.findMany({
        include:{
            posts:true,
        }
    });

    console.log(user);
}

main();