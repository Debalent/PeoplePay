const fs = require('fs')
const path = require('path')
const Database = require('better-sqlite3')
const bcrypt = require('bcryptjs')

const DB_PATH = path.join(__dirname, '..', 'streampilot.db')
const db = new Database(DB_PATH)

function ensureTables() {
  db.prepare(
    `CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT UNIQUE,
      passwordHash TEXT
    )`
  ).run()

  db.prepare(
    `CREATE TABLE IF NOT EXISTS programs (
      id TEXT PRIMARY KEY,
      title TEXT,
      description TEXT,
      channel TEXT,
      startTime TEXT,
      endTime TEXT,
      genre TEXT
    )`
  ).run()

  db.prepare(
    `CREATE TABLE IF NOT EXISTS favorites (
      id TEXT PRIMARY KEY,
      userId TEXT,
      programId TEXT,
      createdAt TEXT
    )`
  ).run()

  db.prepare(
    `CREATE TABLE IF NOT EXISTS recordings (
      id TEXT PRIMARY KEY,
      userId TEXT,
      programId TEXT,
      scheduledAt TEXT
    )`
  ).run()
}

function seedPrograms() {
  const count = db.prepare('SELECT COUNT(*) as c FROM programs').get().c
  if (count === 0) {
    const dataPath = path.join(__dirname, '..', 'data', 'mockPrograms.json')
    if (fs.existsSync(dataPath)) {
      const programs = JSON.parse(fs.readFileSync(dataPath, 'utf8'))
      const insert = db.prepare('INSERT INTO programs (id, title, description, channel, startTime, endTime, genre) VALUES (?, ?, ?, ?, ?, ?, ?)')
      const insertMany = db.transaction((items) => {
        for (const p of items) insert.run(p.id, p.title, p.description || '', p.channel || '', p.startTime || '', p.endTime || '', p.genre || '')
      })
      insertMany(programs)
      console.log('Seeded programs from mockPrograms.json')
    }
  }
}

function seedDemoUser() {
  const demoEmail = 'demo@streampilot.local'
  const row = db.prepare('SELECT id FROM users WHERE email = ?').get(demoEmail)
  if (!row) {
    const id = require('crypto').randomUUID()
    const hash = bcrypt.hashSync('demo123', 10)
    db.prepare('INSERT INTO users (id, email, passwordHash) VALUES (?, ?, ?)').run(id, demoEmail, hash)
    console.log('Seeded demo user: demo@streampilot.local / demo123')
  }
}

ensureTables()
seedPrograms()
seedDemoUser()

module.exports = db
