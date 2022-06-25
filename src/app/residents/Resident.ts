import Person from "../Person";

export default class Resident extends Person{
    private _address:string;
    private _startDate:number;
    private _status:string;

    constructor(id:string,pName:string,age:number,sex:boolean,city:string,picture:string,address:string,startDate:number,status:string){
        super(id,pName,age,sex,city,picture);
        this._address=address;
        this._startDate=startDate;
        this._status=status
    }

    public get Address(){
        return this._address;
    }
    public set Address (address:string){
        this._address=address;
    }

    public get StartDate(){
        return this._startDate;
    }
    public set StartDate(startDate:number){
      this._startDate=startDate
    }

    public get Status(){
        return this._status;
    }
    public set Status (status:string){
        if(status == "A" || status == "B" || status == "C" || status == "D" ){
            this._status=status;
        }
        else throw new Error("invalid status");
    }
}