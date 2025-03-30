import mongoose, { Document, ObjectId, Schema } from "mongoose";

export interface IPedidoOracion {
  _id?: ObjectId | string | undefined;
  nombre?: string;
  telefono?: string;
  peticion?: string;
}
export interface IPedidioOracionSchema  extends Document{
  nombre?: string;
  telefono?: string;
  peticion?: string;
}
const pedidoOracionSchema = new Schema(
  {
    nombre: {
      type: String,
    },
    telefono: {
      type: String,
    },
    peticion: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const PedidoOracion =
  mongoose.models.PedidoOracion ||
  mongoose.model("PedidoOracion", pedidoOracionSchema);
export default PedidoOracion;
