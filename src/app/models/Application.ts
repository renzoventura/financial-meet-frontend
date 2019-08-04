export class Application {
    id: number;
    title: string; 
    description: string;
    owner: Object;
    agent: Object;
    internal: Object;
    type: string;
    subType: string;
    status: string;
    dateCreated: Date;
    //fake
    annualIncome: String;
    overtimeBonus: String;
    rentalIncome: String;
    businessIncome: String;
    otherIncome: String;
    expectedLoan: String;
    loan: String;
    otherInformation: String;
    
    constructor(response: any) {
      this.id = response.id ;
      this.title = response.title; 
      this.description = response.description ;
      this.owner = response.owner; 
      this.agent = response.agent ;
      this.internal = response.internal; 
      this.type = response.type ;
      this.subType = response.subType ;
      this.status = response.status
      this.dateCreated = response.dateCreated;


      this.annualIncome = response.annualIncome;
      this.overtimeBonus = response.overtimeBonus;
      this.rentalIncome = response.rentalIncome;
      this.businessIncome = response.businessIncome;
      this.otherIncome = response.otherIncome;
      this.expectedLoan = response.expectedLoan;
      this.loan = response.loan;
      this.otherInformation = response.otherInformation;
    }
  }