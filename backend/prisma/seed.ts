import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const workTypes = [
  { name: 'Кладка перегородок', unit: 'м³' },
  { name: 'Монтаж опалубки', unit: 'м²' },
  { name: 'Бетонирование', unit: 'м³' },
  { name: 'Монтаж арматуры', unit: 'кг' },
  { name: 'Отделочные работы', unit: 'м²' },
  { name: 'Прочие работы', unit: 'шт' },
];

async function seed() {
  console.log('Seeding work types...');

  for (const wt of workTypes) {
    await prisma.workType.upsert({
      where: { name: wt.name },
      update: {},
      create: wt,
    });
  }

  console.log('Seeding completed.');
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
