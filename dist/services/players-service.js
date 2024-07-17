"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayerService = void 0;
const http_helper_1 = require("../utils/http-helper");
const getPlayerService = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = null;
    let response = null;
    if (data) {
        response = yield (0, http_helper_1.ok)(data);
    }
    else {
        response = yield (0, http_helper_1.noContent)();
    }
    return response;
});
exports.getPlayerService = getPlayerService;
