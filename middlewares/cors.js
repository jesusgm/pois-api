import cors from "cors";

const ACCEPTED_OPTIONS = ["http://localhost:3000", "https://pois.vercel.app"];

export const corsMiddleware = ({ acceptedOptions = ACCEPTED_OPTIONS } = {}) =>
  cors({
    origin: (origin, callback) => {
      console.log({ origin, ACCEPTED_OPTIONS });
      if (acceptedOptions.indexOf(origin)) {
        return callback(null, true);
      }
      if (!origin) {
        return callback(null, true);
      }
      console.log("Not allowed by CORS");
      return callback(new Error("Not allowed by CORS"));
    },
  });
