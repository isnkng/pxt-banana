
enum Beat {
    //% block=1
    Whole = 1,
    //% block="1/2"
    Half = 2,
    //% block="1/4"
    Quarter = 4,
    //% block="1/8"
    Eighth = 8,
    //% block="1/16"
    Sixteenth = 16,
    //% block="2"
    Double = 32,
    //% block="4",
    Breve = 64,
    //% block="3"
    DottedHalf = 128,
    //% block="3/2"
    DottedQuarter = 256,
    //% block="3/4"
    DottedEighth = 512,
    //% block="3/8" 
    DottedSixteenth = 1024
}

//% color=#D83B01 weight=98 icon="\uf025"
namespace beats {
    let beatsPerMinute: number = 120;
    let freqTable: number[] = [];
    let _playTone: (frequency: number, duration: number) => void;
    const MICROBIT_MELODY_ID = 2000;

    //% blockId=beats_TrebleClef block="ト音記号"
    export function TrebleClef(handler: Action): void {
    }

    //% blockId=beats_BassClef block="ヘ音記号"
    export function BassClef(): void {
    }

    //% blockId=musicalScore_cccc block="cccc"
    export function cccc(): string {
        return "cccc"
    }

    //     //% blockId=musicalScore_on_event block="musical event"
    // //% help=music/on-event
    // export function onEvent(handler: Action): void {
    // }

    function init() {
        if (beatsPerMinute <= 0) beatsPerMinute = 120;
        if (freqTable.length == 0) freqTable = [31, 33, 35, 37, 39, 41, 44, 46, 49, 52, 55, 58, 62, 65, 69, 73, 78, 82, 87, 92, 98, 104, 110, 117, 123, 131, 139, 147, 156, 165, 175, 185, 196, 208, 220, 233, 247, 262, 277, 294, 311, 330, 349, 370, 392, 415, 440, 466, 494, 523, 554, 587, 622, 659, 698, 740, 784, 831, 880, 932, 988, 1047, 1109, 1175, 1245, 1319, 1397, 1480, 1568, 1661, 1760, 1865, 1976, 2093, 2217, 2349, 2489, 2637, 2794, 2960, 3136, 3322, 3520, 3729, 3951, 4186]
    }

    /**
     * Returns the duration of a beat in milli-seconds
     */
    //% help=music/beat weight=49
    //% blockId=beats block="%fraction|beat"
    export function notesbeat(fraction?: Beat): number {
        init();
        if (fraction == null) fraction = Beat.Whole;
        let beat = 60000 / beatsPerMinute;
        switch (fraction) {
            case Beat.Half: return beat / 2;
            case Beat.Quarter: return beat / 4;
            case Beat.Eighth: return beat / 8;
            case Beat.Sixteenth: return beat / 16;
            case Beat.Double: return beat * 2;
            case Beat.Breve: return beat * 4;
            case Beat.DottedHalf: return beat * 3;
            case Beat.DottedQuarter: return beat * 3/2;
            case Beat.DottedEighth: return beat * 3/4;
            case Beat.DottedSixteenth: return beat * 3/8;
            default: return beat;
        }
    }

}
