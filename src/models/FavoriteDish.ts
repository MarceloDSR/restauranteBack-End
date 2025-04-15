import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./User";
import { Dish } from "./Dish";

@Entity()
export class FavoriteDish {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User, (user) => user.favoriteDish)
  user!: User;

  @ManyToOne(() => Dish, (dish) => dish.favoriteDish)
  dish!: Dish;

  constructor(){
    
  }
}