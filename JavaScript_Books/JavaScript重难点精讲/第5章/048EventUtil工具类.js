let EventUtil = {
  addEventHandler(element, type, handler) {
    if (element.addEventListener) {
      element.addEventListener(type, handler);
    } else if (element.attachEvent) {
      element.attachEvent("on" + type, handler)
    } else {
      element["on" + type] = handler;
    }
  },
  removeEventListener(element, type, handler) {
    if (element.removeEventListener) {
      element.removeEventListener(type, handler)
    } else if (element.detachEvent) {
      element.detachEvent("on" + type, handler)
    } else {
      element["on" + type] = null
    }
  },
  getEvent(event) {
    return event || window.event
  },
  getTarget(event) {
    return event.target || event.srcElement;
  }
}