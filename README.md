# React useState: Direct State Modification Bug

This repository demonstrates a common error when using the `useState` hook in React: directly modifying the state variable instead of using the setter function.  This leads to unexpected behavior and no re-renders.

The `bug.js` file contains the erroneous code. The `bugSolution.js` file provides the correct implementation.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe that the counter does not update because the state is not properly updated.

## Solution

The solution involves using the `setCount` function to update the state. This correctly triggers re-renders and updates the UI.