export default class Person{
    private _id:string;
    private _pName:string;
    private _age:number;
    private _sex:boolean;
    private _city:string ;
    private _picture:string

    constructor(id:string,pName:string,age:number,sex:boolean,city:string="Jerusalem",picture:string){
        this._id=id;
        this._pName=pName; 
        this._age=age;
        this._sex=sex;
        this._city=city;
        this._picture=picture;
    }

    public get Id(){
        return this._id;
    }
    public set Id(id:string){
        if(id.length == 8 ||id.length == 9 ){
            this._id=id;
        }
        else throw new Error("invalid id");
    }

    public get PName(){
        return this._pName;
    }
    public set PName(pName:string){
        this._pName=pName
    }

    public get Age(){
        return this._age;
    }
    public set Age(age:number){
       if(age>=0 && age<120){
        this._age=age
       }
       else throw new Error("invalid age");
    }

    public get Sex(){
        return this._sex;
    }
    public set Sex(sex:boolean){
        this._sex=sex
    }

    public get City(){
        return this._city;
    }
    public set City(city:string){
        this._city=city
    }

    public get Picture(){
        return this._picture;
    }
    public set Picture(picture:string){
        this._picture=picture
    }

} 