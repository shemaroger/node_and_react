const db = require('../config/database');
const bcrypt = require('bcryptjs'); // Make sure this is bcryptjs

class User {
    static async createTable() {
        const queryText = `
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                email VARCHAR(100) UNIQUE NOT NULL,
                password VARCHAR(100) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )        `;
            await db.query(queryText);
            console.log('Users table created or already exists');
    }
    // Hash user password
    static async hashPassword(password) {
        const saltRounds = 10;
        return await bcrypt.hash(password, saltRounds);
    }
    //verify user password
    static async verifyPassword(PlainPassword, hashedPassword) {
        return await bcrypt.compare(PlainPassword, hashedPassword);
    }
    static async create(userData) {
        const { name, email, password } = userData;
        const hashedPassword = await this.hashPassword(password);
        const queryText = `
            INSERT INTO users (name, email, password)
            VALUES ($1, $2, $3)
            RETURNING id, name, email, created_at
        `;
        const values = [name, email, hashedPassword];
        const result = await db.query(queryText, values);
        return result.rows[0];
    }
    

  static async findById(id) {
    const result = await db.query(
      'SELECT id, name, email, created_at FROM users WHERE id = $1', 
      [id]
    );
    return result.rows[0];
  }

  static async findByEmail(email) {
    const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    return result.rows[0];
  }

  // update profile
  static async update(id, userData) {
    const {name, email} = userData;
    const querText = `
        UPDATE users
        SET name = $1, email = $2, updated_at = CURRENT_TIMESTAMP
        WHERE id = $3
        RETURNING id, name, email, created_at, updated_at
    `;
    const values = [name, email, id];
    const result = await db.query(querText, values);
    return result.rows[0];
  }
}

module.exports = User;