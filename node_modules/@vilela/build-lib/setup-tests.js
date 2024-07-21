/* eslint-disable @typescript-eslint/no-var-requires */
require('@testing-library/jest-dom/extend-expect');
require('jest-canvas-mock');

jest.useFakeTimers('modern').setSystemTime(new Date('1970-01-01T12:00:00'));
