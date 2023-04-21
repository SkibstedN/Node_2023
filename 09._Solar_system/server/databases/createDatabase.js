import db from "./connection.js";

const isDeleteMode = process.true;

if (isDeleteMode) {
    db.exec(`DROP TABLE planets`);
    db.exec(`DROP TABLE planets`);
}

db.exec(`
CREATE TABLE  IF NOT EXISTS planets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    size INT,
    is_habitable BOOLEAN
)
`);

db.exec(`
CREATE TABLE people (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    planet_id INTEGER,
    FOREIGN KEY (planet_id) REFERENCES planets (id)
);
`);


// seeding (DML)
if(isDeleteMode) {
db.exec(`INSERT INTO planets (name, is_habitable) VALUES ('mercury', False);`);
db.exec(`INSERT INTO planets (name, is_habitable) VALUES ('mars', False);`);
db.exec(`INSERT INTO planets (name, is_habitable) VALUES ('venus', False);`);
db.exec(`INSERT INTO planets (name, is_habitable) VALUES ('jupiter', False);`);
db.exec(`INSERT INTO planets (name, is_habitable) VALUES ('pluto', False);`);
db.exec(`INSERT INTO planets (name, is_habitable) VALUES ('saturn', False);`);
db.exec(`INSERT INTO planets (name, is_habitable) VALUES ('uranus', False)`);

}

