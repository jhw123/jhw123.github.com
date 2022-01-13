---
title: 'Managing mock data for integration tests'
dateTime: '2022-01-13T01:00:00'
image: ''
tags: 'Web, Testing'
keywords: 'integration test data, managing mock data, mock integration tests'
published: true
---

Writing test codes is often a big challenge to small-size teams.
Writing test codes for frontend is even harder because frontend codes change frequently, forcing you to update test codes accordingly.
Neverthless, test codes are necessary for codes to scale up.

When I was in the frontend team in [VCNC](https://vcnccorp.notion.site/Value-Creators-Company-28a75434e6154bee87e2a624cf6d08fa), my team stuggled to write test codes for the same reasons. There were five, including me, developers in my team and we struggled to write test codes because of frequent feature-requests from biz team. Even if we had written some tests, we could not properly manage and update them.

The situation was aggravated as time went on. Since feature development had a higher priority over test codes and time was limited, we added many of new feature codes without test codes; since there were no test codes, my team could not refactor our code indenpendently and we also spent more time on addressing QA issues; consequently less time remained for feature development and the cycle repeated. At some point, I felt this as a severe issue and started to look for any improvement for better test code writing.

## ✍️ How I (or you) have been writing test codes

Let's take a typical TODO application as an example. It has a list page that shows a list of your TODO items and their respective completion status. Each TODO item holds data of type `ToDoItem`. `ToDoItem` has several field such as status, time at completion, and the description of the task to do. The page has a business logic that TODO items with `status == "COMPLETED"` are marked "Complete!" on its card with the time of completion.

![Three steps to write test codes](/images/2022/01-13-three-steps-to-write-test-codes.png)

My team aimed to write test codes that check if components in pages correctly present given data. For example, if two TODO items are given and one of them is completed, rendered page component should show two cards, one with Complete mark and another with only task description.
My team have been followed a 3 step procedure for writing tests; 1) design some tests, 2) make several mock `ToDoItem`s that are specific to the tests, and 3) inject mock data to a component and see if it renders data correctly.

## 😓 Why is it hard to write test codes?

At first the procedure was straightforward and the fact that each test is coupled with mock data made debugging easy. However, problems arised quickly as I added more tests.

First, there were duplicates among mock data. For separation of concerns I had been making small tests that check only small part of a page. Each test had its own mock data that were nearly identical to others but differed slighly; hence, there were many duplicated fields in data.
In order to reduce duplication I tried making a bigger test that checks multiple different conditions, but it made difficult to update and debug tests. I also tried applying the [factory pattern](https://en.wikipedia.org/wiki/Factory_method_pattern) by making factory functions that generate mock data with some flexbility, but it was not satisfying either because I had to change the factory function frequently.

Second, it was really annoying to make mock data. Unlike the TODO example above, there are usually dozens of fields in real-world data. One of the prime data types in my product had 63 fields and I had to fill them all for a test to work. Moreover, filling them was not simple because the fields were inter-related, meaning that some values in a field restrict the value of other fields. For example, `completedAt` field of `ToDoItem` cannot have a value unless the task is complete. I have to make sure that there is no mock data with non-null `completedAt` and `PENDING` together. Unfortunately type systems could not prevent this issue because such relation between fields is not representable through types. Now, imagine the difficulty of making mock data with 63 inter-related fields.

```typescript
// examples of the test codes I had been writing.
// Note that mock data are passed to redux store.

describe('On the todo list page,', () => {
  test('completion and time need to be shown for a completed task', async () => {
    render(
        <ToDoListPage />,
        { store: configureStore({ reducer: combinedReducer, mockData1 }) }
    )
    expect(screen.queryByText("Finish writing")).toBeDefined()
    expect(screen.queryByText("Complete! (16:13)")).toBeDefined()
  })

  test('completion and time should not be shown for a pending task', async () => {
    render(
        <ToDoListPage />,
        { store: configureStore({ reducer: combinedReducer, mockData2 }) }
    )
    expect(screen.queryByText("Complete!")).toBeNull()
  })
}
```

## ✨ Solutions

### 1. Decouple tests from mock data

The `test()`s in the code example above are not reusable. Test conditions specified in `expect()` are specific to designated mock data. We can increase the resuability of tests by decoupling tests from mock data. This could be done by defining `expect()`s with conditionals. For example, the two tests above both check the visibility of completion and time on UI for different status. Instead of writing a test for each status, we can group the tests by their concerns and write an unified test as below.

Furthermore, decoupling of tests also eases you to improve test coverage (For clarification, test coverage refers to the coverage of input [domain](https://en.wikipedia.org/wiki/Domain_of_a_function)). Decoupling unravels the function of test and mock data; tests determine "What" and "How" and mock data determines coverage of the tests. Previously, the only way to increase test coverage is to add both tests and mock data, but now you can increase test coverage by only adding more diverse data.

```typescript
const logger = new Logger()

[mockData1, mockData2, mockData3].forEach((mockData, i) => {
  describe('On the todo list page,', () => {
    describe(`use mockData${i + 1} to`, () => {
      beforeEach(() => {
        render(
          <ToDoListPage />,
          { store: configureStore({ reducer: combinedReducer, mockData }) }
        )
      })

      test('check completion and time visibility', async () => {
        const { status, updatedAt } = mockData
        if (status === 'COMPLETED') {
          expect(screen.queryByText(`Complete! (${updatedAt})`)).toBeDefined()
          logger.log('visible')
        } else {
          expect(screen.queryByText(`Complete! (${updatedAt})`)).toBeNull()
          logger.log('notVisible')
        }
      })
    })
  }
}

logger.printStat()
```

Using conditionals also eases test code writing as conditional statements resemble business logic. Just start writing tests by first copying and pasting your business logic and then populating some data. We can change the 3 step procedure as follows: 1) copy and convert your business logic codes to test codes or vice versa, 2) make mock data anyway you want as long as they are valid, and 3) inject mock data and check rendered UI.

