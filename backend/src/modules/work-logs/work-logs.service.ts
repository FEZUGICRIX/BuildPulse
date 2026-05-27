import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { QueryWorkLogDto } from './dto/query-work-log.dto';
import { CreateWorkLogDto } from './dto/create-work-log.dto';
import { UpdateWorkLogDto } from './dto/update-work-log.dto';
import { Prisma } from '@prisma/client';

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

    try {
      const [data, total] = await Promise.all([
        this.prisma.workLog.findMany({
          where,
          orderBy,
          skip,
          take: limit,
          include: {
            workType: true,
          },
        }),
        this.prisma.workLog.count({ where }),
      ]);

      return {
        data,
        total,
        page,
        limit,
      };
    } catch (error) {
      throw new InternalServerErrorException(
        'Ошибка при получении списка записей',
      );
    }
  }

  async create(createWorkLogDto: CreateWorkLogDto) {
    const { date, workTypeId, volume, executorName } = createWorkLogDto;

    try {
      const workType = await this.prisma.workType.findUnique({
        where: { id: workTypeId },
      });

      if (!workType) {
        throw new BadRequestException('Вид работ не найден');
      }

      const workLog = await this.prisma.workLog.create({
        data: {
          date: new Date(date),
          workTypeId,
          volume,
          executorName,
        },
        include: {
          workType: true,
        },
      });

      return workLog;
    } catch (error) {
      if (
        error instanceof BadRequestException ||
        error instanceof NotFoundException
      ) {
        throw error;
      }
      throw new InternalServerErrorException('Ошибка при создании записи');
    }
  }

  async update(id: string, updateWorkLogDto: UpdateWorkLogDto) {
    try {
      const existingWorkLog = await this.prisma.workLog.findUnique({
        where: { id },
      });

      if (!existingWorkLog) {
        throw new NotFoundException('Запись не найдена');
      }

      const { date, workTypeId, volume, executorName } = updateWorkLogDto;

      const workType = await this.prisma.workType.findUnique({
        where: { id: workTypeId },
      });

      if (!workType) {
        throw new BadRequestException('Вид работ не найден');
      }

      const updatedWorkLog = await this.prisma.workLog.update({
        where: { id },
        data: {
          date: new Date(date),
          workTypeId,
          volume,
          executorName,
        },
        include: {
          workType: true,
        },
      });

      return updatedWorkLog;
    } catch (error) {
      if (
        error instanceof BadRequestException ||
        error instanceof NotFoundException
      ) {
        throw error;
      }
      throw new InternalServerErrorException('Ошибка при обновлении записи');
    }
  }

  async delete(id: string) {
    try {
      const existingWorkLog = await this.prisma.workLog.findUnique({
        where: { id },
      });

      if (!existingWorkLog) {
        throw new NotFoundException('Запись не найдена');
      }

      await this.prisma.workLog.delete({
        where: { id },
      });
    } catch (error) {
      if (
        error instanceof BadRequestException ||
        error instanceof NotFoundException
      ) {
        throw error;
      }
      throw new InternalServerErrorException('Ошибка при удалении записи');
    }
  }
}
