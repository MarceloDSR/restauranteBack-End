import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { OrderItem } from "./OrderItem";
import { FavoriteDish } from "./FavoriteDish";

@Entity()
export class Dish {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 150 })
  name: string;

  @Column({ type: "text" })
  description: string;

  @Column("decimal", { precision: 5, scale: 2 })
  price: number;

  @Column({ default: true })
  available: boolean;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.dish)
  orderItems!: OrderItem[];

  @OneToMany(() => FavoriteDish, (favoriteDish) => favoriteDish.dish)
  favoriteDish!: FavoriteDish[];

  constructor(name: string, description: string, price: number, available: boolean){
    this.name = name;
    this.description = description;
    this.price = price;
    this.available = available
  }
}