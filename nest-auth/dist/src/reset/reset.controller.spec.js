"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const reset_controller_1 = require("./reset.controller");
describe('ResetController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [reset_controller_1.ResetController],
        }).compile();
        controller = module.get(reset_controller_1.ResetController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=reset.controller.spec.js.map