import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: "user@gmail.com", description: "Mail address" })
  @IsString({ message: "This should be a string" })
  @IsEmail({}, { message: "Invalid email" })
  readonly email: string;

  @ApiProperty({ example: "12345", description: "Password" })
  @IsString({ message: "This should be a string" })
  @Length(4, 16, {
    message: "Password must be at min 4 characters and max 16 characters",
  })
  readonly password: string;
}
