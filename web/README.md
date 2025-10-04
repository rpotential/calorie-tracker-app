# Calorie Tracker (Web)

This is a tiny client-side calorie tracker.

How to run

- Open `web/index.html` in your browser.
- Or serve the `web/` folder with a simple static server (Python):

```bash
# Python 3
python3 -m http.server --directory web 8000
# Then open http://localhost:8000
```

Features

- Add, edit, delete entries (food, calories, meal, date)
- Persisted in localStorage
- Filter by date
- 7-day bar chart

Notes

- This is intentionally minimal. If you want a backend, electron/desktop build, or tests, tell me and I'll scaffold it.
