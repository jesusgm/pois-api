import cors from "cors";

const ACCEPTED_OPTIONS = ["http://localhost:3000", "https://pois.vercel.app"];

export const corsMiddleware = ({ acceptedOptions = ACCEPTED_OPTIONS } = {}) =>
  cors({
    origin: (origin, callback) => {
      if (acceptedOptions.indexOf(origin)) {
        return callback(null, true);
      }
      if (!origin) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
  });
