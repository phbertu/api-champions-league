"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const players_controller_1 = require("../controllers/players-controller");
const router = (0, express_1.Router)();
router.get("/players", players_controller_1.getPlayer);
exports.default = router;
