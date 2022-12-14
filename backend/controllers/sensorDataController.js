import SensorData from "../models/sensorDataModel.js";
import Sensor from "../models/sensorModel.js";
import asyncHandler from "express-async-handler"

const setSensorData = asyncHandler(async (req, res) => {

    const {sensorNo, temperature, humidity, voltage} = req.body

    if(!sensorNo || !temperature || !humidity || !voltage){
        res.status(401)
        throw new Error("Please fill all field")
    }

    const sensor = await Sensor.findOne({sensorNo})

    if(!sensor){
        res.status(401)
        throw new Error("Please register this sensor first")
    }

    const sensorExists = await SensorData.findOne({sensorNo})

    if(sensorExists){
        
        const sensorData = await SensorData.findOneAndUpdate({sensorNo}, {temperature, humidity, voltage})

        if(sensorData){
            res.status(200).json({
                sensorNo: sensorData.sensorNo,
                temperature: sensorData.temperature,
                humidity: sensorData.humidity,
                voltage: sensorData.voltage
            })
        }
        else {
            res.status(401)
            throw new Error("Send the data again")
        }
    }
    else {
        const sensorData = await SensorData.create({
            sensorNo,
            temperature,
            humidity,
            voltage
        })
    
        if(sensorData){
            res.status(200).json({
                sensorNo: sensorData.sensorNo,
                temperature: sensorData.temperature,
                humidity: sensorData.humidity,
                voltage: sensorData.voltage
            })
        }
        else {
            res.status(401)
            throw new Error("Send the data again")
        }
    }
    
})

const getSensorData = asyncHandler(async (req, res) => {

    const sensorData = await SensorData.find({})

    if(sensorData){

        res.status(201).json(sensorData)
    }
    else {
        res.status(401)
        throw new Error("Sensor Data not found")
    }
})

export { setSensorData, getSensorData}