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
      return "Empty"
    } else if(this.top >= 0) {
      this.data.pop()
      this.top -=1;
    }
  }
  length() {
    return this.data.length
  }
  isEmpty() {
    if(this.data.length) {
      return true
    }
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
    
    undo.pop()

    // Don't forget!  We also have to make sure we're loading
    // our redo stack as well!
  } else if (ev.ctrlKey && ev.key === "r") {
    ev.preventDefault();
    // Just like you did with the undo functionality, link your redo
    // stack functionality here!  Remember!  We want to set
    // (ev.target.value) with your value from your redo stack.

    

    // Don't forget!  We also need to make sure we're loading
    // our UNDO stack as well!
  } else {
    // Else we should just send ev.target.value to our undo object!
    let value = ev.target.value
    undo.push(value).print()
    
  }
});
