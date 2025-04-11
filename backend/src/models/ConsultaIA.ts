import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { Usuario } from './Usuario';

@Table({ tableName: 'consultaia' })
export class ConsultaIA extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  IdConsultaIA!: number;

  @Column({ type: DataType.TEXT, allowNull: false })
  Pregunta!: string;

  @Column({ type: DataType.TEXT, allowNull: false })
  Respuesta!: string;

  @Column({ type: DataType.DATEONLY, allowNull: false })
  Fecha!: Date;

  @Column({ type: DataType.TEXT, allowNull: true })
  Descripcion!: string;

  @ForeignKey(() => Usuario)
  @Column({ type: DataType.INTEGER, allowNull: false })
  IdUsuario!: number;
}
