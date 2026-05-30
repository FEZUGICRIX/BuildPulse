import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '@/core/prisma/prisma.service';
import { QueryWorkLogDto } from './dto/query-work-log.dto';
import { CreateWorkLogDto } from './dto/create-work-log.dto';
import { UpdateWorkLogDto } from './dto/update-work-log.dto';
import { Prisma } from '@/prisma/generated';

@Injectable()
export class WorkLogsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(query: QueryWorkLogDto) {
    const {
      dateFrom,
      dateTo,
      sortField = 'date',
      sortOrder = 'desc',
      page = 1,
      limit = 20,
    } = query;

    const where: Prisma.WorkLogWhereInput = {};

    if (dateFrom || dateTo) {
      where.date = {};
      if (dateFrom) {
        where.date.gte = new Date(dateFrom);
      }
      if (dateTo) {
        where.date.lte = new Date(dateTo);
      }
    }

    const orderBy: Prisma.WorkLogOrderByWithRelationInput = {};
    if (sortField === 'workType') {
      orderBy.workType = { name: sortOrder };
    } else if (sortField === 'date') {
      orderBy.date = sortOrder;
    } else if (sortField === 'volume') {
      orderBy.volume = sortOrder;
    } else if (sortField === 'executorName') {
      orderBy.executorName = sortOrder;
    }

    const skip = (page - 1) * limit;

    const [data, total] = await this.prisma.$transaction([
      this.prisma.workLog.findMany({
        where,
        orderBy,
        skip,
        take: limit,
        include: { workType: true },
      }),
      this.prisma.workLog.count({ where }),
    ]);

    return { data, total, page, limit };
  }

  async create(dto: CreateWorkLogDto) {
    const { date, workTypeId, volume, executorName } = dto;

    const workType = await this.prisma.workType.findUnique({
      where: { id: workTypeId },
    });

    if (!workType) {
      throw new BadRequestException('Вид работ не найден');
    }

    return this.prisma.workLog.create({
      data: {
        date: new Date(date),
        workTypeId,
        volume,
        executorName,
      },
      include: { workType: true },
    });
  }

  async update(id: string, dto: UpdateWorkLogDto) {
    if (dto.workTypeId) {
      const workType = await this.prisma.workType.findUnique({
        where: { id: dto.workTypeId },
      });

      if (!workType) {
        throw new BadRequestException('Вид работ не найден');
      }
    }

    const data: Prisma.WorkLogUpdateInput = {};

    if (dto.date !== undefined) {
      data.date = new Date(dto.date);
    }
    if (dto.workTypeId !== undefined) {
      data.workType = { connect: { id: dto.workTypeId } };
    }
    if (dto.volume !== undefined) {
      data.volume = dto.volume;
    }
    if (dto.executorName !== undefined) {
      data.executorName = dto.executorName;
    }

    if (Object.keys(data).length === 0) {
      throw new BadRequestException('Нет полей для обновления');
    }

    return this.prisma.workLog.update({
      where: { id },
      data,
      include: { workType: true },
    });
  }

  async delete(id: string) {
    await this.prisma.workLog.delete({
      where: { id },
    });
  }
}
