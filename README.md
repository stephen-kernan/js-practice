# js-practice
Practice questions for Javascript designed to keep a beginner's skills sharp. This list will be updates with seven new challenges each week, which should each take ~5-15 minutes. 

## Contents
* [Getting Started](#getting-started)
* [Completing the Challenges](#completing-the-challenges)
* [Method for Solving Challenges](#method-for-solving-challenges)

## Getting Started

1. Clone the project
   1. Go to [the project page on Github](https://github.com/stephen-kernan/js-practice)
   2. Click green button that says 'Code'
   3. Copy the code inside the box that pops up
   4. In your terminal, `cd` into the parent folder that you want to store this project in. For most people, it's their root folder (`cd ~`)
2. Install the dependencies
  a. Use `cd js-practice` to switch into the project folder
  b. Run `npm install` to install any packages listed in the `package.json`


## Completing the Challenges

### Setup

#### 1. Pull Changes Down From Github

Be sure to pull the most current version of the branch so that you get the correct prompt on your local computer.

To pull down the most recent changes from GitHub:
```sh
git checkout main
git pull origin main
```

#### 2. Create a new branch for your solution

We want to make sure your changes are isolated from the main branch until we know that it's a correct solution. Name your branch as `{name}-week-{week_number}`. For example `stephen-week-1`.

To create your branch, run:
```sh
git branch {{ BRANCH NAME HERE }}
git checkout {{ BRANCH NAME HERE }}
```

OR, you can build the branch and check it out in one command like this:
```sh
git checkout -b {{ BRANCH NAME HERE }}
```

### Validating Your Code

It can be helpful to run your code in an interactive way to see how it's working. There are two ways you can do that:

#### 1. Running the code in the terminal.

Each day's challenge has some code at the bottom that's commented out. It looks something like this:

```js
// UNCOMMENT EVERYTHING IN THIS LINE TO TRY IT OUT IN TERMINAL
// const term = createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// term.question("Please enter two numbers separated by one space\n", (input) => {
//   try {
//     const parsedInput = input.split(" ");
//     const [firstNumber, secondNumber] = parsedInput;

//     console.log(
//       "Result: ",
//       createSum(Number(firstNumber), Number(secondNumber))
//     );
//   } catch (e) {
//     console.log("Error: ", e);
//   } finally {
//     term.close();
//   }
// });
```

Uncomment the code from `const term...`  to the end of the file. Now, you can run your code in the terminal by running `node today` from in the *root folder of this project*.

#### 2. Running the code in DEBUG mode

Sometimes, the output that you get is not very helpful. In these cases, it's helpful to run your code in DEBUG mode so that you can walk through line-by-line to see what's going wrong. Here's the easiest way to do that:

1. Install the `Jest Runner` extension for VS Code (by firsttris)
2. Set a debugger in your code on the line where you'd like to pause. You can do this in VS Code by hovering your mouse to the left of the line numbers, then clicking the little red circle that appears. The red dot should persist, but you can remove it by clicking the red dot again.
3. Open the `today.test.js` file from inside the `/tests` directory (or, if you're catching up on a previous challenge, the test that corresponds to the file you're working in)
4. You should see something like `Run | Debug` over each `describe` or `it` block. Click on `Debug` and VS Code will walk pause on any debuggers you have set. 
5. Now that you are paused, you can walk through the code with the controls provided in VS Code.
6. When you're finished, remove the debuggers by clicking on the red dot.

### Running the Tests

When you think you've solved the practice problem of the day, go ahead and run the tests to validate your code in the terminal (or in VS Code with the Jest Test Runner). If you're running in the terminal, make sure that *you are in the `/js-practice` directory*

To run all tests:
`npm run test`

To run only the tests related to today's project:
`npm run test:today`

### Submit Your Code

When you're finish with the challenge of the day and you've validated that the tests are passing, commit and push your changes to your branch.

#### 1. Add Your Files

```sh
git add .
```

#### 2. Commit Your Changes

```sh
git commit -m 'COMMIT MESSAGE HERE'
```

#### 3. Push Your Changes

```sh
git push origin {{ BRANCH NAME HERE }}
```

#### 4. Open a PR (Pull Request) on GitHub

Navigate to [the project on GithHub](https://github.com/stephen-kernan/js-practice). If you just pushed your changes, you may see a yellow prompt at the top of your screen that says `{{ BRANCH NAME HERE }} had recent pushes`. If so, click the `Compare & pull request` button and fill out the form.

If you don't see the popup, follow these steps to make a PR manually:

1. Navigate to the `Pull Requests` tab from the Project page on GitHub
2. Click the `Create pull request` button in the top right corner
3. Select your branch from the links, or manually change the `compare:` branch dropdown to your branch name
4. You should see your changes show up on the screen
5. Click the `Create pull request` button in the top right corner
6. Fill out the form
   1. Change the title to `{{ YOUR NAME }} - {{ MONTH }} - {{ DATE }}`
   2. Leave a comment, or don't. Totally up to you.
   3. Add `stephen-kernan` as a reviewer in the sidebar on the right side
   4. Add yourself as an assignee in the sidebar on the right side

## Method for Solving Challenges
> MORE DETAILED GUIDE COMING SOON

Questions to ask, in order:
1. What kind of data needs to be passed in to this function?
   1. How many pieces of data should I expect to receive?
   2. What datatype will I be dealing with for each parameter?
2. How do I return what the problem is asking for, assuming that the data is given to me in the best case scenario exactly as I need it?
3. What could go wrong based on the type of data that's provided?
   1. What if someone gives me nothing?
   2. What if someone gives me the wrong *datatype*, so my logic breaks?
   3. For complex/advanced datatypes, such as objects or arrays, what else could go wrong (i.e., empty list, key is missing from object, etc.)?
4. How can I protect the code so that it doesn't break if any of these things do go wrong?