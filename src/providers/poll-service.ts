import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PollService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PollService {

  private API_URL = 'http://localhost:3000/api/1/polls/feeds';

  constructor(private _http: Http) {

  }


  getFeeds() {
    return this._http.get(this.API_URL).map(res => res.json());
  }

  getUserFeeds() {
    return this._http.get(this.API_URL).map(res => res.json());
  }

  private preparePollsData(polls) {
    let totalVotes = 0,
        userVoted = false,
        userChoice = {};

    for(var poll of polls) {
      for(var c in poll.choices) {
        var choice = poll.choices[c];

        for(var v in choice.votes) {
          var vote = choice.votes[v];
          totalVotes++;
          if(vote.ip) {
            userVoted = true;
            userChoice = { _id: choice._id, text: choice.text };
          }
        }
      }
    }

    return polls;
  }
}
