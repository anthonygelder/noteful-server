CREATE TABLE notes (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    note_name TEXT NOT NULL,
    content TEXT NOT NULL,
    date_created TIMESTAMP NOT NULL DEFAULT now()
);