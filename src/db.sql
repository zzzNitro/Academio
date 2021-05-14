CREATE DATABASE academio;

CREATE TABLE users(
    user_id uuid DEFAULT uuid_generate_v4 (),
    username VARCHAR NOT NULL,
    birthday DATE NOT NULL DEFAULT CURRENT DATE,
    time_zone TIME with time zone,
    enrolled_courses json NOT NULL,
    teaching_courses json,

    PRIMARY KEY (user_id)
);

CREATE TABLE courses(
    author,
    teacher,
    long_description,
    duration,
    sections,

);

CREATE TABLE sections(
    small_description,
    classes
);

CREATE TABLE classes(
    completion,
    duration,
    videos,
    files
);