# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Polls

- `GET /api/polls`
  - Polls index/search
    - accepts `title_name` query param to list notes by title
  - accepts `currentUserId` query param to only fetch polls authored
- `POST /api/polls`
- `GET /api/polls/:id`
- `PATCH /api/polls/:id`
- `DELETE /api/polls/:id`

### Groups

- `GET /api/groups` accepts `currentUserId` query param to only fetch groups
  from currentUser.
- `POST /api/groups`
- `GET /api/groups/:id`
- `DELETE /api/groups/:id`
- `GET /api/groups/:id/polls`
  - index of all polls for a group
