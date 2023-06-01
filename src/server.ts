import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import corse from 'cors'
import express from 'express'
//mideleware setup

app.use(corse())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//main function

async function startServer() {
  try {
    await mongoose.connect(config.dataBaseUrl as string)
    console.log('Connected to database')
    app.listen(config.port, () => {
      console.log(`University of coder is running port ${config.port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

startServer()
