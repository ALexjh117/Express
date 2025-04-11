import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { Evento } from './Evento';

@Table({ tableName: 'Notificaciones' })
export class Notificaciones extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  IdNotificacion!: number;

  @Column({ type: DataType.TEXT, allowNull: false })
  Mensaje!: string;

  @Column({ type: DataType.ENUM("Evento", "Actividad", "Anuncio"), allowNull: false })
  TiposNotificacion!: string;

  @Column({ type: DataType.DATEONLY, allowNull: false })
  FechaDeEnvio!: Date;

  @ForeignKey(() => Evento)
  @Column({ type: DataType.INTEGER, allowNull: false })
  IdEvento!: number;
}
 