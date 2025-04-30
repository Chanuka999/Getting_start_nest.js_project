import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class WhatsappService {
  private readonly logger = new Logger(WhatsappService.name);
  sendMessage() {
    this.logger.log('sendMessage()');
    return 'HEllo world';
  }
}
