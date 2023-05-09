import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ShimiService } from "./shimi.service";
import { ShimiControllerBase } from "./base/shimi.controller.base";

@swagger.ApiTags("shimis")
@common.Controller("shimis")
export class ShimiController extends ShimiControllerBase {
  constructor(
    protected readonly service: ShimiService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
