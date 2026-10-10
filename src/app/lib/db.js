// const { username, password } = process.env;

// export const connectionStr =
//   "mongodb+srv://" +
//   username +
//   ":" +
//   password +
//   "@cluster0.azlnpal.mongodb.net/restoDB?appName=Cluster0";

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

if (!username || !password) {
  throw new Error("MongoDB credentials are missing");
}

export const connectionStr = `mongodb+srv://${encodeURIComponent(username)}:${encodeURIComponent(password)}@cluster0.azlnpal.mongodb.net/restoDB?retryWrites=true&w=majority&appName=Cluster0`;
