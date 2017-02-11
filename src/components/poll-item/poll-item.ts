import { Component } from '@angular/core';
import { Input } from '@angular/core';
/*
  Generated class for the PollItem component.
*/
@Component({
  selector: 'poll-item',
  templateUrl: 'poll-item.html'
})

export class PollItemComponent {

  public userVoted: boolean = false;
  public userChoice: any;
  public totalVotes: Number = 0;
  choices: any;
  _poll: any;

  @Input('poll') public poll: any;


  constructor() {

  }

  showVotedChoices() {
    // console.log(this);
    var poll = this._poll;
    console.log(poll)
    var totalVotes;
    for(var c in this.choices) {
      var choice = this.choices[c];

      for(var v in choice.votes) {
        var vote = choice.votes[v];
        totalVotes++;
        this.totalVotes = totalVotes;
        if(vote.ip) {
          this.userVoted = true;
          this.userChoice = { _id: choice._id, text: choice.text };
        }
      }
    }
  }
}
