import { Controller, Get, Param, Post, Put, Delete, Body, BadRequestException } from "@nestjs/common";
import { Activity } from "../models/activity.model";
import { ActivityDto } from "../dto/activity.dto";
import * as moment from "moment";

@Controller('/activities')
export class ActivityController {

  @Get()
  findAll(
  ) {
    return Activity.findAll()
  }

  @Post()
  create(
    @Body() body: ActivityDto
  ) {
    return Activity.create(body)
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() body: ActivityDto
  ) {
    const instance = await Activity.findByPk(id)
    if (!instance) {
      throw new BadRequestException('活动不存在')
    }
    return instance.update(body)
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ) {
    const instance = await Activity.findByPk(id)
    if (!instance) {
      throw new BadRequestException('屏幕不存在')
    } else if (moment(instance.endDate).isAfter(moment())) {
      throw new BadRequestException('活动未结束，无法删除')
    }
    return instance.destroy()
  }
}