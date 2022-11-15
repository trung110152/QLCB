import {CanBo} from "./CanBo";
import {CongNhan} from "./CongNhan";
import {KySu} from "./KySu";
import {NhanVien} from "./NhanVien";

    export class QLCB {
    public list: CanBo[] = [];

    add(obj: CanBo): void {
        this.list.push(obj)
    }

    find(name: string): CanBo[] {
       return this.list.filter(obj => obj.name ===name)
    }

    display(): CanBo[] {
        return this.list;
    }
}