import { Pipe, PipeTransform } from '@angular/core';

import { Person } from '../types/person';

@Pipe({
  // Perhatikan name ini!
  // Nilai dari name inilah yang akan kita declare di dalam component template.
  name: 'personPipe'
})
export class PersonPipe implements PipeTransform {

  transform(person: Person, ...args: unknown[]): string | unknown {
    // saya pakai ini hanya agar tidak kepanjangan ya...
    const result = [
      `Hi, everyone! My name's ${person.name},`,
      `and I'm ${person.age === 1 ? person.age + ' year' : person.age + ' years'} old.`,
      `I work as ${person.role}.`
    ]
    return result.join('\n');
  }

}
