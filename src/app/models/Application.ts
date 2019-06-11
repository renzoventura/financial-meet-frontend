export class Application {
    id: number;
    title: string; 

    constructor(userResponse: any) {
      this.id = userResponse.id ;
      this.title = userResponse.title; 
  
    }
  }