![A better way of writing test codes](/images/2022/01-13-improved-three-steps-to-write-test-codes.png)

### 2. Collect mock data from running service

Manually making valid mock data is not easy due to inter-reliablity between data fields. I tackled this problem by generating mock data through running services. The most up-to-date business logic and data schema are likely to be applied to your application running in production or development environment. Go through a test senario you want to test and using dev tools to extract the data made. If you are using redux and [RTQ query](https://redux.js.org/tutorials/essentials/part-7-rtk-query-basics) for state managements, you can use a redux dev tool to extract raw state data in a single json file; you can inject this json back to you application in tests by using `configureStore()`.

You may even collet testable data at scale by crowdsourcing. You can make a redux middleware that periodically (or on errors) sends redux states to a remote storage. If deploying it to production is risky due to privary issues, you can still implant it to your services in development environment so that whenever QA team work on a new test case you can easily add it to your test codes.

Now, you might wonder how we can track test coverage efficiently. I came up with two approaches. The first is to make a custom logger that counts the number of duplicate cases (data point). For each test, log the case being tested with either a custom string or data itself as a key and check the number of duplicates after all tests. The second is to analyze the diversity metric of your mock data set. [Jaccard index](https://en.wikipedia.org/wiki/Jaccard_index) is one of the diversit metrics. Using this metric, you can even identify and remove the data point that has duplicates and does not contribute to increase test coverage.

```typescript
export class Logger {
  stat = new Map<string, number>()

  log(case: string | number | boolean | undefined) {
    const testName = last(expect.getState().currentTestName.split(/, /))
    const statKey = `${testName}__${case?.toString()}`
    this.stat.set(statKey, (this.stat.get(statKey) ?? 0) + 1)
  }

  printStat() {
    const table: Record<string, string | number>[] = []
    for (const key of this.stat.keys()) {
      const [condition, case] = key.split('__')
      table.push({
        Condition: condition,
        Case: case,
        '# of Cases': this.stat.get(key),
      })
    }
    console.table(table)
  }
}
```

## ✅ Summary

- Write durable and reusable test codes by using conditionals.
- Decouple tests from mock data so that test coverage is only concerned with mock data.
- Populate mock data by collecting data from your running service.
- Monitor and improve the coverage of your tests by analyzing your mock data set.
