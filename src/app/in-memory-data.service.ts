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
    //
    //  At the moment I am structuring the custom color elements as such:
    //    {name: 'val', value: '#FFF', tag: 'tagName', style: 'background'}
    //  By default the defined style.color is applied to elements with the class of <name>

    //  If you wish to instead override a style other than color (for instance background) add optional element: 
    //  {name: 'val', value: '#FFF', style: 'background'}
    
    //  If you wish to apply customization to ALL elements of a given tab, in this example a head 1 tag:
    //  {name: 'val', value: '#FFF', tag: 'h1'}
    //
    //
    const themes = [
      { id: 1, 
        name: 'Theme-Forward One', 
        customs:[
          { name: 'custom_color_background', value: 'lightblue', tag: 'body', style:'background'},
          { name: 'customColorHeader', value: 'darkblue', style:'background'},
          { name: 'customColorFooter', value: 'darkblue', style:'background'},
          { name: 'customColorSidebar', value: 'blue', style:'background'},
          { name: 'logo', value: '/assets/logo-1.jpg', image: 'logo'},
        ]        
      },
      { id: 2, 
        name: 'Theme-Founders', 
        customs:[
          { name: 'custom_color_background', value: 'lightgreen', tag: 'body', style:'background'},
          { name: 'customColorHeader', value: 'darkgreen', style:'background'},
          { name: 'customColorFooter', value: 'darkgreen', style:'background'},
          { name: 'customColorSidebar', value: 'green', style:'background'},
          { name: 'customColorSidebar', value: 'lightgreen'},
          { name: 'logo', value: '/assets/logo-2113.png', image: 'logo'},      
        ]
      },
    ]
    
    const navlinks = [
      { id: 1, name: 'Account Summary' },
      { id: 2, name: 'Balance Consolidation' },
      { id: 2, name: 'Statements' },
    ]
    return {heroes, themes, navlinks};
  }
}