import { Component } from '@angular/core';
import { Candidate } from './candidate';

const CANDIDATES: Candidate[] = [
  { id: 1, name: 'Roni Saha', voteCount: [] },
  { id: 2, name: 'Rocky Amdad', voteCount: [] },
  { id: 3, name: 'Samiul Amin', voteCount: [] },
  { id: 4, name: 'Mir Bahar', voteCount: [] },
  { id: 5, name: 'Pranab Sarker', voteCount: [] },
  { id: 6, name: 'Sahidul Hassan', voteCount: [] },
  { id: 7, name: 'Nayem Abdulla', voteCount: [] },
  { id: 8, name: 'Rakib Hassan', voteCount: [] },
  { id: 9, name: 'Shafiqul Islam', voteCount: [] },
  { id: 10, name: 'Amimul Islam', voteCount: [] }
];

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'Voting System';
  candidates = CANDIDATES;
  // selectedCandidate: Candidate;

  onSelect(candidate: Candidate): void {
    candidate.voteCount.push('vote');
    // this.selectedCandidate = candidate;
  }
}
