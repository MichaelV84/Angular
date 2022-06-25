import Person from "../Person";

export default class Event {
    private _ename:string;
    private _eventNum:number;
    private _eventAddress:string;
    private _pnumber:number ;
    private _menael:Person;
    
    constructor(ename:string,eventNum:number,eventAddress:string,pnumber:number,menael:Person){
        this._ename=ename;
        this._eventNum=eventNum;
        this._eventAddress=eventAddress;
        this._pnumber=pnumber;
        this._menael=menael;
    }

    public get Ename(){
        return this._ename;
    }
    public set Ename(ename:string){
       this._ename=ename;
    }

    public get EventNum(){
        return this._eventNum;
    }
    public set EventNum(eventNum:number){
       if(eventNum>=300 && eventNum<=700){
        this._eventNum=eventNum;
       }
       else throw new Error("invalid EventNum");
    }

    public get EventAddress(){
        return this._eventAddress;
    }
    public set EventAddress(eventAddress:string){
        this._eventAddress=eventAddress;
    }

    public get Pnumber(){
        return this._pnumber;
    }
    public set Pnumber(pnumber:number){
       if(pnumber<500000){
        this._pnumber=pnumber;
       }else throw new Error("invalid Pnumber");
    }

    public get Menael(){
        return this._menael;
    }

    public set Menael(menael:Person){
        this._menael=menael;
    }

} 