"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerCreateResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class PlayerCreateResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'b7c41d45-082b-4312-8ef7-3ef13468edd6', description: 'External UUID' }),
    __metadata("design:type", String)
], PlayerCreateResponseDto.prototype, "external_uuid", void 0);
exports.PlayerCreateResponseDto = PlayerCreateResponseDto;
//# sourceMappingURL=player.create.response.dto.js.map