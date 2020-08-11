import { Controller, Get, Param, Post, Put, Delete, Body, BadRequestException } from "@nestjs/common";
import { MainSchedule } from "src/models/main-schedule.model";
import { MainScheduleDto } from "src/dto/main-schedule.dto";

@Controller('/screens/:screenId/schedules')
export class MainScheduleController {

  @Get()
  findAll(
    @Param('screenId') screenId: string,
  ) {
    return MainSchedule.findAll({
      where: {
        screenId
      }
    })
  }

  @Post()
  create(
    @Param('screenId') screenId: string,
    @Body() body: MainScheduleDto
  ) {
    body.screenId = screenId
    return MainSchedule.create(body)
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() body: MainScheduleDto
  ) {
    const instance = await MainSchedule.findByPk(id)
    if (!instance) {
      throw new BadRequestException('主日程不存在')
    }
    return instance.update(body)
  }

  @Delete(':id')
  delete(
    @Param('id') id: string,
  ) {
    return MainSchedule.destroy({
      where: {
        id
      }
    })
  }
}