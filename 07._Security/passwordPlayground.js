import bcrypt from "bcrypt";

const passwordPlaintext = "hunter42";
const passwordPlaintext2 = "nothunter";
const hashedPassword = "$2b$12$S5hJz8BTlwNqnp6xKxZwKOKOAdQeWPTyEVFkR/nJRDinnWK6vVCfu";

const  encryptedPassword = await bcrypt.hash(passwordPlaintext, 12);
console.log(encryptedPassword);

const isSame = await bcrypt.compare(passwordPlaintext2, hashedPassword);
console.log(isSame);