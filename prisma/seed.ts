import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const userData = [
    {
      email: 'user1@example.com',
      name: 'User 1',
      posts: {
        create: [
          {
            title: 'Post 1',
            content: 'Content of Post 1',
            published: true,
          },
          {
            title: 'Post 2',
            content: 'Content of Post 2',
            published: false,
          },
        ],
      },
    },
    {
      email: 'user2@example.com',
      name: 'User 2',
      posts: {
        create: [
          {
            title: 'Post 3',
            content: 'Content of Post 3',
            published: true,
          },
        ],
      },
    },
  ];

  for (const user of userData) {
    await prisma.user.create({
      data: user,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
