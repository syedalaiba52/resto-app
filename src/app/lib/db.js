const { username, password } = process.env;

export const connectionStr =
  "mongodb+srv://" +
  username +
  ":" +
  password +
  "@cluster0.azlnpal.mongodb.net/restoDB?appName=Cluster0";
