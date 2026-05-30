import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Query,
  Param,
  HttpCode,
  HttpStatus,
  ParseUUIDPipe,
} from '@nestjs/common';
import { WorkLogsService } from './work-logs.service';
import { QueryWorkLogDto } from './dto/query-work-log.dto';
import { CreateWorkLogDto } from './dto/create-work-log.dto';
import { UpdateWorkLogDto } from './dto/update-work-log.dto';

@Controller('api/work-logs')
export class WorkLogsController {
  constructor(private readonly workLogsService: WorkLogsService) {}

  @Get()
  async findAll(@Query() query: QueryWorkLogDto) {
    return this.workLogsService.findAll(query);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createWorkLogDto: CreateWorkLogDto) {
    return this.workLogsService.create(createWorkLogDto);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  async update(@Param('id', ParseUUIDPipe) id: string, @Body() updateWorkLogDto: UpdateWorkLogDto) {
    return this.workLogsService.update(id, updateWorkLogDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id', ParseUUIDPipe) id: string) {
    await this.workLogsService.delete(id);
  }
}
