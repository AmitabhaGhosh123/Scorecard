import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scorecard page';
  currentQuantScore : any;
  currentVerbalScore : any;
  targetQuantScore : any;
  targetVerbalScore : any;
  totalCurrentScore : number;
  totalTargetScore : number;
  
  // function to compute score 
  public computeScore() {

    this.currentQuantScore = (<HTMLInputElement>document.getElementById('quant1')).value;
    this.currentVerbalScore = (<HTMLInputElement>document.getElementById('quant3')).value;
    this.targetQuantScore = (<HTMLInputElement>document.getElementById('quant2')).value;
    this.targetVerbalScore = (<HTMLInputElement>document.getElementById('quant4')).value;
    this.currentQuantScore = parseInt(this.currentQuantScore);
    this.currentVerbalScore = parseInt(this.currentVerbalScore);
    this.targetQuantScore = parseInt(this.targetQuantScore);
    this.targetVerbalScore = parseInt(this.targetVerbalScore);
     if (this.currentQuantScore < 1 || this.currentQuantScore > 60) 
     {
      alert("Please enter a number between 1 and 60");
     }

     else if (this.targetQuantScore < 1 || this.targetQuantScore > 60)
     {
       alert("Please enter a number between 1 and 60");
     }

     else if(this.currentVerbalScore < 1 || this.currentVerbalScore > 60)
     {
       alert("Please enter a number between 1 and 60");
     }

     else if(this.targetVerbalScore < 1 || this.targetVerbalScore > 60)
     {
       alert("Please enter a number between 1 and 60");
     }

     if(this.currentQuantScore !==null && this.targetQuantScore !==null && this.currentVerbalScore !==null && this.targetVerbalScore !==null)
      {

        this.totalCurrentScore = 200 + (this.currentQuantScore + this.currentVerbalScore) * 5;
        this.totalTargetScore = 200 + (this.targetQuantScore + this.targetVerbalScore) * 5;

      }   
      
      this.getScoreGraphs(this.totalCurrentScore,this.totalTargetScore) 

    }


  // function for score graphs 
  public getScoreGraphs(totalCurrentScore:number,totalTargetScore:number) {
    
    var element = document.getElementById('totalScoreBar');
    var width = totalCurrentScore;
    console.log(width);
    if(totalCurrentScore !== 800)
    {
      element.style.width = width + 'px';
    }
  }

}
  
