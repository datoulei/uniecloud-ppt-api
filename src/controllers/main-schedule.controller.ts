import { Controller, Get, Param, Post, Put, Delete, Body, BadRequestException } from "@nestjs/common";
import { MainSchedule } from "../models/main-schedule.model";
import { Screen } from '../models/screen.model'
import { MainScheduleDto } from "../dto/main-schedule.dto";

@Controller('/screens/:screenId/schedules')
export class MainScheduleController {

  @Get()
  findAll(
    @Param('screenId') screenId: string,
  ) {
    return MainSchedule.findAll({
      where: {
        screenId
      },
      order: [['order', 'ASC']],
    })
  }

  @Post()
  async create(
    @Param('screenId') screenId: string,
    @Body() body: MainScheduleDto
  ) {
    body.screenId = screenId
    const last = await MainSchedule.findOne({ where: { screenId }, order: [['order', 'DESC']] })
    if (last) {
      body.order = last.order * 2;
    } else {
      body.order = 65535;
    }
    const instance = await MainSchedule.create(body)
    const screen = await Screen.findByPk(screenId)
    await screen.increment('mainScheduleCount')
    return instance
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
  async delete(
    @Param('screenId') screenId: string,
    @Param('id') id: string,
  ) {
    await MainSchedule.destroy({
      where: {
        id
      }
    })
    const screen = await Screen.findByPk(screenId)
    await screen.decrement('mainScheduleCount')
  }
}