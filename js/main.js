// Sample data for events, donations, and expenses
const eventsData = [
    {
        title: "Ganganamma Urumulamma Amma Vaari Jaathara",
        date: "8/6/2025",
        time: "All Day",
        location: "Vellamilli Panchayathi",
        description: "Annual traditional festival celebration with cultural programs and rituals"
    },
     
];

const donationsData = [
    {
        name: "Mallareddy Seshagiri Rao Garu",
        amount: "₹1,01,116",
        village: "Pedda Vellamilli",
        date: "12/04/2025"
    },
    {
        name: "Bandi VeeraBhadra Rao Garu",
        amount: "₹50,000",
        village: "Pedda Vellamilli",
        date: "12/04/2025"
    },
    {
        name: "Akula Srinu Garu",
        amount: "₹5,000",
        village: "Pedda Vellamilli",
        date: "12/04/2025"
    },
    {
        name: "Devini Satyanarayana Garu",
        amount: "₹5,001",
        village: "Pedda Vellamilli",
        date: "12/04/2025"
    },
    {
        name: "Pillamgoru Nageswara Rao Garu",
        amount: "₹3,000",
        village: "Pedda Vellamilli",
        date: "12/04/2025"
    },
    {
        name: "Akula Suryavathi Garu",
        amount: "₹2,000",
        village: "Pedda Vellamilli",
        date: "12/04/2025"
    },
    {
        name: "Vidiyala Srinivasa Rao Garu",
        amount: "₹5,000",
        village: "Pedda Vellamilli",
        date: "14/04/2025"
    },
    {
        name: "Vidiyala Malleswara Rao Garu",
        amount: "₹5,000",
        village: "Pedda Vellamilli",
        date: "14/04/2025"
    },
    {
        name: "Vidiyala Suryachandra Rao Garu",
        amount: "₹5,000",
        village: "Pedda Vellamilli",
        date: "14/04/2025"
    },
    {
        name: "Nakka Chinna Satyanarayana Garu",
        amount: "₹3,000",
        village: "Pedda Vellamilli",
        date: "14/04/2025"
    },
    {
        name: "Chittimani Annam Raju Garu",
        amount: "₹2,000",
        village: "Pedda Vellamilli",
        date: "14/04/2025"
    },
    {
        name: "Maram Paparao Garu",
        amount: "₹10,116",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Rayudu Venkateswara Rao Garu",
        amount: "₹15,000",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Jujjavarapu Venkata Krishna Garu",
        amount: "₹5,000",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Kambhampati Veerraju Garu",
        amount: "₹3,000",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Nandyala Nageswara Rao Garu",
        amount: "₹4,000",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Gandikota Chinna Subbarao Garu",
        amount: "₹5,000",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Paathuri Mohan Rao Garu",
        amount: "₹2,000",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Jelugumalli Vaasthavulu",
        amount: "₹500",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Vemuri Muthyalarao Garu",
        amount: "₹10,000",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Kagithala Yedukondalu Garu",
        amount: "₹1,000",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Devadula Rambabu Garu",
        amount: "₹1,116",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Bethina Ramakrishna Garu",
        amount: "₹2,011",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Gadde Rambabu Garu",
        amount: "₹15,000",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Yedavalli Venketeswara Rao Garu",
        amount: "₹15,000",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Karingala Somaraju Garu",
        amount: "₹5,000",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Paathuri Prabhakar Rao Garu",
        amount: "₹5,000",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Paathuri Hari Babu Garu",
        amount: "₹5,016",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Manepalli Naga Pandu Garu",
        amount: "₹2,116",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Kaati Krishna Garu",
        amount: "₹2,000",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Tappetla Bodemma Garu",
        amount: "₹5,000",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Kosanam Pothuraju Garu",
        amount: "₹5,000",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Tappetla Lakshman Rao Garu",
        amount: "₹2,000",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Pandraka Pedha Rayappa Garu",
        amount: "₹2,000",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Vaska Gangaraju Garu",
        amount: "₹7,500",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Tappetla Chinna Jaggarao Garu",
        amount: "₹2,000",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Achanta Srihari Garu",
        amount: "₹3,002",
        village: "Vellamilli",
        date: "30/04/2025"
    },
];

const expensesData = [
    {
        item: "Expense1",
        amount: "₹",
        date: "01-04-2025",
        description: ""
    },
    
];

