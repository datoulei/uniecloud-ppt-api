import { Controller, Get, Param, Post, Put, Delete, Body, BadRequestException, Query } from "@nestjs/common";
import { Activity } from "../models/activity.model";
import { ActivityDto } from "../dto/activity.dto";
import * as moment from "moment";
import { Op } from "sequelize";

@Controller('/activities')
export class ActivityController {

  @Get()
  findAll(
    @Query() query: any
  ) {
    const where: any = {};
    if (query.status) {
      switch (query.status) {
        case '1':
          where.startTime = { [Op.gte]: moment().toDate() }
          break;
        case '2':
          where.startTime = { [Op.lt]: moment().toDate() }
          where.endTime = { [Op.gte]: moment().toDate() }
          break;
        case '3':
          where.endTime = { [Op.lt]: moment().toDate() }
          break;
        default:
          break;
      }
    }
    return Activity.findAll({ where })
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
      throw new BadRequestException('活动不存在')
    } else if (moment(instance.endTime).isAfter(moment())) {
      throw new BadRequestException('活动未结束，无法删除')
    }
    return instance.destroy()
  }
}