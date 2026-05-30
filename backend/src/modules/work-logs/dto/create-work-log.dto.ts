import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsUUID,
  Length,
  Validate,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'maxDate', async: false })
export class MaxDateConstraint implements ValidatorConstraintInterface {
  validate(dateString: string) {
    const inputDate = new Date(dateString);
    const today = new Date();
    today.setHours(23, 59, 59, 999);
    return inputDate <= today;
  }

  defaultMessage() {
    return 'Дата не может быть в будущем';
  }
}

export class CreateWorkLogDto {
  @IsDateString()
  @IsNotEmpty({ message: 'Это поле обязательно' })
  @Validate(MaxDateConstraint)
  date: string;

  @IsUUID('4', { message: 'Некорректный формат UUID' })
  @IsNotEmpty({ message: 'Это поле обязательно' })
  workTypeId: string;

  @IsNumber({}, { message: 'Объём должен быть числом' })
  @IsPositive({ message: 'Объём должен быть больше нуля' })
  @IsNotEmpty({ message: 'Это поле обязательно' })
  volume: number;

  @IsString({ message: 'ФИО должно быть строкой' })
  @Length(3, 100, {
    message: 'ФИО должно содержать от 3 до 100 символов',
  })
  @IsNotEmpty({ message: 'Это поле обязательно' })
  executorName: string;
}
