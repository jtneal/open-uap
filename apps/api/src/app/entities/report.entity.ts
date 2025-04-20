import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, VersionColumn } from 'typeorm';

@Entity()
export class Report {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 10 })
  sightingDate: string;

  @Column('varchar', { length: 8 })
  sightingTime: string;

  @Column('varchar', { length: 50 })
  sightingCity: string;

  @Column('varchar', { length: 50 })
  sightingState: string;

  @Column('varchar', { length: 50 })
  shape: string;

  @Column('varchar', { length: 50 })
  duration: string;

  @Column('text')
  description: string;

  @Column('real')
  latitude: number;

  @Column('real')
  longitude: number;

  @CreateDateColumn()
  createDate: string;
}
