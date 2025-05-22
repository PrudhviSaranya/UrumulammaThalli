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
        collectedby:"Vidiyala Suryachandrarao Garu",
        amount: "₹1,01,116",
        village: "Pedda Vellamilli",
        date: "12/04/2025"
    },
    {
        name: "Bandi VeeraBhadra Rao Garu",
        collectedby:"Vidiyala Suryachandrarao Garu",
        amount: "₹50,000",
        village: "Pedda Vellamilli",
        date: "12/04/2025"
    },
    {
        name: "Akula Srinu Garu",
        collectedby:"Vidiyala Suryachandrarao Garu",
        amount: "₹5,000",
        village: "Pedda Vellamilli",
        date: "12/04/2025"
    },
    {
        name: "Devini Satyanarayana Garu",
        collectedby:"Vidiyala Suryachandrarao Garu",
        amount: "₹5,001",
        village: "Pedda Vellamilli",
        date: "12/04/2025"
    },
    {
        name: "Pillamgoru Nageswara Rao Garu",
        collectedby:"Vidiyala Suryachandrarao Garu",
        amount: "₹3,000",
        village: "Pedda Vellamilli",
        date: "12/04/2025"
    },
    {
        name: "Akula Suryavathi Garu",
        collectedby:"Vidiyala Suryachandrarao Garu",
        amount: "₹2,000",
        village: "Pedda Vellamilli",
        date: "12/04/2025"
    },
    {
        name: "Vidiyala Srinivasa Rao Garu",
        collectedby:"Vidiyala Suryachandrarao Garu",
        amount: "₹5,000",
        village: "Pedda Vellamilli",
        date: "14/04/2025"
    },
    {
        name: "Vidiyala Malleswara Rao Garu",
        collectedby:"Vidiyala Suryachandrarao Garu",
        amount: "₹5,000",
        village: "Pedda Vellamilli",
        date: "14/04/2025"
    },
    {
        name: "Vidiyala Suryachandra Rao Garu",
        collectedby:"Vidiyala Suryachandrarao Garu",
        amount: "₹5,000",
        village: "Pedda Vellamilli",
        date: "14/04/2025"
    },
    {
        name: "Nakka Chinna Satyanarayana Garu",
        collectedby:"Vidiyala Suryachandrarao Garu",
        amount: "₹3,000",
        village: "Pedda Vellamilli",
        date: "14/04/2025"
    },
    {
        name: "Chittimani Annam Raju Garu",
        collectedby:"Vidiyala Suryachandrarao Garu",
        amount: "₹2,000",
        village: "Pedda Vellamilli",
        date: "14/04/2025"
    },
    {
        name: "Maram Paparao Garu",
        collectedby:"Vidiyala Suryachandrarao Garu",
        amount: "₹10,116",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Rayudu Venkateswara Rao Garu",
        collectedby:"Vidiyala Suryachandrarao Garu",
        amount: "₹15,000",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Jujjavarapu Venkata Krishna Garu",
        collectedby:"Vidiyala Suryachandrarao Garu",
        amount: "₹5,000",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Kambhampati Veerraju Garu",
        collectedby:"Vidiyala Suryachandrarao Garu",
        amount: "₹3,000",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Nandyala Nageswara Rao Garu",
        collectedby:"Vidiyala Suryachandrarao Garu",
        amount: "₹4,000",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Gandikota Chinna Subbarao Garu",
        collectedby:"Vidiyala Suryachandrarao Garu",
        amount: "₹5,000",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Paathuri Mohan Rao Garu",
        collectedby:"Vidiyala Suryachandrarao Garu",
        amount: "₹2,000",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Jelugumalli Vaasthavulu",
        collectedby:"Vidiyala Suryachandrarao Garu",
        amount: "₹500",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Vemuri Muthyalarao Garu",
        collectedby:"Vidiyala Suryachandrarao Garu",
        amount: "₹10,000",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Kagithala Yedukondalu Garu",
        collectedby:"Vidiyala Suryachandrarao Garu",
        amount: "₹1,000",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Devadula Rambabu Garu",
        collectedby:"Vidiyala Suryachandrarao Garu",
        amount: "₹1,116",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Bethina Ramakrishna Garu",
        collectedby:"Vidiyala Suryachandrarao Garu",
        amount: "₹2,011",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Gadde Rambabu Garu",
        collectedby:"Vidiyala Suryachandrarao Garu",
        amount: "₹10,000",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Yedavalli Koteswara Rao Garu",
        collectedby:"Vidiyala Suryachandrarao Garu",
        amount: "₹20,000",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Karingala Somaraju Garu",
        collectedby:"Vidiyala Suryachandrarao Garu",
        amount: "₹5,000",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Paathuri Prabhakar Rao Garu",
        collectedby:"Vidiyala Suryachandrarao Garu",
        amount: "₹5,000",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Paathuri Hari Babu Garu",
        collectedby:"Vidiyala Suryachandrarao Garu",
        amount: "₹5,016",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Manepalli Naga Pandu Garu",
        collectedby:"Vidiyala Suryachandrarao Garu",
        amount: "₹2,116",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Kaati Krishna Garu",
        collectedby:"Vidiyala Suryachandrarao Garu",
        amount: "₹2,000",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Tappetla Bodemma Garu",
        collectedby:"Vidiyala Suryachandrarao Garu",
        amount: "₹5,000",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Kosanam Pothuraju Garu",
        collectedby:"Vidiyala Suryachandrarao Garu",
        amount: "₹5,000",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Tappetla Lakshman Rao Garu",
        collectedby:"Vidiyala Suryachandrarao Garu",
        amount: "₹2,000",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Pandraka Pedha Rayappa Garu",
        collectedby:"Vidiyala Suryachandrarao Garu",
        amount: "₹2,000",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Vaska Gangaraju Garu",
        collectedby:"Vidiyala Suryachandrarao Garu",
        amount: "₹7,500",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Tappetla Chinna Jaggarao Garu",
        collectedby:"Vidiyala Suryachandrarao Garu",
        amount: "₹2,000",
        village: "Vellamilli",
        date: "30/04/2025"
    },
    {
        name: "Achanta Srihari Garu",
        collectedby:"Vidiyala Suryachandrarao Garu",
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
    villageFilter.innerHTML = '<option value="">All Villages</option>';
    const villages = [...new Set(donationsData.map(d => d.village))];
    villages.forEach(village => {
        const option = document.createElement('option');
        option.value = village;
        option.textContent = village;
        villageFilter.appendChild(option);
    });
}

