import { pool } from "../db.js";

export const renderConsultas = async (req, res) => {
    const [rows] = await pool.query("SELECT * FROM consulta");
    res.render("consultas", { consultas: rows });
};

export const createConsultas = async (req, res) => {
    const newConsulta = req.body;
    await pool.query("INSERT INTO consulta set ?", [newConsulta]);
    res.redirect("/");
};

export const editConsulta = async (req, res) => {
    const { id } = req.params;
    const [result] = await pool.query("SELECT * FROM consulta WHERE id = ?", [
        id,
    ]);
    res.render("consulta_edit", { consulta: result[0] });
};

export const updateConsulta = async (req, res) => {
    const { id } = req.params;
    const newConsulta = req.body;
    await pool.query("UPDATE consulta set ? WHERE id = ?", [newConsulta, id]);
    res.redirect("/");
};

export const deleteConsulta = async (req, res) => {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM consulta WHERE id = ?", [id]);
    if (result.affectedRows === 1) {
        res.json({ message: "Consulta Eliminada" });
    }
    res.redirect("/");
};
