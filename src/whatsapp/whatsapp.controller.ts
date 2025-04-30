import { Controller, Logger, Post, Req } from '@nestjs/common';
import { WhatsappService } from './whatsapp.service';
import { Request } from 'express';

@Controller('whatsapp')
export class WhatsappController {
  private readonly logger = new Logger(WhatsappController.name);
  public constructor(private readonly whatsappService: WhatsappService) {}
  @Post('send')
  sendMessage(@Req() request: Request) {
    this.logger.log('sendMessage()');
    console.log(JSON.stringify(request.body));

    return this.whatsappService.sendMessage();
  }
}
