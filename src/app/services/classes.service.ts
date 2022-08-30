import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {
  classes: {} = [
    {
      class: 'rogue',
      description: 'Rogues rely on skill, stealth, and their foes\' vulnerabilities to get the upper hand in any situation. They have a knack for finding the solution to just about any problem, demonstrating a resourcefulness and versatility that is the cornerstone of any successful adventuring party.',
      subclasses: [
        'arcane_trickster',
        'assassin',
        'inquisitive',
        'mastermind',
        'phantom',
        'scout',
        'soulknife',
        'swashbuckler',
        'thief',
      ]
    },
  ]
  constructor() { }
}
