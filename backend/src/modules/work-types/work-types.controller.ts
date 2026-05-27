import { Controller, Get } from '@nestjs/common';
import { WorkTypesService } from './work-types.service';

@Controller('api/work-types')
export class WorkTypesController {
  constructor(private readonly workTypesService: WorkTypesService) {}

  @Get()
  findAll() {
    return this.workTypesService.findAll();
  }
}
