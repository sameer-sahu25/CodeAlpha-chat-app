import { config } from "dotenv";
import prisma from "./src/lib/prisma.js";
import bcryptjs from "bcryptjs";

config();

const createTestUsers = async () => {
  try {
    // Check if users already exist
    const existingUsers = await prisma.user.count();
    if (existingUsers > 1) {
      console.log("Users already exist in database");
      return;
    }

    const hashedPassword = await bcryptjs.hash("123456", 10);

    const testUsers = [
      {
        email: "john.doe@example.com",
        fullName: "John Doe",
        password: hashedPassword,
        profilePic: "https://ui-avatars.com/api/?name=John+Doe&background=random",
      },
      {
        email: "jane.smith@example.com", 
        fullName: "Jane Smith",
        password: hashedPassword,
        profilePic: "https://ui-avatars.com/api/?name=Jane+Smith&background=random",
      },
      {
        email: "mike.wilson@example.com",
        fullName: "Mike Wilson", 
        password: hashedPassword,
        profilePic: "https://ui-avatars.com/api/?name=Mike+Wilson&background=random",
      }
    ];

    for (const user of testUsers) {
      await prisma.user.create({
        data: user
      });
    }
    
    console.log("✅ Test users created successfully!");
    console.log("You can now login with:");
    console.log("Email: john.doe@example.com, Password: 123456");
    console.log("Email: jane.smith@example.com, Password: 123456");
    console.log("Email: mike.wilson@example.com, Password: 123456");

  } catch (error) {
    console.error("Error creating test users:", error);
  } finally {
    await prisma.$disconnect();
    process.exit(0);
  }
};

createTestUsers();
