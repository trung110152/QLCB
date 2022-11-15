import {CanBo} from "./CanBo";
export class NhanVien extends CanBo{
    private _jobPosition!: string;//Cong viec

    constructor(name: string, age: number, gender: string, address: string, jobPosition: string) {
        super(name, age, gender, address);
        this._jobPosition = jobPosition;
    }

    get jobPosition(): string {
        return this._jobPosition;
    }

    set jobPosition(value: string) {
        this._jobPosition = value;
    }
}