import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { BehaviorSubject, Observable, ReplaySubject, Subject, map } from 'rxjs';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


//Promise demo

// const p = new Promise(resolve => {
//   resolve(100);
// });

// p.then(console.log);

//Observable demo

// const o$ = new Observable<number>(obs => {
//   obs.next(1000);
//   obs.next(2000);
//   obs.next(3000);

//   obs.error(new Error('error here'));

//   return () => {
//     //cleanup
//   }

// });

// o$.pipe(map((num: number) => num + 1)).subscribe({
//   next:console.log,
//   error: (err) => console.error(`Error ${err}`),
//   complete: () => console.log('Observable completed')
// })



// function interval(delay: number, count?: number) {

//   let counter = 0;

//   return new Observable((obs) => {

//     if(counter === count){
//       obs.complete();
//       return;
//     }

//     const i = setInterval(() => {
//       obs.next(counter++)
//     }, delay);

//     return () => {
//       clearInterval(i);
//     }
//   })
// }

// const subscribtion = interval(1000, 8).subscribe({
//   next: console.log,
//   error: (err) => console.error(`Error ${err}`),
//   complete: () => console.log('Observable completed')
// });

// setTimeout(() => {
//   subscribtion.unsubscribe();
// }, 3000)


// SUBJECTS

const subj$$ = new Subject();

subj$$.subscribe(console.log); // A

subj$$.next(123); // A

subj$$.subscribe(console.log); // B
subj$$.subscribe(console.log); // C
subj$$.next(400); // A, B, C

setTimeout(() => {
  subj$$.subscribe(console.log); // D
  subj$$.next(100) // A, B, C, D
}, 2000)



// Behavior Seubject

const bSubj$$ = new BehaviorSubject(100);
bSubj$$.subscribe((data) => console.log(`Subscription 1:`, data));

setTimeout(() => {
  bSubj$$.subscribe((data) => console.log('Subscription 2: ', data));
  bSubj$$.next(200);

  setTimeout(() => {
    bSubj$$.subscribe((data) => console.log('Subscription 3: ', data));
    bSubj$$.next(300);
  })
}, 2000)

// Replay Subject

const rSubj$$ = new ReplaySubject(10);
rSubj$$.next(1000);
rSubj$$.subscribe((d) => console.log('Subscribe 1', d))

for (let i = 1; i <= 30; i++) {

  rSubj$$.next( i)
}

console.log(`-----------------------`)
rSubj$$.subscribe(console.log)
