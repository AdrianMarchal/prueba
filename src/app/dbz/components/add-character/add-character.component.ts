import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();
  public character: Character = {
    name: 'Felipe',
    power: 345
  }


  emitCharacter():void {
    console.log(this.character)
    if(this.character.name.length === 0) return

    this.onNewCharacter.emit({...this.character})

    this.character.name = ""
    this.character.power = 0
    

  }
}
