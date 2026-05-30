import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/modules/prisma/prisma.service';

const workTypes = [
  { name: 'Кладка перегородок', unit: 'м³' },
  { name: 'Монтаж опалубки', unit: 'м²' },
  { name: 'Бетонирование', unit: 'м³' },
  { name: 'Монтаж арматуры', unit: 'кг' },
  { name: 'Отделочные работы', unit: 'м²' },
  { name: 'Прочие работы', unit: 'шт' },
];

async function seed() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const prisma = app.get(PrismaService);

  console.log('Seeding work types...');

  for (const wt of workTypes) {
    await prisma.workType.upsert({
      where: { name: wt.name },
      update: {},
      create: wt,
    });
  }

  console.log('Seeding completed.');
  await app.close();
}

seed().catch((e) => {
  console.error(e);
  process.exit(1);
});