// Function to load events
function loadEvents() {
    const eventsContainer = document.getElementById('events-container');
    eventsContainer.innerHTML = '';

    eventsData.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'col-md-4 mb-4 fade-in';
        eventCard.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">${event.title}</h5>
                    <p class="card-text">
                        <i class="fas fa-calendar-alt"></i> ${event.date}<br>
                        <i class="fas fa-clock"></i> ${event.time}<br>
                        <i class="fas fa-map-marker-alt"></i> ${event.location}
                    </p>
                    <p class="card-text">${event.description}</p>
                </div>
            </div>
        `;
        eventsContainer.appendChild(eventCard);
    });
}

// Function to populate filter options
function populateFilters() {
    const villageFilter = document.getElementById('village-filter');
    
    // Get unique villages
    const villages = [...new Set(donationsData.map(d => d.village))];
    
    // Populate village filter
    villages.forEach(village => {
        const option = document.createElement('option');
        option.value = village;
        option.textContent = village;
        villageFilter.appendChild(option);
    });
}

// Function to load donations
function loadDonations() {
    const tableBody = document.getElementById('donations-table');
    tableBody.innerHTML = ''; // Clear existing content

    donationsData.forEach(donation => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${donation.name}</td>
            <td>${donation.amount}</td>
            <td>${donation.village}</td>
            <td>${donation.date}</td>
        `;
        tableBody.appendChild(row);
    });

    // Update village filter options
    const villageFilter = document.getElementById('village-filter');
    const villages = [...new Set(donationsData.map(d => d.village))];
    villageFilter.innerHTML = '<option value="">All Villages</option>' +
        villages.map(village => `<option value="${village}">${village}</option>`).join('');
}

// Function to filter donations
function filterDonations() {
    const searchTerm = document.getElementById('donation-search').value.toLowerCase();
    const villageFilter = document.getElementById('village-filter').value;
    const rows = document.querySelectorAll('#donations-table tr');

    rows.forEach(row => {
        const name = row.cells[0].textContent.toLowerCase();
        const village = row.cells[2].textContent;
        const matchesSearch = name.includes(searchTerm);
        const matchesVillage = !villageFilter || village === villageFilter;

        row.style.display = matchesSearch && matchesVillage ? '' : 'none';
    });
}

// Function to load expenses
function loadExpenses() {
    const expensesTable = document.getElementById('expenses-table').getElementsByTagName('tbody')[0];
    expensesTable.innerHTML = '';

    expensesData.forEach(expense => {
        const row = expensesTable.insertRow();
        row.innerHTML = `
            <td>${expense.item}</td>
            <td class="text-end">${expense.amount}</td>
            <td>${expense.date}</td>
            <td>${expense.description}</td>
        `;
    });
}

// Function to handle contact form submission
function handleContactForm(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    
    // Here you would typically send the form data to a server
    alert('Thank you for your message! We will get back to you soon.');
    form.reset();
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Load all data
    loadEvents();
    populateFilters();
    loadDonations();
    loadExpenses();

    // Add event listeners for filters
    document.getElementById('donation-search').addEventListener('input', filterDonations);
    document.getElementById('village-filter').addEventListener('change', filterDonations);

    // Add event listener for contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}); 

// Function to calculate and display total donation amount
function displayTotalDonations() {
    // Calculate the total amount
    const totalAmount = donationsData.reduce((total, donation) => {
        // Remove '₹' and commas, and convert the amount to a number
        const amount = parseFloat(donation.amount.replace('₹', '').replace(/,/g, ''));
        return total + amount;
    }, 0);

    // Get the total amount element
    const totalAmountElement = document.getElementById('total-donations');

    // Update the element's text content
    totalAmountElement.textContent = `Total Donations: ₹${totalAmount.toLocaleString()}`;
}

// Modify the loadDonations function to call displayTotalDonations after loading the donations
function loadDonations() {
    const tableBody = document.getElementById('donations-table');
    tableBody.innerHTML = ''; // Clear existing content

    donationsData.forEach(donation => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${donation.name}</td>
            <td>${donation.amount}</td>
            <td>${donation.village}</td>
            <td>${donation.date}</td>
        `;
        tableBody.appendChild(row);
    });

    // Call displayTotalDonations to show the total amount
    displayTotalDonations();

    // Update village filter options
    const villageFilter = document.getElementById('village-filter');
    const villages = [...new Set(donationsData.map(d => d.village))];
    villageFilter.innerHTML = '<option value="">All Villages</option>' +
        villages.map(village => `<option value="${village}">${village}</option>`).join('');
}
