import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/core/prisma/prisma.service';

@Injectable()
export class WorkTypesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.workType.findMany({
      orderBy: {
        name: 'asc',
      },
    });
  }
}
