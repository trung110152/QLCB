import {CanBo} from "./CanBo";
export class KySu extends CanBo{
    private _majors!: string;//Nganh dao tao

    constructor(name: string, age: number, gender: string, address: string, majors: string) {
        super(name, age, gender, address);
        this._majors = majors;
    }

    get majors(): string {
        return this._majors;
    }

    set majors(value: string) {
        this._majors = value;
    }
}