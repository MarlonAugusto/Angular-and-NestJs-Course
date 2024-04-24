"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const reset_service_1 = require("./reset.service");
describe('ResetService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [reset_service_1.ResetService],
        }).compile();
        service = module.get(reset_service_1.ResetService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=reset.service.spec.js.map