import {QLCB} from "./QLCB";
import {CongNhan} from "./CongNhan";
import {KySu} from "./KySu";
import {NhanVien} from "./NhanVien";
import {CanBo} from "./CanBo";

let qLCB = new QLCB()
let readlineSync = require('readline-sync')

function addCN() {
    console.log('---------Hiển thị form thêm mới-----------');
    let name = readlineSync.question('Enter name :  ');
    let age = +readlineSync.question('Enter age :  ');
    let gender = readlineSync.question('Enter gender :  ');
    let address = readlineSync.question('Enter address :  ');
    let rank = readlineSync.question('Enter rank :  ')
    let congNhan = new CongNhan(name, age, gender, address, rank,)
    qLCB.add(congNhan);

}
function addNV() {
    console.log('---------Hiển thị form thêm mới-----------');
    let name = readlineSync.question('Enter name :  ');
    let age = +readlineSync.question('Enter age :  ');
    let gender = readlineSync.question('Enter gender :  ');
    let address = readlineSync.question('Enter address :  ');
    let jobPosition = readlineSync.question('Enter jobPosition  :  ')
    let nhanVien = new NhanVien(name, age, gender, address, jobPosition)
    qLCB.add(nhanVien);

}
function addKS() {
    console.log('---------Hiển thị form thêm mới-----------');
    let name = readlineSync.question('Enter name :  ');
    let age = +readlineSync.question('Enter age :  ');
    let gender = readlineSync.question('Enter gender :  ');
    let address = readlineSync.question('Enter address :  ');
    let major = readlineSync.question('Enter major  :  ')
    let kySu = new KySu(name, age, gender, address, major)
    qLCB.add(kySu)
}

function display() {
    console.log('------Hiển thị sản phẩm----------')
    console.log(qLCB.display());
}

function find() {
    let name = readlineSync.question('Enter name :  ');
    let a = qLCB.find(name)
    if (a.length === 0) {
        console.log("Can't find")

    } else {
        a.forEach(obj => console.log(obj))
    }
}

function main() {
    let menu = `---------Menu chính-----------
    1.Thêm danh sách
    2.Hiển thị danh sách
    3.Tìm cán bộ
    0.Thoát chương trình`
    let menu2 = `---------Menu 2-----------
    1.Thêm CN
    2.Thêm NV
    3.Thêm KS
    0.Thoát chương trình`
    let choice = -1;
    let choice2 = -1
    do {
        console.log(menu)
        choice = +readlineSync.question('Enter Choice : ');
        switch (choice) {
            case 1:
                    console.log(menu2)
                    choice2 = +readlineSync.question('Enter Choice2 : ');
                    switch (choice2) {
                        case 1:
                            addCN();
                            break
                        case 2:
                            addNV();
                            break
                        case 3:
                            addKS()
                            break
                    }
            case 2:
                display();
                break;
            case 3:
                find();
                break;
        }
    } while (choice !== 0);
}

main();
