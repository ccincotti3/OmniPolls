# Component Hierarchy #

### AuthFormContainer  ###
 - AuthForm

### NavListContainer ###
 * NavList
   * props
      - currentUser

### PollsContainer ###
  - Sidebar
      - createPoll
  - PollSearchbyTitle
    - props: polls
  - PollActions
      - createPoll, deletePoll, updatePoll, activatePoll
  * PollIndex
      - props: polls
        dispatch: fetchPolls
        - if grouped: nest under group; else nest under 'ungrouped'

### GroupContainer ###
  - PollIndex
    dispatch: fetchPolls

### PollIndex ###
 - PollIndexItem
  + PollHeader
    + PollDetail
      + PollActions
        - group, ungroup, clear, delete, edit dispatch actions
      - PollResults
          - fetchResponses, render chart

### NewPollContainer ###
 - NewPollForm
    dispatch newPoll(poll_params)
 - AssignToGroupSelection
    - dispatch createGroup (if group doesn't exist)
    - dispatch addToGroup (if group exists)

### ParticipantResponseContainer ###
- PollParticipantForm
  - props poll.responses
  - dispatch fetchPossibleResponses
  - dispatch addResponse

### ParticipantPollSearchContainer ###
- UsernameSearchForm
  props users (w/ active polls)
- RecentSearches
  props pastSearches
- does respondee need to log in?
  - log IP Address?

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/login" | "AuthFormContainer" |
| "/polls" | "PollsContainer" |
| "/polls/group/:groupId/poll/:pollId" | "GroupContainer" |
| "/new-poll" | "NewPollContainer" |
| "/participant/:authorUsername" | "ParticipantResponseContainer" |
| "/participant/search" | "ParticipantPollSearchContainer" |
