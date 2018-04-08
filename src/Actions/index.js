export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export function increment(count) {
  return {
    type: INCREMENT_COUNTER,
    count,
  };
}

export function decrement(count) {
  return {
    type: DECREMENT_COUNTER,
    count,
  };
}
