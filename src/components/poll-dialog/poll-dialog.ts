import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormArray} from '@angular/forms';
import { ViewController } from 'ionic-angular';
import { BasePollStructure } from 'poll.interface';
/*
  Generated class for the PollDialog component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'poll-dialog',
  templateUrl: 'poll-dialog.html'
})
export class PollDialogComponent implements OnInit{

  public pollForm : FormGroup;

  controlsConfig : any = [
        ['question', Validators.required],
        ['opt1', Validators.required],
        ['opt2', Validators.required],
  ];


  constructor(public viewCtrl: ViewController, private _formBuilder: FormBuilder) {

    // this.poll = new FormGroup({
    //   question: new FormControl(),
    //   opt1: new FormControl(),
    //   opt2: new FormControl()
    // });
    //
    // this.poll = this._formBuilder.group({
    //   question : ['', Validators.required],
    //   opt1: [''],
    //   opt2: ['']
    // });


    // this.pollForm = this._formBuilder.array(this.controlsConfig)
  }

  ngOnInit() {
    this.pollForm = this._formBuilder.group({
      question : ['', Validators.required],
      options: this._formBuilder.array([
        this.getBaseOptions (),
        this.getBaseOptions ()
      ])
    });
  }

  getBaseOptions () {
    return this._formBuilder.group({
      img  : '',
      txt  : '',
    });
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }

  saveTb(){
    console.log(this.pollForm.value);
  }

  // save(model : BasePollStructure) {
  //   console.log(model);
  // }

  addOption() {
    console.log(this.pollForm);
    const arrayControl = <FormArray>this.pollForm.controls['options'];
          arrayControl.push(this.getBaseOptions());
  }

  removeOption(i : number) {
    console.log(this.pollForm);
    const arrayControl = <FormArray>this.pollForm.controls['options'];
    arrayControl.removeAt(i);
  }
}
