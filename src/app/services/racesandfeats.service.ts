import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RacesandfeatsService {
  common_races: {} = [
    {
      race: 'half_elf',
      feats: [
        {
          name: 'ability_score_increase', 
          description: 'Your Charisma score increases by 2, and two other ability scores of your choice each increase by 1.'
        },
        {
          name: 'age', 
          description: 'Half-elves age at much the same rate as humans, reaching adulthood at the age of 20. They live much longer than humans, however, often exceeding 180 years.'
        },
        {
          name: 'size',
          description: 'Half-elves are more or less the same size as humans, ranging from 5 to 6 feet tall. Your size is Medium.'
        },
        {
          name: 'speed',
          description: 'Your base walking speed is 30 feet.'
        },
        {
          name: 'darkvision',
          description: 'Thanks to your elven heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can\'t discern color in darkness, only shades of gray.'
        },
        {
          name: 'fey_ancestry',
          description: 'You have advantage on saving throws against being charmed, and magic can\'t put you to sleep.'
        },
        {
          name: 'skill_versatility',
          description: 'You gain proficiency in two skills of your choice.'
        },
        {
          name: 'language',
          description: 'You can read, speak, and write Common, Elven, and one language of your choice.'
        },
      ]
    }
  ]
  constructor() { }
}
