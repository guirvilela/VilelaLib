import React from 'react';

export type Queue<T> = (...args: T[]) => Promise<void>;
export type QueueList<T> = Queue<T>[];

/**
 * Creates list with function/tasks to be using in react effects
 * @return Object
 */
export function useQueue<T>() {
  const [queue, setQueue] = React.useState<QueueList<T>>([]);

  const addQueue = React.useCallback(
    (task: Queue<T>) => setQueue((v) => [...v, task]),
    [queue]
  );

  const runQueue = React.useCallback(
    async (data: T) => {
      if (queue.length) {
        for (const task of queue) {
          await task(data);
        }
        setTimeout(() => setQueue([]), 500);
      }
    },
    [queue]
  );

  return {
    queue,
    addQueue,
    runQueue
  };
}
