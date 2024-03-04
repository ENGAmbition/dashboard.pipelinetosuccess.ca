import bcrypt from "bcryptjs";

const config = {
  passwordSaltRounds: 12,
  passwordHashFunction: bcrypt.hash,
  passwordCompareFunction: bcrypt.compare,
  min: {
    password: 8,
    name: 4,
    email: 8,
  },
  max: {
    password: 32,
    name: 32,
    email: 64,
  },
  user: {
    name: "User",
    permissions: [],
  },
};

export default config;
