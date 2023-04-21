import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

// pooling

// connection open close

    const connection = await open({
      filename: './database.db',
      driver: sqlite3.Database
    });

    export default connection;
