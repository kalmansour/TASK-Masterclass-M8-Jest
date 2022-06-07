# Configuration & Jest

Dip your toes in environment variables, and test your app.

## Setup

1. Fork and clone [this repository](https://github.com/JoinCODED/TASK-Masterclass-M8-Jest).
2. Install the dependencies using `npm i`.
3. Start the BE server by running `npm run server`.

## Environment Variables

Have a look at this [link](https://create-react-app.dev/docs/adding-custom-environment-variables/), it should help you with the task below.

1. Go to `services/instance.ts`.
   - We have a function called `getApiUrl`, which is responsible for resolving which API url to use
   - This function currently returns a production URL that is not live
   - We want to be able to override this using environment variables and local storage, so that our website can work during development
2. In the `getApiUrl` function, check if the mode is `development`.
3. If the mode is `development`, then try to get an `api` url from `localStorage` (use the key `api`).
4. If `localStorage` did not have an `api` key then try to get the API url from the environment variable (use `REACT_APP_API_URL`).
5. Finally, if none of the above have been satisfied, return the production URL that is not currently working.
6. To test that the above has worked:
   1. Run the BE server in one terminal (`npm run server`).
   2. Run the FE server in another terminal window (`npm start`).
   3. Open Chrome DevTools, go to Application, add a `localStorage` item, the key should be `api`, and the value should be `http://localhost:8000`.
   4. Refresh the page, and you should see some beautiful posts.

## Environment Variables Bonus

1. Install `concurrently` and run the BE and FE servers in one terminal window.
   - HINT: You will need to update the scripts in `package.json`.

## Unit Test

1. Create a file called `instance.spec.tsx` under `services`.
2. Export the `getApiUrl` function.
3. Accept an optional `storage` parameter in `getApiUrl`, which is of type `Pick<Storage, "getItem">`, and have the default be `localStorage`.
   - Use the `storage` being passed in the parameter instead of the global `localStorage` object
4. Create a unit test for `getApiUrl`, call it `"only returns production url"`.
5. Create an object that has a `getItem` key, which is an arrow function that returns `http://localhost:8000`
6. Pass this object to `getApiUrl` and save the return in a variable called `apiUrl`
7. Assert that `apiUrl` is equal to `https://api.example.com`
8. Run `npm run test`, you should pass the test `only returns production url` and fail `renders learn react link`.

## Mock Test

1. Go to `App.spec.tsx`, and rename the test function to be `renders posts`, instead of `renders learn react link`.
2. Mock `./services/posts` outside of the test, then mock `useGetPosts`'s returned value inside the test function, before testing anything.
3. Make sure to mock the return value to be a list of posts.
4. Render the `App` component using `render(<App />)`.
5. Get the `name` of your first mocked post by using `screen.getByText` (call the variable `postName`).
6. Assert that `postName` is in the document.
7. Run the tests using `npm run test`, and you should pass all tests.

## Snapshot

Use the following [article](https://jestjs.io/docs/snapshot-testing) to solve the task.

1. Create a `PostList.spec.tsx` file next to `PostList.tsx`.
2. Create a snapshot test for `PostList`.

## React Bonus

Get the `Go to post` button to work, without install `react-router-dom`.
