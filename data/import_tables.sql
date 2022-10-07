
BEGIN;

DROP TABLE IF EXISTS "user", 
"category", 
"article";

-- Create user table
CREATE TABLE IF NOT EXISTS "user" (
  "user_id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "email" TEXT NOT NULL,
  "firstname"  TEXT NOT NULL,
  "lastname"  TEXT NOT NULL,
  "password"  TEXT NOT NULL
);

-- Create category table
CREATE TABLE IF NOT EXISTS "category" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "route" TEXT NOT NULL,
  "label"  TEXT NOT NULL
);

-- Create article table
CREATE TABLE IF NOT EXISTS "article" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "category" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "excerpt" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "category_id" INTEGER NOT NULL REFERENCES "category"("id"),
    "user_id" INTEGER NOT NULL REFERENCES "user"("user_id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ
);

-- Seeding
INSERT INTO "user" ("email", "firstname", "lastname", "password")
VALUES  ('jeremyatn@gmail.com', 'Jeremy','Antoni', 'mdrlol'),
        ('jeanpeuplu@gmail.com', 'Jean','Peuplu', 'lol');

INSERT INTO "category" ("route", "label")
VALUES  ('/funny', 'Funny'),
        ('/random', 'Random'),
        ('/science', 'Science'),
        ('/recipe', 'Recipe');

INSERT INTO "article" ("category", "slug", "title", "excerpt", "content", "category_id", "user_id")
VALUES ('Funny', 'angular-une-fausse-bonne-idee', 'Angular, une fausse bonne idée ?', 'Lorem <em>ipsum dolor</em> sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <strong>Ut enim ad minim</strong> veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <strong>commodo consequat</strong>. Duis aute irure dolor in reprehenderit in voluptate velit esse <em>cillum dolore</em> eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Angular, une fausse bonne idée ? Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 1, 1),
('Random', 'pourquoi-a-t-on-besoin-de-developpeurs', 'Pourquoi a-t-on besoin de développeurs ?', 'Excepteur <strong>sint occaecat cupidatat</strong> non proident, sunt in culpa qui officia deserunt <em>mollit anim</em> id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <strong>Ut</strong> enim ad minim veniam, <em>quis nostrud</em> exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 'Pourquoi a-t-on besoin de développeurs ? Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 4, 2);

COMMIT;