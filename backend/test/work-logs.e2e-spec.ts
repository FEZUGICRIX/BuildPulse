import { Test, TestingModule } from '@nestjs/testing';
import {
  INestApplication,
  ValidationPipe,
  BadRequestException,
} from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';
import { PrismaService } from './../src/modules/prisma/prisma.service';
import { AllExceptionsFilter } from './../src/core/filters/http-exception.filter';

describe('WorkLogsController (e2e)', () => {
  let app: INestApplication<App>;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalFilters(new AllExceptionsFilter());
    app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: false,
        exceptionFactory: (errors) => {
          const formattedErrors: Record<string, string[]> = {};

          errors.forEach((error) => {
            if (error.constraints) {
              formattedErrors[error.property] = Object.values(
                error.constraints,
              );
            }
          });

          return new BadRequestException({
            message: 'Ошибка валидации',
            errors: formattedErrors,
          });
        },
      }),
    );
    await app.init();

    prisma = app.get<PrismaService>(PrismaService);
  });

  afterAll(async () => {
    await app.close();
  });

  describe('GET /api/work-logs', () => {
    it('should return paginated work logs with default parameters', async () => {
      const response = await request(app.getHttpServer())
        .get('/api/work-logs')
        .expect(200);

      expect(response.body).toHaveProperty('data');
      expect(response.body).toHaveProperty('total');
      expect(response.body).toHaveProperty('page');
      expect(response.body).toHaveProperty('limit');
      expect(Array.isArray(response.body.data)).toBe(true);
      expect(response.body.page).toBe(1);
      expect(response.body.limit).toBe(20);
    });

    it('should include workType relation in each work log', async () => {
      const response = await request(app.getHttpServer())
        .get('/api/work-logs')
        .expect(200);

      if (response.body.data.length > 0) {
        const firstLog = response.body.data[0];
        expect(firstLog).toHaveProperty('workType');
        expect(firstLog.workType).toHaveProperty('id');
        expect(firstLog.workType).toHaveProperty('name');
        expect(firstLog.workType).toHaveProperty('unit');
      }
    });

    it('should filter by dateFrom', async () => {
      const dateFrom = '2024-01-01';
      const response = await request(app.getHttpServer())
        .get(`/api/work-logs?dateFrom=${dateFrom}`)
        .expect(200);

      expect(response.body).toHaveProperty('data');
      response.body.data.forEach((log: any) => {
        expect(new Date(log.date).getTime()).toBeGreaterThanOrEqual(
          new Date(dateFrom).getTime(),
        );
      });
    });

    it('should filter by dateTo', async () => {
      const dateTo = '2024-12-31';
      const response = await request(app.getHttpServer())
        .get(`/api/work-logs?dateTo=${dateTo}`)
        .expect(200);

      expect(response.body).toHaveProperty('data');
      response.body.data.forEach((log: any) => {
        expect(new Date(log.date).getTime()).toBeLessThanOrEqual(
          new Date(dateTo).getTime(),
        );
      });
    });

    it('should filter by date range', async () => {
      const dateFrom = '2024-01-01';
      const dateTo = '2024-12-31';
      const response = await request(app.getHttpServer())
        .get(`/api/work-logs?dateFrom=${dateFrom}&dateTo=${dateTo}`)
        .expect(200);

      expect(response.body).toHaveProperty('data');
      response.body.data.forEach((log: any) => {
        const logDate = new Date(log.date).getTime();
        expect(logDate).toBeGreaterThanOrEqual(new Date(dateFrom).getTime());
        expect(logDate).toBeLessThanOrEqual(new Date(dateTo).getTime());
      });
    });

    it('should sort by date ascending', async () => {
      const response = await request(app.getHttpServer())
        .get('/api/work-logs?sortField=date&sortOrder=asc')
        .expect(200);

      expect(response.body).toHaveProperty('data');
      if (response.body.data.length > 1) {
        for (let i = 0; i < response.body.data.length - 1; i++) {
          const currentDate = new Date(response.body.data[i].date).getTime();
          const nextDate = new Date(response.body.data[i + 1].date).getTime();
          expect(currentDate).toBeLessThanOrEqual(nextDate);
        }
      }
    });

    it('should sort by date descending', async () => {
      const response = await request(app.getHttpServer())
        .get('/api/work-logs?sortField=date&sortOrder=desc')
        .expect(200);

      expect(response.body).toHaveProperty('data');
      if (response.body.data.length > 1) {
        for (let i = 0; i < response.body.data.length - 1; i++) {
          const currentDate = new Date(response.body.data[i].date).getTime();
          const nextDate = new Date(response.body.data[i + 1].date).getTime();
          expect(currentDate).toBeGreaterThanOrEqual(nextDate);
        }
      }
    });

    it('should sort by workType', async () => {
      const response = await request(app.getHttpServer())
        .get('/api/work-logs?sortField=workType&sortOrder=asc')
        .expect(200);

      expect(response.body).toHaveProperty('data');
      if (response.body.data.length > 1) {
        for (let i = 0; i < response.body.data.length - 1; i++) {
          const currentName = response.body.data[i].workType.name;
          const nextName = response.body.data[i + 1].workType.name;
          expect(currentName.localeCompare(nextName)).toBeLessThanOrEqual(0);
        }
      }
    });

    it('should sort by volume', async () => {
      const response = await request(app.getHttpServer())
        .get('/api/work-logs?sortField=volume&sortOrder=asc')
        .expect(200);

      expect(response.body).toHaveProperty('data');
      if (response.body.data.length > 1) {
        for (let i = 0; i < response.body.data.length - 1; i++) {
          const currentVolume = parseFloat(response.body.data[i].volume);
          const nextVolume = parseFloat(response.body.data[i + 1].volume);
          expect(currentVolume).toBeLessThanOrEqual(nextVolume);
        }
      }
    });

    it('should sort by executorName', async () => {
      const response = await request(app.getHttpServer())
        .get('/api/work-logs?sortField=executorName&sortOrder=asc')
        .expect(200);

      expect(response.body).toHaveProperty('data');
      if (response.body.data.length > 1) {
        for (let i = 0; i < response.body.data.length - 1; i++) {
          const currentName = response.body.data[i].executorName;
          const nextName = response.body.data[i + 1].executorName;
          expect(currentName.localeCompare(nextName)).toBeLessThanOrEqual(0);
        }
      }
    });

    it('should paginate with custom page and limit', async () => {
      const page = 1;
      const limit = 5;
      const response = await request(app.getHttpServer())
        .get(`/api/work-logs?page=${page}&limit=${limit}`)
        .expect(200);

      expect(response.body.page).toBe(page);
      expect(response.body.limit).toBe(limit);
      expect(response.body.data.length).toBeLessThanOrEqual(limit);
    });

    it('should return second page of results', async () => {
      const page = 2;
      const limit = 5;
      const response = await request(app.getHttpServer())
        .get(`/api/work-logs?page=${page}&limit=${limit}`)
        .expect(200);

      expect(response.body.page).toBe(page);
      expect(response.body.limit).toBe(limit);
    });

    it('should validate invalid sortField', async () => {
      const response = await request(app.getHttpServer())
        .get('/api/work-logs?sortField=invalid')
        .expect(400);

      expect(response.body).toHaveProperty('message');
    });

    it('should validate invalid sortOrder', async () => {
      const response = await request(app.getHttpServer())
        .get('/api/work-logs?sortOrder=invalid')
        .expect(400);

      expect(response.body).toHaveProperty('message');
    });

    it('should validate invalid page number', async () => {
      const response = await request(app.getHttpServer())
        .get('/api/work-logs?page=0')
        .expect(400);

      expect(response.body).toHaveProperty('message');
    });

    it('should validate invalid limit', async () => {
      const response = await request(app.getHttpServer())
        .get('/api/work-logs?limit=101')
        .expect(400);

      expect(response.body).toHaveProperty('message');
    });

    it('should validate invalid date format', async () => {
      const response = await request(app.getHttpServer())
        .get('/api/work-logs?dateFrom=invalid-date')
        .expect(400);

      expect(response.body).toHaveProperty('message');
    });
  });

  describe('DELETE /api/work-logs/:id', () => {
    it('should delete an existing work log and return 204', async () => {
      const workType = await prisma.workType.findFirst();
      if (!workType) {
        throw new Error('No work type found in database');
      }

      const createdLog = await prisma.workLog.create({
        data: {
          date: new Date('2024-01-15'),
          workTypeId: workType.id,
          volume: 10.5,
          executorName: 'Test Executor',
        },
      });

      await request(app.getHttpServer())
        .delete(`/api/work-logs/${createdLog.id}`)
        .expect(204);

      const deletedLog = await prisma.workLog.findUnique({
        where: { id: createdLog.id },
      });
      expect(deletedLog).toBeNull();
    });

    it('should return 404 when deleting non-existent work log', async () => {
      const nonExistentId = '00000000-0000-0000-0000-000000000000';
      const response = await request(app.getHttpServer())
        .delete(`/api/work-logs/${nonExistentId}`)
        .expect(404);

      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toBe('Запись не найдена');
    });

    it('should return 400 for invalid UUID format', async () => {
      const response = await request(app.getHttpServer())
        .delete('/api/work-logs/invalid-uuid')
        .expect(400);

      expect(response.body).toHaveProperty('message');
    });
  });

  describe('POST /api/work-logs', () => {
    it('should create a new work log and return 201', async () => {
      const workType = await prisma.workType.findFirst();
      if (!workType) {
        throw new Error('No work type found in database');
      }

      const newWorkLog = {
        date: '2024-01-15',
        workTypeId: workType.id,
        volume: 10.5,
        executorName: 'Test Executor',
      };

      const response = await request(app.getHttpServer())
        .post('/api/work-logs')
        .send(newWorkLog)
        .expect(201);

      expect(response.body).toHaveProperty('id');
      expect(response.body.date).toBe('2024-01-15T00:00:00.000Z');
      expect(response.body.workTypeId).toBe(workType.id);
      expect(response.body.volume).toBe('10.5');
      expect(response.body.executorName).toBe('Test Executor');
      expect(response.body).toHaveProperty('workType');
      expect(response.body.workType.id).toBe(workType.id);
      expect(response.body.workType.name).toBe(workType.name);
      expect(response.body.workType.unit).toBe(workType.unit);

      await prisma.workLog.delete({ where: { id: response.body.id } });
    });
  });

  describe('POST /api/work-logs - Error Handling', () => {
    it('should return 400 with validation errors in correct format when fields are missing', async () => {
      const response = await request(app.getHttpServer())
        .post('/api/work-logs')
        .send({})
        .expect(400);

      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toBe('Ошибка валидации');
      expect(response.body).toHaveProperty('errors');
      expect(response.body.errors).toHaveProperty('date');
      expect(response.body.errors).toHaveProperty('workTypeId');
      expect(response.body.errors).toHaveProperty('volume');
      expect(response.body.errors).toHaveProperty('executorName');
      expect(Array.isArray(response.body.errors.date)).toBe(true);
    });

    it('should return 400 when date is in the future', async () => {
      const workType = await prisma.workType.findFirst();
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 1);

      const response = await request(app.getHttpServer())
        .post('/api/work-logs')
        .send({
          date: futureDate.toISOString().split('T')[0],
          workTypeId: workType?.id,
          volume: 10,
          executorName: 'Test Executor',
        })
        .expect(400);

      expect(response.body).toHaveProperty('message');
      expect(response.body).toHaveProperty('errors');
      expect(response.body.errors).toHaveProperty('date');
      expect(response.body.errors.date).toContain(
        'Дата не может быть в будущем',
      );
    });

    it('should return 400 when volume is not positive', async () => {
      const workType = await prisma.workType.findFirst();

      const response = await request(app.getHttpServer())
        .post('/api/work-logs')
        .send({
          date: '2024-01-15',
          workTypeId: workType?.id,
          volume: -5,
          executorName: 'Test Executor',
        })
        .expect(400);

      expect(response.body).toHaveProperty('message');
      expect(response.body).toHaveProperty('errors');
      expect(response.body.errors).toHaveProperty('volume');
      expect(response.body.errors.volume).toContain(
        'Объём должен быть больше нуля',
      );
    });

    it('should return 400 when executorName is too short', async () => {
      const workType = await prisma.workType.findFirst();

      const response = await request(app.getHttpServer())
        .post('/api/work-logs')
        .send({
          date: '2024-01-15',
          workTypeId: workType?.id,
          volume: 10,
          executorName: 'AB',
        })
        .expect(400);

      expect(response.body).toHaveProperty('message');
      expect(response.body).toHaveProperty('errors');
      expect(response.body.errors).toHaveProperty('executorName');
      expect(response.body.errors.executorName).toContain(
        'ФИО должно содержать от 3 до 100 символов',
      );
    });

    it('should return 400 when executorName is too long', async () => {
      const workType = await prisma.workType.findFirst();
      const longName = 'A'.repeat(101);

      const response = await request(app.getHttpServer())
        .post('/api/work-logs')
        .send({
          date: '2024-01-15',
          workTypeId: workType?.id,
          volume: 10,
          executorName: longName,
        })
        .expect(400);

      expect(response.body).toHaveProperty('message');
      expect(response.body).toHaveProperty('errors');
      expect(response.body.errors).toHaveProperty('executorName');
      expect(response.body.errors.executorName).toContain(
        'ФИО должно содержать от 3 до 100 символов',
      );
    });

    it('should return 400 when workTypeId does not exist', async () => {
      const nonExistentId = '123e4567-e89b-42d3-a456-426614174000';

      const response = await request(app.getHttpServer())
        .post('/api/work-logs')
        .send({
          date: '2024-01-15',
          workTypeId: nonExistentId,
          volume: 10,
          executorName: 'Test Executor',
        })
        .expect(400);

      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toBe('Вид работ не найден');
      expect(response.body).not.toHaveProperty('errors');
    });

    it('should return 400 when workTypeId is not a valid UUID', async () => {
      const response = await request(app.getHttpServer())
        .post('/api/work-logs')
        .send({
          date: '2024-01-15',
          workTypeId: 'invalid-uuid',
          volume: 10,
          executorName: 'Test Executor',
        })
        .expect(400);

      expect(response.body).toHaveProperty('message');
      expect(response.body).toHaveProperty('errors');
      expect(response.body.errors).toHaveProperty('workTypeId');
    });
  });

  describe('PATCH /api/work-logs/:id', () => {
    it('should update an existing work log and return 200', async () => {
      const workType = await prisma.workType.findFirst();
      if (!workType) {
        throw new Error('No work type found in database');
      }

      const createdLog = await prisma.workLog.create({
        data: {
          date: new Date('2024-01-15'),
          workTypeId: workType.id,
          volume: 10.5,
          executorName: 'Test Executor',
        },
      });

      const updateData = {
        date: '2024-01-20',
        workTypeId: workType.id,
        volume: 15.75,
        executorName: 'Updated Executor',
      };

      const response = await request(app.getHttpServer())
        .patch(`/api/work-logs/${createdLog.id}`)
        .send(updateData)
        .expect(200);

      expect(response.body.id).toBe(createdLog.id);
      expect(response.body.date).toBe('2024-01-20T00:00:00.000Z');
      expect(response.body.workTypeId).toBe(workType.id);
      expect(response.body.volume).toBe('15.75');
      expect(response.body.executorName).toBe('Updated Executor');
      expect(response.body).toHaveProperty('workType');
      expect(response.body.workType.id).toBe(workType.id);
      expect(response.body.workType.name).toBe(workType.name);
      expect(response.body.workType.unit).toBe(workType.unit);

      await prisma.workLog.delete({ where: { id: createdLog.id } });
    });
  });

  describe('PATCH /api/work-logs/:id - Error Handling', () => {
    it('should return 404 when updating non-existent work log', async () => {
      const nonExistentId = '00000000-0000-0000-0000-000000000000';
      const workType = await prisma.workType.findFirst();

      const response = await request(app.getHttpServer())
        .patch(`/api/work-logs/${nonExistentId}`)
        .send({
          date: '2024-01-15',
          workTypeId: workType?.id,
          volume: 10,
          executorName: 'Test Executor',
        })
        .expect(404);

      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toBe('Запись не найдена');
    });

    it('should return 400 with validation errors when updating with invalid data', async () => {
      const workType = await prisma.workType.findFirst();
      if (!workType) {
        throw new Error('No work type found in database');
      }

      const createdLog = await prisma.workLog.create({
        data: {
          date: new Date('2024-01-15'),
          workTypeId: workType.id,
          volume: 10.5,
          executorName: 'Test Executor',
        },
      });

      const response = await request(app.getHttpServer())
        .patch(`/api/work-logs/${createdLog.id}`)
        .send({
          date: '2024-01-15',
          workTypeId: workType.id,
          volume: -5,
          executorName: 'AB',
        })
        .expect(400);

      expect(response.body).toHaveProperty('message');
      expect(response.body).toHaveProperty('errors');
      expect(response.body.errors).toHaveProperty('volume');
      expect(response.body.errors).toHaveProperty('executorName');

      await prisma.workLog.delete({ where: { id: createdLog.id } });
    });

    it('should return 400 when updating with non-existent workTypeId', async () => {
      const workType = await prisma.workType.findFirst();
      if (!workType) {
        throw new Error('No work type found in database');
      }

      const createdLog = await prisma.workLog.create({
        data: {
          date: new Date('2024-01-15'),
          workTypeId: workType.id,
          volume: 10.5,
          executorName: 'Test Executor',
        },
      });

      const nonExistentWorkTypeId = '123e4567-e89b-42d3-a456-426614174999';

      const response = await request(app.getHttpServer())
        .patch(`/api/work-logs/${createdLog.id}`)
        .send({
          date: '2024-01-15',
          workTypeId: nonExistentWorkTypeId,
          volume: 10,
          executorName: 'Test Executor',
        })
        .expect(400);

      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toBe('Вид работ не найден');

      await prisma.workLog.delete({ where: { id: createdLog.id } });
    });
  });
});
