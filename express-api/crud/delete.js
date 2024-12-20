const {PrismaClient} = require("@prisma/client");
const prisma= new PrismaClient();

async function main() {
    const deletedPosts=await prisma.post.deleteMany({
        where :{userId:1},
    });
    const user=await prisma.user.delete({
        where : {id:1},
    });

    console.log("Deleted Posts :",deletedPosts);
    console.log("Deleted User:",user);
}

main();