"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const excel = require("ts-xlsx");
class ExcelUtils {
    static ReadDataFromExcel(filePath) {
        let file = excel.readFile(filePath);
        let worksheet = file.Sheets["Sheet1"];
        return excel.utils.sheet_to_json(worksheet)[0];
    }
}
exports.ExcelUtils = ExcelUtils;
//# sourceMappingURL=ExcelUtils.js.map