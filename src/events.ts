import { EventEmitter } from 'events'

export class EventHandlers {

    private eventEmitter: EventEmitter;

    constructor(eventEmitter: EventEmitter) {
        this.eventEmitter = eventEmitter;
    }

    registerRouteEventHandlers() {
        console.log('Route Event Handlers registered')

        this.eventEmitter.on('routeAccess', (route) => {
            try{
                this.anounceRouteAccess(route);
                this.upgradeSecurity(route)
            }
            catch(error){
                console.log('An error occured while performing route access')
            }
        });
    }

    private anounceRouteAccess( route: string){
        console.log(`${route} has been accessed`)
    }


    private upgradeSecurity(route: string){
        console.log(`Locking all other routes and initiating higher security measures on ${route} route`)
    }

}