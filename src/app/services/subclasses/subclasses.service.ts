import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubclassesService {
  subclasses: {} = [
    {
      name: 'arcane_trickster',
      description: 'Some rogues enhance their fine-honed skills of stealth and agility with magic, learning tricks of enchantment and illusion. These rogues include pickpockets and burglars, but also pranksters, mischief-makers, and a significant number of adventurers.',
      skills: [
        {
          name: 'spellcasting',
        },
        {
          name: 'mage_hand_legerdemain'
        },
        {
          name: 'magical_ambush'
        },
        {
          name: 'versatile_trickster'
        },
        {
          name: 'spell_thief'
        }
      ],
      leveling_spell_stats: [
        {
          lvl: 1,
          cantrips_known: {
            default: 'mage_hand',
            plus: 2
          },
          spells_known: 3,
          first_lvl_slots: 2,
          second_lvl_slots: 0,
          third_lvl_slots: 0,
          fourth_lvl_slots: 0,
        },
        {
          lvl: 2,
          cantrips_known: {
            default: 'mage_hand',
            plus: 2
          },
          spells_known: 3,
          first_lvl_slots: 2,
          second_lvl_slots: 0,
          third_lvl_slots: 0,
          fourth_lvl_slots: 0,
        },
        {
          lvl: 3,
          cantrips_known: {
            default: 'mage_hand',
            plus: 2
          },
          spells_known: 3,
          first_lvl_slots: 2,
          second_lvl_slots: 0,
          third_lvl_slots: 0,
          fourth_lvl_slots: 0,
        },
        {
          lvl: 4,
          cantrips_known: {
            default: 'mage_hand',
            plus: 2
          },
          spells_known: 4,
          first_lvl_slots: 3,
          second_lvl_slots: 0,
          third_lvl_slots: 0,
          fourth_lvl_slots: 0,
        },
        {
          lvl: 5,
          cantrips_known: {
            default: 'mage_hand',
            plus: 2
          },
          spells_known: 4,
          first_lvl_slots: 3,
          second_lvl_slots: 0,
          third_lvl_slots: 0,
          fourth_lvl_slots: 0,
        },
        {
          lvl: 6,
          cantrips_known: {
            default: 'mage_hand',
            plus: 2
          },
          spells_known: 4,
          first_lvl_slots: 3,
          second_lvl_slots: 0,
          third_lvl_slots: 0,
          fourth_lvl_slots: 0,
        },
        {
          lvl: 7,
          cantrips_known: {
            default: 'mage_hand',
            plus: 2
          },
          spells_known: 5,
          first_lvl_slots: 4,
          second_lvl_slots: 2,
          third_lvl_slots: 0,
          fourth_lvl_slots: 0,
        },
        {
          lvl: 8,
          cantrips_known: {
            default: 'mage_hand',
            plus: 2
          },
          spells_known: 6,
          first_lvl_slots: 4,
          second_lvl_slots: 2,
          third_lvl_slots: 0,
          fourth_lvl_slots: 0,
        },
        {
          lvl: 9,
          cantrips_known: {
            default: 'mage_hand',
            plus: 2
          },
          spells_known: 6,
          first_lvl_slots: 4,
          second_lvl_slots: 2,
          third_lvl_slots: 0,
          fourth_lvl_slots: 0,
        },
        {
          lvl: 10,
          cantrips_known: {
            default: 'mage_hand',
            plus: 3
          },
          spells_known: 7,
          first_lvl_slots: 4,
          second_lvl_slots: 3,
          third_lvl_slots: 0,
          fourth_lvl_slots: 0,
        },
        {
          lvl: 11,
          cantrips_known: {
            default: 'mage_hand',
            plus: 3
          },
          spells_known: 8,
          first_lvl_slots: 4,
          second_lvl_slots: 3,
          third_lvl_slots: 0,
          fourth_lvl_slots: 0,
        },
        {
          lvl: 12,
          cantrips_known: {
            default: 'mage_hand',
            plus: 8
          },
          spells_known: 4,
          first_lvl_slots: 3,
          second_lvl_slots: 0,
          third_lvl_slots: 0,
          fourth_lvl_slots: 0,
        },
        {
          lvl: 13,
          cantrips_known: {
            default: 'mage_hand',
            plus: 3
          },
          spells_known: 9,
          first_lvl_slots: 4,
          second_lvl_slots: 3,
          third_lvl_slots: 2,
          fourth_lvl_slots: 0,
        },
        {
          lvl: 14,
          cantrips_known: {
            default: 'mage_hand',
            plus: 3
          },
          spells_known: 10,
          first_lvl_slots: 4,
          second_lvl_slots: 3,
          third_lvl_slots: 2,
          fourth_lvl_slots: 0,
        },
        {
          lvl: 15,
          cantrips_known: {
            default: 'mage_hand',
            plus: 3
          },
          spells_known: 10,
          first_lvl_slots: 4,
          second_lvl_slots: 3,
          third_lvl_slots: 2,
          fourth_lvl_slots: 0,
        },
        {
          lvl: 16,
          cantrips_known: {
            default: 'mage_hand',
            plus: 3
          },
          spells_known: 11,
          first_lvl_slots: 4,
          second_lvl_slots: 3,
          third_lvl_slots: 3,
          fourth_lvl_slots: 0,
        },
        {
          lvl: 17,
          cantrips_known: {
            default: 'mage_hand',
            plus: 3
          },
          spells_known: 11,
          first_lvl_slots: 4,
          second_lvl_slots: 3,
          third_lvl_slots: 3,
          fourth_lvl_slots: 0,
        },
        {
          lvl: 18,
          cantrips_known: {
            default: 'mage_hand',
            plus: 3
          },
          spells_known: 11,
          first_lvl_slots: 4,
          second_lvl_slots: 3,
          third_lvl_slots: 3,
          fourth_lvl_slots: 0,
        },
        {
          lvl: 19,
          cantrips_known: {
            default: 'mage_hand',
            plus: 3
          },
          spells_known: 12,
          first_lvl_slots: 4,
          second_lvl_slots: 3,
          third_lvl_slots: 3,
          fourth_lvl_slots: 1,
        },
        {
          lvl: 20,
          cantrips_known: {
            default: 'mage_hand',
            plus: 3
          },
          spells_known: 13,
          first_lvl_slots: 4,
          second_lvl_slots: 3,
          third_lvl_slots: 3,
          fourth_lvl_slots: 1,
        },
      ]

    }
  ]

  constructor() { }
}
