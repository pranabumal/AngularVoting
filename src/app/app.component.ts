import { Component } from '@angular/core';
import { Candidate } from './candidate';

const CANDIDATES: Candidate[] = [
  { id: 1, name: 'Roni Saha', voteCount: [],win:false },
  { id: 2, name: 'Rocky Amdad', voteCount: [],win:false },
  { id: 3, name: 'Samiul Amin', voteCount: [],win:false },
  { id: 4, name: 'Mir Bahar', voteCount: [],win:false },
  { id: 5, name: 'Pranab Sarker', voteCount: [],win:false },
  { id: 6, name: 'Sahidul Hassan', voteCount: [],win:false },
  { id: 7, name: 'Nayem Abdulla', voteCount: [],win:false },
  { id: 8, name: 'Rakib Hassan', voteCount: [],win:false },
  { id: 9, name: 'Shafiqul Islam', voteCount: [],win:false },
  { id: 10, name: 'Amimul Islam', voteCount: [],win:false }
];


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  voteState = {
    minVote: 0,
    maxVote: 0,
  };

  title = 'Voting System';
  candidates = CANDIDATES;
  // selectedCandidate: Candidate;

  onSelect(candidate: Candidate): void {

    let allCount = [];
    for (let i=0;i<this.candidates.length;i++) {
      allCount.push(this.candidates[i].voteCount.length);
    }
    candidate.voteCount.push('vote');
    this.voteState.minVote = Math.min(...allCount);
    this.voteState.maxVote = Math.max(...allCount);
    for (let i=0;i<this.candidates.length;i++) {
      if(candidate.voteCount.length > this.voteState.maxVote){
        candidate.win=true;
        this.candidates[i].win=false;
      }
      if(candidate.voteCount.length == this.voteState.maxVote && this.candidates[i].voteCount.length == this.voteState.maxVote){
        candidate.win=true;
        this.candidates[i].win=true;
      }
      if(candidate.voteCount.length <= this.voteState.minVote){
      candidate.win=false;
      }
    }
    
    

    


    // for (let i=0;i<this.candidates.length;i++) {
      
      
    // }
    
    // this.selectedCandidate = candidate;
  }
}
