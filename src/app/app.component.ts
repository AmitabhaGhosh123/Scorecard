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
  showGraphs : boolean;
  difference : number;
  difference1: number;
  difference2: number;
  constructor() {}
  
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
    if(isNaN(this.currentVerbalScore) || isNaN(this.currentQuantScore) || isNaN(this.targetQuantScore) || isNaN(this.targetVerbalScore))
    {
      alert("hh");
    }
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
       this.getScoreGraphs() ;

    }

    

  // function for score graphs 
  public getScoreGraphs() {

    this.showGraphs = true;
    // var element = document.getElementById('totalScoreBar');
    var element1 = document.getElementById('targetScoreBar');
    var element2 = document.getElementById('currentQuantScoreBar');
    var element3 = document.getElementById('targetQuantScoreBar');
    var element4 = document.getElementById('currentVerbalScoreBar');
    var element5 = document.getElementById('targetVerbalScoreBar');
    // var marker = document.getElementById('marker');
    // var marker1 = document.getElementById('marker1');
    // var marker2 = document.getElementById('marker2');
    // var marker3 = document.getElementById('marker3');
    // var marker4 = document.getElementById('marker4');
    // var marker5 = document.getElementById('marker5');
    // var width = this.totalCurrentScore;
    var width1 = this.totalTargetScore;
    var width2 = this.currentQuantScore;
    var width3 = this.targetQuantScore;
    var width4 = this.currentVerbalScore;
    var width5 = this.targetVerbalScore;
    // element.style.width = width + 'px';
    element1.style.width = width1 + 'px';
    element2.style.width = width2 + 'px';
    element3.style.width = width3 + 'px';
    element4.style.width = width4 + 'px';
    element5.style.width = width5 + 'px';
    // marker.style.left = width + 'px';
    // marker2.style.left = (width2+10) + 'px';
    // marker4.style.left = (width4+10) + 'px';
    // if((this.totalTargetScore == this.totalCurrentScore) || (this.totalTargetScore > this.totalCurrentScore) || (this.totalTargetScore < this.totalCurrentScore))
    // {
    //   marker1.style.left = width1 + 'px';
    // }

    // if((this.currentQuantScore == this.targetQuantScore) || (this.currentQuantScore > this.targetQuantScore) || (this.currentQuantScore < this.targetQuantScore))
    // {
    //   marker3.style.left = (width3+20) + 'px';
    // }

    // if((this.currentVerbalScore == this.targetVerbalScore) || (this.currentVerbalScore > this.targetVerbalScore) || (this.currentVerbalScore < this.targetVerbalScore))
    // {
    //   marker5.style.left = (width5+15) + 'px';
    // }

    if(this.totalCurrentScore > this.totalTargetScore)
    {
       this.difference = (this.totalCurrentScore - this.totalTargetScore);
    }

    if(this.totalCurrentScore < this.totalTargetScore)
    {
      this.difference = (this.totalTargetScore - this.totalCurrentScore);
    }

    if(this.currentQuantScore > this.targetQuantScore)
    {
      this.difference1 = (this.currentQuantScore - this.targetQuantScore);
    }

    if(this.currentQuantScore < this.targetQuantScore)
    {
      this.difference1 = (this.targetQuantScore - this.currentQuantScore);
    }

    if(this.currentVerbalScore > this.targetVerbalScore)
    {
      this.difference2 = (this.currentVerbalScore - this.targetVerbalScore);
    }

    if(this.currentVerbalScore < this.targetVerbalScore)
    {
      this.difference2 = (this.targetVerbalScore - this.currentVerbalScore);
    }
    

  }

}
  
