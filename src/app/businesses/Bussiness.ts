

export default class Bussiness{

    private _nameOfWork:string;
    private _bussinessNum:number;
    private _numOfWorkers:number;
    private _salary:number;

    constructor(nameOfWork:string,bussinessNum:number,numOfWorkers:number,salary:number){
        this._nameOfWork=nameOfWork;
        this._bussinessNum=bussinessNum;
        this._numOfWorkers=numOfWorkers;
        this._salary=salary;
    }

    public get NameOfWork(){
        return this._nameOfWork;
    }
    public set NameOfWork (nameOfWork:string){
        this._nameOfWork=nameOfWork;
    }

    public get BussinessNum(){
        return this._bussinessNum;
    }
    public set BussinessNum(bussinessNum:number){
        if(bussinessNum>=1000 && bussinessNum<=5000){
            this._bussinessNum=bussinessNum
        } else throw new Error("invalid BussinessNum");
    }

    public get NumOfWorkers(){
        return this._numOfWorkers;
    }
    public set NumOfWorkers (numOfWorkers:number){
        this._numOfWorkers=numOfWorkers;
    }

    public get Salary(){
        return this._salary;
    }
    public set Salary (salary:number){      
            this._salary=salary
    }
}