import bcrypt from "bcrypt";

export function hashPassword(password: string) {
  return bcrypt.genSalt(10).then(function (salt) {
    return bcrypt.hash(password, salt).then(function (hash) {
      return hash;
    });
  });
}

export function comparePassword(hash: string, password: string) {
  return bcrypt.compare(password, hash);
}
