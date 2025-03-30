import PedidoOracion, { IPedidioOracionSchema } from "@/models/pedidoOracion";
import { conecctMongoDB } from "@/utils/mongoDB";
import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
  await conecctMongoDB();
  try {
    const body = await request.json();
    const { nombre, telefono, peticion } = body;
    console.log("BODY ", body);
    const newPedidoOracion: IPedidioOracionSchema = new PedidoOracion({
      nombre,
      telefono,
      peticion,
    });
    await newPedidoOracion.save();
    const response = NextResponse.json(
      {
        message: "se guardo correctamente",
      },
      {
        status: 200,
      }
    );
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    response.headers.set(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
    return response;
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error al guardar",error,
      },
      {
        status: 500,
      }
    );
  }
}
export function OPTIONS() {
  const response = new NextResponse(null, { status: 204 });

  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  return response;
}
