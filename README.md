# Swimlane-Todo-App
# React Todo App with Drag-and-Drop

## Overview

This is a React-based Todo application that utilizes drag-and-drop functionality to manage tasks across different stages: **ToDo**, **In Progress**, and **Done**. The application uses Redux for state management and a JSON server for backend simulation. The user interface is styled with a dark theme and distinct colors for different task statuses.

## Features

- **Create New Todos:** Add new tasks with a title and details.
- **Drag-and-Drop:** Move tasks between different sections (ToDo, In Progress, Done) using drag-and-drop.
- **Status Update:** Automatically updates the task's status in the backend (db.json) when moved between sections.
- **Dark Theme UI:** Stylish dark theme with distinct colors for each status.

## Installation

### Prerequisites

- Node.js (>=14.x.x)
- npm (>=6.x.x) or yarn (>=1.x.x)

### Clone the Repository

```bash
git clone https://github.com/Anshuldhakate/Swimlane-Todo-App
cd your-repo

### Install Dependencies
- npm install

### Run the React Application
- npm start

### Usage
- Create a Todo: Enter a title and details, then click "Add Todo" to create a new task.
- Drag-and-Drop Tasks: Drag tasks between the ToDo, In Progress, and Done sections.
- View Changes: The application reflects changes immediately in the UI, and updates are saved to db.json.
