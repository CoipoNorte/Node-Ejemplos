import { Router } from "express";
import {
    createConsultas,
    deleteConsulta,
    editConsulta,
    renderConsultas,
    updateConsulta,
} from "../controllers/consultaController.js";
const router = Router();

router.get("/", renderConsultas);
router.post("/add", createConsultas);
router.get("/update/:id", editConsulta);
router.post("/update/:id", updateConsulta);
router.get("/delete/:id", deleteConsulta);

export default router;
