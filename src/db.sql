CREATE DATABASE academio;

CREATE TABLE users(
    user_id uuid DEFAULT uuid_generate_v4 (),
    username VARCHAR(50) NOT NULL UNIQUE,
    birthday DATE,
    time_zone TIME with time zone,
    enrolled_courses json,
    teaching_courses json,

    PRIMARY KEY (user_id)
);

CREATE TABLE courses(
    course_id SERIAL,
    author VARCHAR(100) NOT NULL,
    teacher VARCHAR(100) NOT NULL,
    long_description TEXT NOT NULL,
    duration TIME(6),
    sections INT,

    PRIMARY KEY (course_id)
);

CREATE TABLE sections(
    section_id SERIAL PRIMARY KEY,
    small_description CHAR(500) NOT NULL,
    classes json,
    course_id SERIAL REFERENCES courses,
    CONSTRAINT fk_section
        FOREIGN KEY(course_id)
            REFERENCES courses(course_id)
);

CREATE TABLE classes(
    class_id SERIAL PRIMARY KEY,
    completion INT NOT NULL DEFAULT 0,
    duration TIME(6),
    videos json,
    files json,
    section_id SERIAL REFERENCES sections,
    CONSTRAINT fk_section
        FOREIGN KEY(section_id)
            REFERENCES sections(section_id)
);