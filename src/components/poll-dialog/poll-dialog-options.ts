import { Component , Input } from '@angular/core';
import { FormGroup } from '@angular/forms'
//http://stackoverflow.com/questions/37178192/angular2-what-is-the-meanings-of-module-id-in-component
@Component({
  //  moduleId: module.id
    selector: 'poll-options',
    templateUrl: 'poll-options.html'

})

export class PollDialogOptions {

    @Input('options') public optionsForm : FormGroup;

    @Input('index') public index: number;
}