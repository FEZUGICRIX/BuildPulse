import {
  IsDateString,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUUID,
  Length,
  Validate,
} from 'class-validator';
import { MaxDateConstraint } from './create-work-log.dto';

export class UpdateWorkLogDto {
  @IsOptional()
  @IsDateString()
  @Validate(MaxDateConstraint)
  date?: string;

  @IsOptional()
  @IsUUID('4', { message: 'Некорректный формат UUID' })
  workTypeId?: string;

  @IsOptional()
  @IsNumber({}, { message: 'Объём должен быть числом' })
  @IsPositive({ message: 'Объём должен быть больше нуля' })
  volume?: number;

  @IsOptional()
  @IsString({ message: 'ФИО должно быть строкой' })
  @Length(3, 100, {
    message: 'ФИО должно содержать от 3 до 100 символов',
  })
  executorName?: string;
}
