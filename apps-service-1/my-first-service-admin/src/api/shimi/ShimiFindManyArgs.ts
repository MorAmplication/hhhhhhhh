import { ShimiWhereInput } from "./ShimiWhereInput";
import { ShimiOrderByInput } from "./ShimiOrderByInput";

export type ShimiFindManyArgs = {
  where?: ShimiWhereInput;
  orderBy?: Array<ShimiOrderByInput>;
  skip?: number;
  take?: number;
};
