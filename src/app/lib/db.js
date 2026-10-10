const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
export const connectionStr =
  "mongodb+srv://" +
  username +
  ":" +
  password +
  "@cluster0.azlnpal.mongodb.net/restoDB?appName=Cluster0";