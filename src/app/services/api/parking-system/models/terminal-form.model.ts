import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { Terminal } from "./terminals.model";

export class TerminalFormConrol extends FormControl {

  label: string;
  modelProperty: string;

  constructor(label:string, modelProperty:string, value:string, validator: any) {
    super(value, validator);
    this.label = label;
    this.modelProperty = modelProperty;
  }
}

export class TerminalConfigurationFormGroup extends FormGroup {
  constructor() {
    super({
      name: new TerminalFormConrol("Name", "name", "", Validators.required),
      width: new TerminalFormConrol("Width", "width", "", Validators.required),
      height: new TerminalFormConrol("Height", "height", "", Validators.required)
    })
  }

  get terminalSizeControls(): TerminalFormConrol[] {
    return Object.keys(this.controls).map(c => this.controls[c] as TerminalFormConrol);
  }
}

export class ParkingPlacesFormGroup extends FormGroup {

  constructor() {
    super({
      width: new TerminalFormConrol("Width", "width", "", Validators.required),
      height: new TerminalFormConrol("Height", "height", "", Validators.required)
    })
  }


  get ParkingPlacesControls(): TerminalFormConrol[] {
    return Object.keys(this.controls).map(c => this.controls[c] as TerminalFormConrol);
  }
}

