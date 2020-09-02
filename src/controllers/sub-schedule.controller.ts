import { Controller, Get, Param, Post, Put, Delete, Body, BadRequestException } from "@nestjs/common";
import { SubScheduleDto } from "../dto/sub-schedule.dto";
import { SubSchedule } from "../models/sub-schedule.model";
import { MainSchedule } from "../models/main-schedule.model";
import { Screen } from '../models/screen.model'


@Controller('/schedules/:parentId/children')
export class SubScheduleController {

  @Get()
  findAll(
    @Param('parentId') parentId: string,
  ) {
    return SubSchedule.findAll({
      where: {
        parentId
      },
      order: [['order', 'ASC']],
    })
  }

  @Post()
  async create(
    @Param('parentId') parentId: string,
    @Body() body: SubScheduleDto
  ) {
    body.parentId = parentId
    const last = await SubSchedule.findOne({ where: { parentId: parentId }, order: [['order', 'DESC']] })
    if (last) {
      body.order = last.order * 2;
    } else {
      body.order = 65535;
    }
    const instance = await SubSchedule.create(body)
    if (body.ppt) {
      const parent = await MainSchedule.findByPk(parentId)
      const screen = await Screen.findByPk(parent.screenId)
      await screen.increment('pptCount')
    }
    return instance
  }

  @Put(':id')
  async update(
    @Param('parentId') parentId: string,
    @Param('id') id: string,
    @Body() body: SubScheduleDto
  ) {
    const instance = await SubSchedule.findByPk(id)
    if (!instance) {
      throw new BadRequestException('子日程不存在')
    }
    if (body.ppt && !instance.ppt) {
      const parent = await MainSchedule.findByPk(parentId)
      const screen = await Screen.findByPk(parent.screenId)
      await screen.increment('pptCount')
    } else if (!body.ppt && instance.ppt) {
      const parent = await MainSchedule.findByPk(parentId)
      const screen = await Screen.findByPk(parent.screenId)
      await screen.decrement('pptCount')
    }
    await instance.update(body)
    return instance

  }

  @Delete(':id')
  async delete(
    @Param('parentId') parentId: string,
    @Param('id') id: string,
  ) {
    const instance = await SubSchedule.findByPk(id)
    if (instance.ppt) {
      const parent = await MainSchedule.findByPk(parentId)
      const screen = await Screen.findByPk(parent.screenId)
      await screen.decrement('pptCount')
    }
    await instance.destroy()
  }
}