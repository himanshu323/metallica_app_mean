export interface Trade{


    quantity:number;

    tradeDate:Date;

  
    commodity:string,

    price:number;

    counterparty:string,

    location:string,

    side:string,

    id:string,

    tradeId:number,

    creator:string




}


// core.js:1673 ERROR Error: Uncaught (in promise): Error: Cannot match any routes. URL Segment: 'login'
// Error: Cannot match any routes. URL Segment: 'login'
//     at ApplyRedirects.push../node_modules/@angular/router/fesm5/router.js.ApplyRedirects.noMatchError (router.js:1382)
//     at CatchSubscriber.selector (router.js:1363)
//     at CatchSubscriber.push../node_modules/rxjs/_esm5/internal/operators/catchError.js.CatchSubscriber.error (catchError.js:33)
//     at MapSubscriber.push../node_modules/rxjs/_esm5/internal/Subscriber.js.Subscriber._error (Subscriber.js:80)
//     at MapSubscriber.push../node_modules/rxjs/_esm5/internal/Subscriber.js.Subscriber.error (Subscriber.js:60)
//     at MapSubscriber.push../node_modules/rxjs/_esm5/internal/Subscriber.js.Subscriber._error (Subscriber.js:80)
//     at MapSubscriber.push../node_modules/rxjs/_esm5/internal/Subscriber.js.Subscriber.error (Subscriber.js:60)
//     at MapSubscriber.push../node_modules/rxjs/_esm5/internal/Subscriber.js.Subscriber._error (Subscriber.js:80)
//     at MapSubscriber.push../node_modules/rxjs/_esm5/internal/Subscriber.js.Subscriber.error (Subscriber.js:60)
//     at TapSubscriber.push../node_modules/rxjs/_esm5/internal/operators/tap.js.TapSubscriber._error (tap.js:61)
//     at ApplyRedirects.push../node_modules/@angular/router/fesm5/router.js.ApplyRedirects.noMatchError (router.js:1382)
//     at CatchSubscriber.selector (router.js:1363)
//     at CatchSubscriber.push../node_modules/rxjs/_esm5/internal/operators/catchError.js.CatchSubscriber.error (catchError.js:33)
//     at MapSubscriber.push../node_modules/rxjs/_esm5/internal/Subscriber.js.Subscriber._error (Subscriber.js:80)
//     at MapSubscriber.push../node_modules/rxjs/_esm5/internal/Subscriber.js.Subscriber.error (Subscriber.js:60)
//     at MapSubscriber.push../node_modules/rxjs/_esm5/internal/Subscriber.js.Subscriber._error (Subscriber.js:80)
//     at MapSubscriber.push../node_modules/rxjs/_esm5/internal/Subscriber.js.Subscriber.error (Subscriber.js:60)
//     at MapSubscriber.push../node_modules/rxjs/_esm5/internal/Subscriber.js.Subscriber._error (Subscriber.js:80)
//     at MapSubscriber.push../node_modules/rxjs/_esm5/internal/Subscriber.js.Subscriber.error (Subscriber.js:60)
//     at TapSubscriber.push../node_modules/rxjs/_esm5/internal/operators/tap.js.TapSubscriber._error (tap.js:61)
//     at resolvePromise (zone.js:814)
//     at resolvePromise (zone.js:771)
//     at zone.js:873
//     at ZoneDelegate.push../node_modules/zone.js/dist/zone.js.ZoneDelegate.invokeTask (zone.js:421)
//     at Object.onInvokeTask (core.js:3811)
//     at ZoneDelegate.push../node_modules/zone.js/dist/zone.js.ZoneDelegate.invokeTask (zone.js:420)
//     at Zone.push../node_modules/zone.js/dist/zone.js.Zone.runTask (zone.js:188)
//     at drainMicroTaskQueue (zone.js:59