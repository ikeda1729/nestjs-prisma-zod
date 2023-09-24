import { createZodDto } from 'nestjs-zod'
import { z } from 'nestjs-zod/z'

export const CreateUserSchema = z.object({
  email: z.string().email(),
  name: z.string(),
})

// class is required for using DTO as a type
export class CreateUserDto extends createZodDto(CreateUserSchema) {}