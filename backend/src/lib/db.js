import prisma from "./prisma.js";

export const connectDB = async () => {
    try {
        await prisma.$connect();
        console.log("PostgreSQL Connected via Prisma");
    } catch (error) {
        console.log("PostgreSQL connection error:", error);
    }
};
