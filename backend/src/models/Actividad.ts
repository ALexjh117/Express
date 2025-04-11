import { Table, Column, Model, DataType, ForeignKey, HasMany } from 'sequelize-typescript';
import { Evento } from './Evento';
import { Asistencia } from './Asistencia';

@Table({ tableName: 'Actividad' })
export class Actividad extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  IdActividad!: number;

  @Column({ type: DataType.STRING(150), allowNull: false })
  NombreActi!: string;

  @Column({ type: DataType.DATEONLY, allowNull: false })
  FechaInicio!: Date;

  @Column({ type: DataType.DATEONLY, allowNull: false })
  FechaFin!: Date;

  @Column({ type: DataType.TIME, allowNull: false })
  HoraFin!: string;

  @Column({ type: DataType.TIME, allowNull: false })
  HoraInicio!: string;

  @Column({ type: DataType.STRING(50), allowNull: false })
  TipoLudica!: string;

  @Column({ type: DataType.TEXT, allowNull: true })
  Descripcion!: string;

  @ForeignKey(() => Evento)
  @Column({ type: DataType.INTEGER, allowNull: true })
  IdEvento!: number;

  @HasMany(() => Asistencia)
  asistencias!: Asistencia[];
}



