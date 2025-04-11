import { Table, Column, Model, DataType, ForeignKey, HasMany } from 'sequelize-typescript';
import { PlanificacionEvento } from './PlanificacionEvento';
import { Actividad } from './Actividad';
import { Notificaciones } from './Notificaciones';
import { RelUsuarioEvento } from './RelUsuarioEvento';

@Table({ tableName: 'Evento' })
export class Evento extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  IdEvento!: number;

  @Column({ type: DataType.STRING(255), allowNull: false })
  NombreEvento!: string;

  @Column({ type: DataType.DATEONLY, allowNull: false })
  FechaInicio!: Date;

  @Column({ type: DataType.DATEONLY, allowNull: false })
  FechaFin!: Date;

  @Column({ type: DataType.TIME, allowNull: false })
  HoraFin!: string;

  @Column({ type: DataType.TIME, allowNull: false })
  HoraInicio!: string;

  @Column({ type: DataType.STRING(255), allowNull: false })
  UbicacionEvento!: string;

  @ForeignKey(() => PlanificacionEvento)
  @Column({ type: DataType.INTEGER, allowNull: true })
  IdPlanificarE!: number;

  @Column({ type: DataType.TEXT, allowNull: true })
  DescripcionEvento!: string;

  @HasMany(() => Actividad)
  actividades!: Actividad[];

  @HasMany(() => Notificaciones)
  notificaciones!: Notificaciones[];

  @HasMany(() => RelUsuarioEvento)
  relUsuarioEventos!: RelUsuarioEvento[];
}
