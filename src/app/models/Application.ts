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
    }
  }