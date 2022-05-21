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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var pupil_service_1 = __importDefault(require("../services/pupil.service"));
var pupils_utils_1 = require("../utils/pupils.utils");
var router = (0, express_1.Router)();
router.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var pupils, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, pupil_service_1["default"].findAll()];
            case 1:
                pupils = _a.sent();
                res.json({
                    message: "Pupils has sent",
                    pupils: pupils
                });
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                console.error(err_1);
                res.status(500).send((0, pupils_utils_1.handlerError)(err_1));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.post('/', function (req, res) {
    var pupil = {
        id: 0,
        group: req.body.group,
        name: req.body.name,
        photo: req.body.photo,
        surname: req.body.surname
    };
    pupil_service_1["default"].create(pupil)
        .then(function (pupil) { return res.send({ message: 'Pupil created!', pupil: pupil }); })["catch"](function (err) { return res.status(500).send((0, pupils_utils_1.handlerError)(err)); });
});
router["delete"]('/:id', function (req, res) {
    pupil_service_1["default"].remove(+req.params.id)
        .then(function (pupil) { return res.send({ message: 'Pupil deleted!', pupil: pupil }); })["catch"](function (err) { return res.status(500).send((0, pupils_utils_1.handlerError)(err)); });
});
router["delete"]('/', function (req, res) {
    pupil_service_1["default"].removeAll()
        .then(function (pupil) { return res.send({ message: 'All deleted!', pupil: pupil }); })["catch"](function (err) { return res.status(500).send((0, pupils_utils_1.handlerError)(err)); });
});
router.put('/:id', function (req, res) {
    pupil_service_1["default"].update(+req.params.id, req.body)
        .then(function (pupil) { return res.send({ message: 'Updated!', pupil: pupil }); })["catch"](function (err) { return res.status(500).send((0, pupils_utils_1.handlerError)(err)); });
});
exports["default"] = router;
//# sourceMappingURL=pupil.routes.js.map