import { Controller, Get, Param, Post, Put, Delete, Body, BadRequestException } from "@nestjs/common";
import { SubScheduleDto } from "src/dto/sub-schedule.dto";
import { SubSchedule } from "src/models/sub-schedule";

@Controller('/schedules/:parentId/children')
export class SubScheduleController {

  @Get()
  findAll(
    @Param('parentId') parentId: string,
  ) {
    return SubSchedule.findAll({
      where: {
        parentId
      }
    })
  }

  @Post()
  create(
    @Param('parentId') parentId: string,
    @Body() body: SubScheduleDto
  ) {
    body.parentId = parentId
    return SubSchedule.create(body)
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() body: SubScheduleDto
  ) {
    const instance = await SubSchedule.findByPk(id)
    if (!instance) {
      throw new BadRequestException('子日程不存在')
    }
    return instance.update(body)
  }

  @Delete(':id')
  delete(
    @Param('id') id: string,
  ) {
    return SubSchedule.destroy({
      where: {
        id
      }
    })
  }
}