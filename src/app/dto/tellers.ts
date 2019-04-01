export class Tellers {
   
    userName:string;
    brancName:string;
    language:string;
    email:string;
    contactNo:string;
    password:string;
    address:string;
    date:Date;


    public  setUserName(userName:string):void{
        this.userName=userName;
    }
    public setBrancName(brancName:string):void{
        this.brancName=brancName;
    }
    public  setLanguage(language:string):void{
        this.language=language;
    }
    public  setEmail(email:string):void{
        this.email=email;
    }
    public setCotactNo(contactNo:string):void{
        this.contactNo=contactNo;
    }
    public  setPassword(password:string):void{
        this.password=password;
    }
    public  setAddress(address:string):void{
        this.address=address;
    }



    
}
