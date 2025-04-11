import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'Feedback' })
export class Feedback extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  IdFeedback!: number;

  @Column({ type: DataType.TEXT, allowNull: false })
  ComentarioFeedback!: string;

  @Column({ type: DataType.DATE, allowNull: true })
  FechaEnvio!: Date;
}
