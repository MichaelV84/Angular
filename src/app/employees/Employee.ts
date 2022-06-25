import Person from "../Person";

export default class Employee extends Person{
    private _workName:string;
    private _numHoursPerMounth:number;
    private _salaryPerHour:number;

    constructor(id:string,pName:string,age:number,sex:boolean,city:string="Jerusalem",picture:string,workName:string,numHoursPerMounth:number,salaryPerHour:number){
        super(id,pName,age,sex,city,picture);
        this._workName=workName;
        this._numHoursPerMounth=numHoursPerMounth;
        this._salaryPerHour=salaryPerHour;
    }

    public get WorkName(){
        return this._workName;
    }
    public set WorkName(workName:string){
        this._workName=workName
    }

    public get NumHoursPerMounth(){
        return this._numHoursPerMounth;
    }
    public set NumHoursPerMounth(numHoursPerMounth:number){
      this._numHoursPerMounth=numHoursPerMounth
    }

    public get SalaryPerHour(){
        return this._salaryPerHour;
    }
    public set SalaryPerHour(salaryPerHour:number){
      this._salaryPerHour=salaryPerHour
    }
}