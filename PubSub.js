const PubSub = function () {
  this.events = {};
};

PubSub.prototype.publish = function (eventType, data) {
  const eventArray = this.events[eventType];
  if (eventArray) eventArray.forEach((cb) => cb(data));
};

PubSub.prototype.subscribe = function (eventType, cb) {
  const eventArray = this.events[eventType];

  if (eventArray) {
    eventArray.push(cb);
  } else {
    this.events[eventType] = [cb];
  }
};

PubSub.prototype.unsubscribe = function (eventType, cb) {
  const eventArray = this.events[eventType];

  if (eventArray)
    this.events[eventType] = eventArray.filter((sub) => sub !== cb);
};
