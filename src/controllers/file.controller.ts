import { Controller, Post, UseInterceptors, UploadedFile } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import * as fs from 'fs-extra'
import * as path from 'path'

@Controller('/files')
export class FileController {

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async upload(
    @UploadedFile() file: Express.Multer.File,
    ) {
    console.log("FileController -> file", file)
    const oldFile = path.join(process.cwd(), file.path)
    const newPath = path.join(`${Date.now()}`, file.originalname)
    const newFile = path.join(process.cwd(), file.destination, newPath)
    fs.moveSync(oldFile, newFile)
    return newPath
  }

}