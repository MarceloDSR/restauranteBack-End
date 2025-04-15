import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BeforeInsert, BeforeUpdate } from "typeorm";
import bcrypt from "bcryptjs";
import { Order } from "./Order";
import { FavoriteDish } from "./FavoriteDish";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({type:"varchar", length: 100, nullable: false })
  name: string;

  @Column({type:"varchar", length: 255, unique: true })
  email: string;

  @Column({type:"varchar", length:255, nullable: false})
  password: string;

  @Column({ default: "customer", type: "enum", enum: ['customer', 'admin'] })
  role!: string;

  @Column({ length: 15 })
  phone: string

  @OneToMany(() => Order, (order) => order.user)
  orders!: Order[];

  @OneToMany(() => FavoriteDish, (favoriteDish) => favoriteDish.user)
  favoriteDish!: FavoriteDish[];

  constructor(name: string, email: string, password: string, phone: string, role?: string){
    this.name = name;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.role = role || "custumer";
  }

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
}