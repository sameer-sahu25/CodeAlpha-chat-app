// Quick test users creation for production
// Run this in your Neon shell: node create-users-production.js

import { config } from "dotenv";
import prisma from "./src/lib/prisma.js";
import bcryptjs from "bcryptjs";

config();

async function createTestUsers() {
  try {
    const hashedPassword = await bcryptjs.hash("123456", 10);

    const testUsers = [
      {
        email: "alice@example.com",
        fullName: "Alice Johnson", 
        password: hashedPassword,
        profilePic: "https://api.dicebear.com/7.x/avataaars/svg?seed=alice",
      },
      {
        email: "bob@example.com",
        fullName: "Bob Smith",
        password: hashedPassword, 
        profilePic: "https://api.dicebear.com/7.x/avataaars/svg?seed=bob",
      },
      {
        email: "charlie@example.com",
        fullName: "Charlie Brown",
        password: hashedPassword,
        profilePic: "https://api.dicebear.com/7.x/avataaars/svg?seed=charlie",
      },
      {
        email: "diana@example.com",
        fullName: "Diana Prince",
        password: hashedPassword,
        profilePic: "https://api.dicebear.com/7.x/avataaars/svg?seed=diana",
      }
    ];

    // Check if users already exist and create them
    for (const userData of testUsers) {
      try {
        const existingUser = await prisma.user.findUnique({ where: { email: userData.email } });
        if (!existingUser) {
          await prisma.user.create({ data: userData });
          console.log(`✅ Created user: ${userData.fullName} (${userData.email})`);
        } else {
          console.log(`⚠️ User already exists: ${userData.fullName} (${userData.email})`);
        }
      } catch (err) {
        console.log(`Error creating ${userData.email}:`, err.message);
      }
    }

    console.log("🎉 Test users setup complete!");
    console.log("\nYou can now login with any of these accounts:");
    console.log("📧 alice@example.com - Password: 123456");
    console.log("📧 bob@example.com - Password: 123456"); 
    console.log("📧 charlie@example.com - Password: 123456");
    console.log("📧 diana@example.com - Password: 123456");
    console.log("\n💡 Tip: Open multiple browser windows and login with different accounts to test real-time chat!");

  } catch (error) {
    console.error("❌ Error:", error);
  } finally {
    await prisma.$disconnect();
    console.log("Disconnected from PostgreSQL via Prisma");
    process.exit(0);
  }
}

createTestUsers();
