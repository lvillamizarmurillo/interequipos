var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Type } from 'class-transformer';
import { IsDefined, IsEmail } from 'class-validator';
export class StorageLogin {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}
__decorate([
    Expose({ name: 'email' }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro email es obligatorio" }; } }),
    IsEmail({}, { message: () => { throw { status: 422, message: `El email no cumple con el formato` }; } }),
    __metadata("design:type", String)
], StorageLogin.prototype, "email", void 0);
__decorate([
    Expose({ name: 'password' }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro password es obligatorio` }; } }),
    Type(() => String),
    __metadata("design:type", String)
], StorageLogin.prototype, "password", void 0);
