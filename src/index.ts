/*
* This program test stack class.
*
* @author  Felipe Garcia Affonso
* @version 1.0
* @since   2021-12-09
*/

'use strict'

const ps = require('prompt-sync')
const prompt = ps()

class MrCoxallStack {
  // this is a stack class.
  private stack: unknown[] = []

  push (pushValue: unknown) {
    // this method adds a value to the stack.
    this.stack.push(pushValue)
  }

  showStack () {
    // this prints out the stack.
    for (let counter = this.stack.length - 1; counter >= 0; counter--) {
      console.log(this.stack[counter])
    }
  }

  pop () {
    // this method removes the last part of the stack.
    let returnValue: unknown
    if (this.stack.length !== 0) {
      returnValue = this.stack.pop()
    } else {
      returnValue = null
    }
    return returnValue
  }
}

const aStack = new MrCoxallStack()

const input: string = prompt('Insert input:')
try {
  if (isNaN(Number(input))) {
    throw new Error('not a number')
  } else {
    aStack.push(Number(input))
    aStack.showStack()
  }
} catch (Expetion) {
  console.log('Not a number.')
}
console.log('No pop:')
aStack.showStack()
console.log('\nDone.')
