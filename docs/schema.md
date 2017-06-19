# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## polls
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
author_id   | integer   | not null, foreign key (references users), indexed
group_id | integer   | not null, foreign key (references groups), indexed
active | boolean | not null, default to false

## groups
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
title       | string    | not null

## responses
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
poll_id   | integer   | not null, foreign key (references polls), indexed
response_name      | string    | not null
