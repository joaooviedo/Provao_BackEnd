import { Injectable } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@Injectable()
@ApiTags('status')
export class AppService {
  getAppStatus(baseUrl: string) {
    return {
      status: "Server is running! 🚀",
      docs: baseUrl + "/"
    };
  }
}