import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { Usuario } from './Usuario';

@Table({ tableName: 'Constancia' })
export class Constancia extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  ConstanciaId!: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  ConstanciaHorasCert!: number;

  @Column({ type: DataType.ENUM("Aprobado", "Pendiente"), allowNull: false })
  ConstanciaEstado!: string;

  @Column({ type: DataType.DATE, allowNull: false })
  ConstanciaFecha!: Date;

  @ForeignKey(() => Usuario)
  @Column({ type: DataType.INTEGER, allowNull: false })
  IdUsuario!: number;
}
