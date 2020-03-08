export class TLE{
    rawTle: string;
    // row 1
    raw1: string;
    catNumber: number;
    class: string;
    designator: string;
    epochY: number;
    epoch: number;
    fdmm: number;
    sdmm: string;
    drag: string;
    ephemeris: number;
    elementSet: number;
    check1: number;
    // row 2
    raw2: string;
    incl: number;
    raan: number;
    ecce: number;
    aop: number;
    ma: number;
    mm: number;
    rev: number;
    check2: number;

    constructor(tle: string){
        this.rawTle = tle;
        let split = tle.split(/\r\n|\n|\r/);
        this.raw1 = split[0];
        this.raw2 = split[1];

        // row 1
        this.catNumber = +this.raw1.substring(2, 7);
        this.class = this.raw1.substring(7,8);
        this.designator = this.raw1.substring(9, 17);
        this.epochY = +this.raw1.substring(18,20);
        this.epoch = +this.raw1.substring(20,32);
        this.fdmm = +this.raw1.substring(33,43);
        this.sdmm = this.raw1.substring(44,52);
        this.drag = this.raw1.substring(53,61);
        this.ephemeris = +this.raw1.substring(62,63);
        this.elementSet = +this.raw1.substring(64,68);
        this.check1 = +this.raw1.substring(68,69);

        // row 2
        this.incl = +this.raw2.substring(8,16);
        this.raan = +this.raw2.substring(17,25);
        this.ecce = +this.raw2.substring(26,33);
        this.aop = +this.raw2.substring(34,42);
        this.ma = +this.raw2.substring(43,51);
        this.mm = +this.raw2.substring(52,63);
        this.rev = +this.raw2.substring(63,68);
        this.check2 = +this.raw2.substring(68,69);


    }
}