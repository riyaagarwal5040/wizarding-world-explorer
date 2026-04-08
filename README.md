# WizardVerse

## Project Purpose

WizardVerse is a simple Harry Potter character explorer built to practice working with APIs, DOM manipulation, searching, filtering, sorting, and interactive UI features using plain HTML, CSS, and JavaScript.

## API Used

This project uses the Potterhead API:

- API URL: `https://potterhead-api.vercel.app/api/characters`

The API provides character data such as:

- name
- house
- species
- wizard
- ancestry
- wand
- patronus

## Technologies Used

- HTML
- CSS
- JavaScript
- Fetch API

## Current Features

- Display Harry Potter character data from an API
- Search characters using keywords
- Filter characters by house
- Sort characters in A-Z and Z-A order
- Toggle between dark mode and light mode
- Interactive favorite button on every card
- Responsive card layout for desktop, tablet, and mobile
- Message shown when no results are found

## Planned Improvements

- Save favorite characters using local storage
- Add more filters such as species or wizard status
- Improve card styling and spacing further
- Add better error handling and loading feedback

## Project Structure

- `index.html` - page structure
- `style.css` - page design and layout
- `script.js` - API fetch, search, filter, sort, theme toggle, and favorite button logic

## How To Set Up And Run

1. Download or open the project folder.
2. Make sure these files are present:
   `index.html`, `style.css`, and `script.js`
3. Open `index.html` in a browser.

No installation is required because this project uses only plain HTML, CSS, and JavaScript.

## Notes

- Favorites work only during the current session.
- Favorite selections are not saved after refreshing the page.
- Search, filtering, and sorting are handled in JavaScript using higher-order array functions.
