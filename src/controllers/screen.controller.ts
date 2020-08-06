import { Controller, Get, Param, Post, Put, Delete, Body, BadRequestException } from "@nestjs/common";
import { Screen } from "../models/screen.model";
import { ScreenDto } from "src/dto/screen.dto";
import { UtilService } from "src/services/util.service";

@Controller('/activities/:activityId/screens')
export class ScreenController {

  @Get()
  findAll(
    @Param('activityId') activityId: string,
  ) {
    return Screen.findAll({
      where: {
        activityId
      }
    })
  }

  @Post()
  async create(
    @Param('activityId') activityId: string,
    @Body() body: ScreenDto
  ) {
    body.activityId = activityId
    body.loginCode = UtilService.randomCharAndNumber(8)
    return Screen.create(body)
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() body: ScreenDto
  ) {
    const instance = await Screen.findByPk(id)
    if (!instance) {
      throw new BadRequestException('屏幕不存在')
    }
    return instance.update(body)
  }

  @Delete(':id')
  delete(
    @Param('id') id: string,
  ) {
    return Screen.destroy({
      where: {
        id
      }
    })
  }
}