import { InMemoryDbService } from 'angular-in-memory-web-api';

// mocking service that intercepts requests. For instance a request for /heroes will return the heroes object
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Memory' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];

    // AP2 custom themes
    const themes = [
      { id: 1, name: 'Theme-Forward One', custom_color_background: 'lightblue', custom_color_header: 'darkblue' },
      { id: 2, name: 'Theme-Founders', custom_color_background: 'lightgreen', custom_color_header: 'darkgreen' },
    ]
    return {heroes, themes};
  }
}