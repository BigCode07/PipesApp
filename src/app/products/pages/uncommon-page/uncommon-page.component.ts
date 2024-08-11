import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  //i18n Select
  public name: string = 'Fernando';
  public gender: 'Male' | 'Female' = 'Male';
  public invitationMap = {
    Male: 'Invitarlo',
    Female: 'Invitarla',
  };

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'Female';
  }

  // i18nPrural
  public clientes: string[] = [
    'Maria',
    'Fernando',
    'Melisa',
    'Rocio',
    'Sergio',
    'Marcos',
    'Ana',
  ];
  public clientsMap = {
    '=0': 'No tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando',
    other: 'tenemos # clientes esperando',
  };

  deleteClient(): void {
    this.clientes.shift();
  }

  //KeyValue Pipe
  public person = {
    name: 'Nicolas',
    age: 26,
    address: 'Cordoba, Argentina',
  };

  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap((value) => console.log('tap', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      console.log('Tenemos data en la promesa');
      this.person.name = 'Francisco';
    }, 3500);
  });
}
