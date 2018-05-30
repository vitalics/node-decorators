import {On, Event } from '@decorators/node';
import { EventEmitter } from 'events';

@Event()
class MyEvent extends EventEmitter {

    @On('reaction')
    public reaction() {
        console.log('reaction')
    }
}

const event = new MyEvent();

event.emit('reaction');
