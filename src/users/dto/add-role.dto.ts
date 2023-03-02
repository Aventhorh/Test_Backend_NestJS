import { IsNumber, IsString } from "class-validator";

export class AddRoleDto {
  @IsString({ message: "This should be a string" })
  readonly value: string;
  @IsNumber({}, { message: "This should be a number" })
  readonly userId: number;
}
