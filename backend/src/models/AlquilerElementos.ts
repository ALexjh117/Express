import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { Usuario } from './Usuario';

@Table({ tableName: 'AlquilerElementos' })
export class AlquilerElementos extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  IdAlquiler!: number;

  @Column({ type: DataType.STRING(50), allowNull: false })
  NombreElemento!: string;

  @Column({ type: DataType.DATE, allowNull: false })
  FechaSolicitud!: Date;

  @Column({ type: DataType.DATE, allowNull: false })
  FechaDevolucion!: Date;

  @Column({ type: DataType.STRING(50), allowNull: false })
  RegistradoPor!: string;

  @Column({ type: DataType.TEXT, allowNull: true })
  Observaciones!: string;

  @ForeignKey(() => Usuario)
  @Column({ type: DataType.INTEGER, allowNull: true })
  IdUsuario!: number;
}
