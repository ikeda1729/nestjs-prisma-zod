import { createZodDto } from 'nestjs-zod'
import { z } from 'nestjs-zod/z'

export const CreateUserSchema = z.object({
  email: z.string().email(),
  name: z.string(),
})

export class CreateUserDto extends createZodDto(CreateUserSchema) {}

// import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

// export class CreateUserDto {
//   @IsEmail()
//   email: string;

//   @IsNotEmpty()
//   name: string;
// }