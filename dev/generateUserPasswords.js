import bcrypt from "bcrypt";

const createHash = async (password) => {
  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

const passwords = ["anonymous123", "anar123", "richter123", "finch123"];

passwords.forEach((password) => {
  (async () => {
    const hash = await createHash(password);
    console.log(`${password} => ${hash}`);
  })();
});
