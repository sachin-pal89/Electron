import express from "express"
import { setSensorData, getSensorData} from "../controllers/sensorDataController.js"

const router = express.Router()

router.route("/")
    .post(setSensorData)

router.route("/sensorinfo")
    .get(getSensorData)

export default router