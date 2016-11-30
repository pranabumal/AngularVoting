import { Component } from '@angular/core';
import { Candidate } from './candidate';

const CANDIDATES: Candidate[] = [
  { id: 1, name: 'Roni Saha', voteCount: [],win:false },
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


      addCandidate(name,id){
        this.candidates.push( { id: id, name: name, voteCount: [],win:false });
      }

      onSelect(candidate: Candidate): void {

        let allCount = [];
        candidate.voteCount.push('vote');

        for (let i=0;i<this.candidates.length;i++) {
              allCount.push(this.candidates[i].voteCount.length);
          }
        this.voteState.minVote = Math.min(...allCount);
        this.voteState.maxVote = Math.max(...allCount);

            for (let i=0;i<this.candidates.length;i++) {

                if(this.candidates[i].voteCount.length == this.voteState.minVote){
                    this.candidates[i].win=false;
                }
                if(this.candidates[i].voteCount.length == this.voteState.maxVote){
                    this.candidates[i].win=true;
                }
                if(this.candidates[i].voteCount.length < this.voteState.maxVote && this.candidates[i].voteCount.length >this.voteState.minVote){
                    this.candidates[i].win=null;
                }


            }
      }
}
