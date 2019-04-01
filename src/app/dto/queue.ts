export class Queue {

    ticketno:string;
    counterNo:string;
    language:string;
    task:string;
    date:string;
    status:string;
    

    public  setTicketNo(ticketNo:string):void{
        this.ticketno=ticketNo;
    }
    public setCounterNo(counterNo:string):void{
        this.counterNo=counterNo;
    }
    public  setLanguage(language:string):void{
        this.language=language;
    }
    public  setTask(task:string):void{
        this.task=task;
    }
    public setDate(date:string):void{
        this.date=date;
    }
    public  setStatus(status:string):void{
        this.status=status;
    }
}

