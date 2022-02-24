# pubsub-implementation
I have been doing a lot of reading about decoupling/removing dependencies in my objects
for the sake of writing more reusable code so I decided to write a basic implementation of the popular publisher/subscriber design pattern.


<h1>Usage</h1>

```js
//Create a new control object responsible for notifying subscribers of events
const controlObject = new PubSub();

//a basic logger function
const messageLogger = (data) => console.log(`Message Logger: ${data}`);

//subscribes to the newMessage event so the messageLogger function will fire whenever that event is published
controlObject.subscribe('newMessage', messageLogger);

//publishes a new event which will cause call all subscribers to the newMessage event
controlObject.publish('newMessage', 'Here is a new message to be logged!');

//unsubscribes the messageLogger function from the newMessage event so it will no longer be called when that event is published
controlObject.unsubscribe('newMessage', messageLogger);

```
