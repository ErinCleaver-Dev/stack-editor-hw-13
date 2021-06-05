// Import stylesheets
import "./style.css";

class Stack {
  constructor() {
    this.data = []
    this.top = 0;
  }

  push(value) {
    this.data[this.top] = value;
    this.top = this.top + 1;
    return this
  }
  pop() {
    if(this.isEmpty()) {
      return "Empty stack"
    }
    this.top = this.top - 1;
    this.data.pop()
    return this
  }
  length() {
    return this.data.length
  }
  isEmpty() {
    if(this.length() == 0) {
      return true
    }
  }
  clear() {
    this.data = [];
    this.top = 0;
  }

  lastValue() {
    return this.data[this.top-1]
  }

  print() {
    console.log(this.data)
  }
}

const undo = new Stack();
const redo = new Stack();

const editor = document.getElementById("editor");

editor.addEventListener("keydown", ev => {
  if (ev.ctrlKey && ev.key === "z") {
    ev.preventDefault();

    
    // Here is where we're going to link the undo functionality
    // with the front-end.  In this event listener, we need to
    // edit the contents of the editor (ev.target.value) with
    // the last item from the stack.
    if(undo.length()) {
      ev.target.value = undo.lastValue()
      redo.push(undo.lastValue())
      undo.pop()
    }
    // Don't forget!  We also have to make sure we're loading
    // our redo stack as well!
  } else if (ev.ctrlKey && ev.key === "r") {
    ev.preventDefault();
    // Just like you did with the undo functionality, link your redo
    // stack functionality here!  Remember!  We want to set
    // (ev.target.value) with your value from your redo stack.
    if(redo.length()) {
      undo.push(redo.lastValue())
      ev.target.value = redo.lastValue()
      redo.pop()
    }

    // Don't forget!  We also need to make sure we're loading
    // our UNDO stack as well!
  } else {
    // Else we should just send ev.target.value to our undo object!
    undo.push(editor.value).print()
    redo.clear()
  }
});