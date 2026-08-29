# Recall

> **A spaced-repetition learning app that turns what you study into a personalized review queue.**

Recall helps users retain what they learn by tracking their performance on individual topics and intelligently scheduling when each topic should be reviewed again.

Instead of asking *“What should I revise today?”*, Recall answers that question for you.

## Why Recall?

Most learning apps make users decide what to study next.

Recall takes a different approach.

Each time a user reviews a topic, they record how well they understood it. Recall uses that performance data alongside a spaced-repetition algorithm to determine when the topic should return to the user's queue.

Over time, the application builds a picture of the user's learning progress — topic by topic and overall.

## Core Features

* **Personalized review queue** — surfaces topics that are due for review.
* **Spaced repetition** — dynamically schedules future reviews based on performance.
* **Review history** — every attempt is stored so progress can be tracked over time.
* **Study schedules** — users choose which days of the week they want to study.
* **Learning streaks** — tracks consistency across study sessions.
* **Topic notes** — users can record personal notes after reviewing a topic.
* **Learning analytics** — visualizes progress for individual topics and overall learning.
* **Responsive interface** — designed with a mobile-first experience in mind.

## How It Works

```text
Create a topic
      ↓
Review the topic
      ↓
Rate your understanding
      ↓
Recall processes the review
      ↓
Spaced-repetition algorithm calculates
the next review interval
      ↓
Topic returns to the queue when it is due
      ↓
Review again
      ↓
Repeat
```

Every review contributes to the topic's scheduling state, allowing Recall to continuously adapt the review cycle.

## Architecture

Recall is built as a separated frontend and backend application.

```text
┌─────────────────────┐
│      React          │
│     Frontend        │
└─────────┬───────────┘
          │
          │ REST API
          │
┌─────────▼───────────┐
│      Laravel        │
│      Backend        │
└─────────┬───────────┘
          │
┌─────────▼───────────┐
│      Database       │
└─────────────────────┘
```

This separation keeps the presentation layer independent from the application's business logic and data layer.

## Data Model

The core domain is intentionally small:

```text
User
 ├── Topics
 │     └── Reviews
 │
 └── Study Schedules
```

A topic stores its current spaced-repetition state, while individual reviews preserve the historical record of how the user performed.

### Core entities

**Users**

Own topics and study schedules.

**Topics**

Represent things the user wants to learn and contain the current scheduling state.

**Reviews**

Represent individual learning attempts, including the user's score and optional notes.

**Study Schedules**

Represent the days of the week on which the user wants Recall to generate their learning queue.

## Tech Stack

### Frontend

* React
* JavaScript
* Vite
* CSS

### Backend

* Laravel
* PHP
* REST API

### Database

* SQLite during development
* Relational database architecture

## Engineering Focus

Recall is being built with a focus on:

* Clear separation of concerns
* Relational data modelling
* RESTful API design
* Eloquent relationships
* Algorithm-driven scheduling
* Persistent review history
* Data-driven analytics
* Responsive UI architecture

The goal is not simply to build a CRUD application, but to build a system where **user-generated data directly influences application behaviour**.

## Project Status

🚧 **Currently in active development**

The MVP is being developed incrementally, starting with the database and domain model before connecting the Laravel API to the React application.

Planned milestones include:

* [x] Database design
* [x] Laravel migrations
* [x] Eloquent relationships
* [ ] Authentication
* [ ] Topic management API
* [ ] Review API
* [ ] Spaced-repetition engine
* [ ] Personalized queue generation
* [ ] React ↔ Laravel integration
* [ ] Streak tracking
* [ ] Learning analytics
* [ ] Production deployment

## Screenshots

*Coming soon.*

## Local Development

### Clone the repository

```bash
git clone <repository-url>
cd recall
```

### Backend

```bash
cd backend
composer install
php artisan migrate
php artisan serve
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## What I'm Building With Recall

Recall is also a practical exploration of building a complete product from the ground up — from **database modelling and backend architecture to frontend state management, algorithms, and data visualization**.

The project is intentionally being built incrementally, with the goal of understanding each layer rather than hiding the complexity behind abstractions.

---

**Recall — Learn it. Review it. Remember it.**
