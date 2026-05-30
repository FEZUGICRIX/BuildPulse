import { IsDateString, IsIn, IsInt, IsOptional, Max, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class QueryWorkLogDto {
  @IsOptional()
  @IsDateString({}, { message: 'Некорректный формат даты' })
  dateFrom?: string;

  @IsOptional()
  @IsDateString({}, { message: 'Некорректный формат даты' })
  dateTo?: string;

  @IsOptional()
  @IsIn(['date', 'workType', 'volume', 'executorName'], {
    message: 'Недопустимое поле для сортировки',
  })
  sortField?: string;

  @IsOptional()
  @IsIn(['asc', 'desc'], {
    message: 'Порядок сортировки должен быть asc или desc',
  })
  sortOrder?: 'asc' | 'desc';

  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: 'Номер страницы должен быть целым числом' })
  @Min(1, { message: 'Номер страницы должен быть не меньше 1' })
  page?: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: 'Размер страницы должен быть целым числом' })
  @Min(1, { message: 'Размер страницы должен быть не меньше 1' })
  @Max(100, { message: 'Размер страницы не может превышать 100' })
  limit?: number = 20;
}
