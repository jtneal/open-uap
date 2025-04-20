import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Report {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 19 })
  @Index()
  sightingDate: string;

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
  @Index()
  latitude: number;

  @Column('real')
  @Index()
  longitude: number;

  @CreateDateColumn()
  createDate: string;
}
