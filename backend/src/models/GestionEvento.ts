import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'GestionEvento' })
export class GestionEvento extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  IdGestionE!: number;

  @Column({ type: DataType.ENUM("Aprobado", "Pendiente"), allowNull: false })
  Aprobar!: string;
}
