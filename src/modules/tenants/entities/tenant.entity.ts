import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ schema: 'public' })
export class Tenant {
  @PrimaryKey()
  id!: number;

  @Property({ unique: true })
  companyName!: string;

  @Property({ unique: true })
  orgNumber?: string;

  @Property({ unique: true })
  schemaName!: string; // Namn på schemat i PostgreSQL

  @Property()
  email!: string;

  @Property({ nullable: true })
  phone?: string;

  @Property({ nullable: true })
  address?: string;

  @Property({ nullable: true })
  city?: string;

  @Property({ nullable: true })
  zipCode?: string;

  @Property({ nullable: true })
  country?: string;

  @Property({ default: 'active' })
  status: string = 'active';

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();
}
