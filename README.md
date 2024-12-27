# React useState Hook: Unexpected Behavior with Multiple setCount Calls

This repository demonstrates an uncommon bug in React's `useState` hook where calling `setCount` multiple times within a single function call may lead to unexpected behavior.  The issue arises when the state updates are not correctly batched, potentially causing the second update to overwrite the first.

## Bug Description
The problem occurs when attempting to increment the count by more than 1 in one go by calling `setCount` twice consecutively. Due to the asynchronous nature of state updates in React, the second call might overwrite the first, leading to an incorrect state update. The expected behavior would be to see the count increase by two, but only the second update will be reflected, resulting in a count increase of one.

## Solution
The recommended solution is to use the functional update form of `setCount` to ensure that the second update uses the most current state value. 