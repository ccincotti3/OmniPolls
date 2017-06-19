```js
{
  currentUser: {
    id: 1,
    username: "app-academy"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createPoll: {errors: ["title can't be blank"]}
  },
  polls: {
    1: {
      title: "Sample Question/Title",
      author_id: 1,
      group_id: 1
      responses: {
        answer: "A"
      },
      active: false,
    }
  },
  groups: {
    1: {
      title: "My Least Favorite Polls",
      author_id: 1,
    }
  }

  activePoll: 1;
}
```
