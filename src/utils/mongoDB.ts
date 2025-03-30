import mongoose from "mongoose";
export const conecctMongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://marcos242016:FI20KADeNak4xtf6@jovenesmedeacluster.w764l.mongodb.net/Pedidos"
    );
    console.log("Base de datos conectada");
  } catch (error) {
    console.log("ERROR ", error);
  }
};
