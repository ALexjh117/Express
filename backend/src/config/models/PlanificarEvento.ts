import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { GestionEvento } from './GestionEvento';

@Table({ tableName: 'PlanificacionEvento' })
export class PlanificacionEvento extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  IdPlanificarE!: number;

  @Column({ type: DataType.STRING(150), allowNull: false })
  NombreEvento!: string;

  @Column({ type: DataType.DATE, allowNull: false })
  FechaEvento!: Date;

  @Column({ type: DataType.STRING(50), allowNull: false })
  LugarDeEvento!: string;

  @Column({ type: DataType.TEXT, allowNull: true })
  Recursos!: string;

  @ForeignKey(() => GestionEvento)
  @Column({ type: DataType.INTEGER, allowNull: false })
  IdGestionE!: number;
}
