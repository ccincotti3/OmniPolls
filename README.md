# OmniPolls

OmniPolls is a live polling web application inspired by Poll Everywhere built on ReactJS + Rails

[OmniPolls live][heroku]

[heroku]: https://omnipolls.herokuapp.com/#/

Inspired by PollEverywhere, Omnipolls is a full stack polling web application which uses Ruby on Rails, ReactJS, Redux, and PostgreSQL database.

Presenters can poll audiences and receive real-time live results. Audiences can respond to polls through the website itself, or through SMS messaging.

## Features

OmniPolls consist of many features designed with user friendliness and interactivity in mind.

### Groups

Groups act as organizational containers that the user can use to store related questions. On login, an AJAX request is made to the database that fetches a user's groups. Since there is an association between groups and questions, that single AJAX call also passes in the questions that each group contains.

The user also has a permanent container named 'Ungrouped'. Similar to PollEverywhere, an attempt to delete this group will cause all of the questions within itself to be deleted, but the 'Ungrouped' container will remain. This is due to conditional logic in the backend.

Finally, the user can drag and drop questions into groups through implementation of the react-drag-and-drop library.

### Graph Rendering & Live Results

The presenter can receive live visual results through implementation of WebSockets. Utilizing Pusher, when an audience member responds to a poll, an action to update the live-view graph is triggered. The bar graph is rendered through utilizing the Recharts library.


### Active Polling & Responses

Presenters have the ability to set which poll is active to the audience in real time through a single URL (omnipolls.herokuapp.com/:username), again using WebSockets. Due to Pusher implementation, the audience does not have to refresh the page, or visit a new URL when the presenter changes the active question. If a poll is not active, the audience cannot respond. If no poll is active, the audience is prompted to wait until a poll is active.

Responding to a poll can be completed through visiting a presenters URL, or by text messaging through implementation of Twilio. Pusher and Twilio work well together nicely. When a POST request from Twilio is received and a response is logged in the database, an action to update the live-view is triggered through the Pusher connection. 