function calculateTotalDonations(donations) {
    return donations.reduce((total, donation) => {
        // Remove ₹ symbol and commas, then convert to number
        const amount = parseFloat(donation.amount.replace('₹', '').replace(/,/g, ''));
        return total + (isNaN(amount) ? 0 : amount);
    }, 0);
}

function updateTotalDonations(donations) {
    const total = calculateTotalDonations(donations);
    const formattedTotal = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(total);
    
    document.getElementById('total-donations').innerHTML = `
        <h3 class="text-primary">Total Donations: ${formattedTotal}</h3>
    `;
}

function updateCollectorDonations(donations) {
    // Calculate total per collector
    const collectorTotals = {};
    donations.forEach(donation => {
        const collector = donation.collectedby;
        const amount = parseFloat(donation.amount.replace('₹', '').replace(/,/g, ''));
        if (!collectorTotals[collector]) collectorTotals[collector] = 0;
        collectorTotals[collector] += isNaN(amount) ? 0 : amount;
    });
    
    // Format and display in a single line
    let html = '<h4 class="text-primary">Total donations collected by:</h4>';
    Object.entries(collectorTotals).forEach(([collector, total]) => {
        const formatted = new Intl.NumberFormat('en-IN', {
            style: 'currency', currency: 'INR', maximumFractionDigits: 0
        }).format(total);
        html += `<p class="mb-1"><strong>${collector}:</strong> ${formatted}</p>`;
    });
    document.getElementById('collector-donations').innerHTML = html;
}

function loadDonations(donations = donationsData) {
    const tableBody = document.getElementById('donations-table');
    tableBody.innerHTML = '';
    donations.forEach(donation => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${donation.name}</td>
            <td>${donation.collectedby}</td>
            <td>${donation.amount}</td>
            <td>${donation.village}</td>
            <td>${donation.date}</td>
        `;
        tableBody.appendChild(row);
    });
    updateTotalDonations(donations);
    updateCollectorDonations(donations);
}

function filterDonations() {
    const searchTerm = document.getElementById('donation-search').value.toLowerCase();
    const villageFilter = document.getElementById('village-filter').value;
    const filteredDonations = donationsData.filter(donation => {
        const matchesSearch = donation.name.toLowerCase().includes(searchTerm) ||
                            donation.collectedby.toLowerCase().includes(searchTerm) ||
                            donation.village.toLowerCase().includes(searchTerm);
        const matchesVillage = !villageFilter || donation.village === villageFilter;
        return matchesSearch && matchesVillage;
    });
    loadDonations(filteredDonations);
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