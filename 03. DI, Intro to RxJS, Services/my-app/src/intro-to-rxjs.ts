import { Observable, map, interval } from "rxjs"

function getValue() {
    return new Promise((res) => {
        setTimeout(() => {
            res('test')
        }, 2000)
    })
}

function getValue2(cb: (...args: any[]) => void) {
    setTimeout(() => {
        cb('test')
    }, 2000)
}

getValue().then(function (value) { console.log(value) });

[1]
    .map(function (x) { return x + 1 })
    .map(function (x) { return x * 1 })

// promise chain

Promise.resolve(1)
    .then(function (value) { console.log(value) })
    .then()
    .then();

[1, 2, 3, 4]
    .map(function (x) { return x + 1 })
    .map(function (x) { return x * 1 })


    // function interval(intervalValue: number = 0){
    //     return new Observable<number>(observer => {
    //         let counter = 0;
    //         setInterval(() => {
    //             observer.next(counter++)
    //         }, intervalValue)
    //         // observer.next(100);
    //         // observer.next(200);
    //         // observer.next(300);
    //         // observer.complete();
        
    //     });
    // }


interval(3000).pipe(
    map(x => x + 1)
).subscribe(console.log)

