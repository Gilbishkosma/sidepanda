starter used [vite-template-redux](https://redux-toolkit.js.org/introduction/getting-started)

```sh
npx degit reduxjs/redux-templates/packages/vite-template-redux my-app
```

## Scripts

- `dev`/`start` - start dev server and open browser
- `build` - build for production
- `preview` - locally preview production build
- `test` - launch test runner

## Code

### File Structure

Redux Store : /src/app

Components: /src/components

Redux Slice: /src/features

Utils: /src/utils

### Components

I have seperated the Components into two part

1. Header
2. CalenderCard

CalenderCard component uses Calender, TimeSlotList, CalenderFooter, Form and icons component

## Calender Library

I have used [react-calender](https://www.npmjs.com/package/react-calendar) for the Calender component

## Date Library

I have used  [momentjs](https://momentjs.com/) for Date. I used normal Date() method but it was giving inconsistent output on different devices.
