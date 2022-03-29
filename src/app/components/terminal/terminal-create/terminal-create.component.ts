import { Component } from '@angular/core';

import { TerminalConfigurationFormGroup, ParkingPlacesFormGroup } from 'src/app/services/api/parking-system/models/terminal-form.model';
import { Terminal } from 'src/app/services/api/parking-system/models/terminals.model';
import { TerminalsService } from 'src/app/services/api/parking-system/services/terminals.service';

@Component({
  selector: 'terminal-create',
  templateUrl: './terminal-create.component.html',
  styleUrls: ['./terminal-create.component.scss']
})
export class TerminalCreateComponent{

  public terminal: Terminal = new Terminal();

  public terminalConfigurationForm: TerminalConfigurationFormGroup = new TerminalConfigurationFormGroup();
  public parkingPlacesForm: ParkingPlacesFormGroup = new ParkingPlacesFormGroup();

  constructor(private terminalsService: TerminalsService) {
  }

  addParkingPlace() {
    if (this.parkingPlacesForm.valid) {
      this.terminal.parkingPlaces.push(this.parkingPlacesForm.value)
      this.parkingPlacesForm.reset();
    }
  }

  submit() {
    if (this.terminalConfigurationForm.valid) {
      this.mapFormsToModel();
      this.terminalsService.postTerminal(this.terminal)
                           .subscribe(res => console.log(res));
    }
  }


  private mapFormsToModel() {
      this.terminal.name = this.terminalConfigurationForm.value.name;
      this.terminal.height = this.terminalConfigurationForm.value.height;
      this.terminal.width = this.terminalConfigurationForm.value.width;
  }
}
