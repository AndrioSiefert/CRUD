import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export default class UserEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}
