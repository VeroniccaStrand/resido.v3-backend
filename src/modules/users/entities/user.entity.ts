import { Entity, Enum, PrimaryKey, Property } from '@mikro-orm/core';
import { Role } from 'src/enums/role.enum';

@Entity({ abstract: true })
export abstract class User {
  @PrimaryKey()
  id!: number;

  @Property()
  firstName!: string;

  @Property()
  lastName!: string;

  @Property()
  email!: string;

  @Property()
  hash!: string;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();

  @Enum(() => Role)
  role: Role;

  constructor(role: Role) {
    this.role = role;
  }
}
