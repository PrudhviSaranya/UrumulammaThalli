# Urumulamma Thalli Festival Website

A responsive website for displaying festival events, donations, and expenses for the Urumulamma Thalli Festival.

## Features

- Responsive design that works on all devices
- Modern and clean user interface
- Dynamic content loading
- Event calendar
- Donations tracking
- Expenses management
- Contact form
- Smooth scrolling navigation

## File Structure

```
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Custom styles
├── js/
│   └── main.js         # JavaScript functionality
└── images/             # Directory for images
```

## Setup Instructions

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Customize the content in `js/main.js` to update:
   - Events data
   - Donations data
   - Expenses data

## Customization

### Updating Events
Edit the `eventsData` array in `js/main.js` to add or modify events:
```javascript
const eventsData = [
    {
        title: "Event Title",
        date: "YYYY-MM-DD",
        time: "HH:MM",
        location: "Event Location",
        description: "Event Description"
    },
    // Add more events...
];
```

### Updating Donations
Edit the `donationsData` array in `js/main.js` to add or modify donations:
```javascript
const donationsData = [
    {
        name: "Donor Name",
        amount: "₹Amount",
        date: "YYYY-MM-DD",
        purpose: "Purpose"
    },
    // Add more donations...
];
```

### Updating Expenses
Edit the `expensesData` array in `js/main.js` to add or modify expenses:
```javascript
const expensesData = [
    {
        item: "Item Name",
        amount: "₹Amount",
        date: "YYYY-MM-DD",
        description: "Description"
    },
    // Add more expenses...
];
```

### Changing Colors
Edit the CSS variables in `css/style.css` to change the color scheme:
```css
:root {
    --primary-color: #4a6baf;
    --secondary-color: #2c3e50;
    --accent-color: #e74c3c;
}
```

## Adding Images

1. Place your images in the `images` directory
2. Update the hero section background image in `css/style.css`:
```css
.hero-section {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('../images/your-image.jpg');
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## License

This project is open source and available under the MIT License. 