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

        {"Name":"Mallareddy Seshagiri Rao Garu","Amount":101116,"Village":"Peddavellamilli","Date":"12-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Bandi Veerabhadram Garu","Amount":50000,"Village":"Peddavellamilli","Date":"12-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Devini Satyanarayana Garu","Amount":5000,"Village":"Peddavellamilli","Date":"12-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Akula Srinivasa Rao Garu","Amount":5000,"Village":"Peddavellamilli","Date":"12-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Pillamgoru Nageswara Rao Garu","Amount":3000,"Village":"Peddavellamilli","Date":"12-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Akula Suryavathi Garu","Amount":2000,"Village":"Peddavellamilli","Date":"12-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Vidiyala Srinivasa Rao Garu","Amount":5000,"Village":"Peddavellamilli","Date":"14-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Vidiyala Malleswararao Garu","Amount":5000,"Village":"Peddavellamilli","Date":"14-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Vidiyala Suryachandra Rao Garu","Amount":5000,"Village":"Peddavellamilli","Date":"14-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Maram Paparao Garu","Amount":10116,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Rayudu Venkateswara Rao Garu","Amount":15000,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Nakka Chinna Satyanarayana Garu","Amount":3000,"Village":"Peddavellamilli","Date":"14-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Chittimani Annamraju Garu","Amount":2000,"Village":"Peddavellamilli","Date":"14-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Jujjavarapu Venkata Krishna Garu","Amount":5000,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Kambhampati Veerraju Garu","Amount":3000,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Nandyala Nageswara Rao Garu","Amount":4000,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Gandikota Chinna Subbarao Garu","Amount":5000,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Paathuri Mohan Rao Garu","Amount":2000,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Jelugumalli Vaasthavulu Garu","Amount":500,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Vemuri Muthyalarao Garu","Amount":10116,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Kagithala Yedukondalu Garu","Amount":1000,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Devadula Rambabu Garu","Amount":1116,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Bethina Ramakrishna Garu","Amount":2011,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Gadde Rambabu Garu","Amount":15000,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Yedavalli Venketeswara Rao Garu","Amount":20000,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Karingala Somaraju Garu","Amount":5000,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Paathuri Prabhakar Rao Garu","Amount":5000,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Paathuri Hari Babu Garu","Amount":5016,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Manepalli Naga Pandu Garu","Amount":2116,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Kaati Krishna Garu","Amount":2000,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Tappetla Bodemma Garu","Amount":5000,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Kosanam Pothuraju Garu","Amount":5000,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Tappetla Lakshman Rao Garu","Amount":2000,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Pandraka Pedha Rayappa Garu","Amount":2000,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Vaska Gangaraju Garu","Amount":7500,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Tappetla Chinna Jaggarao Garu","Amount":2000,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Achanta Srihari Garu","Amount":4002,"Village":"Peddavellamilli","Date":"30-04-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Akula Suryachandrarao Garu","Amount":4000,"Village":"Peddavellamilli","Date":"24-05-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Manubothula Jagadeesh Garu","Amount":10000,"Village":"Peddavellamilli","Date":"24-05-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Vemuri Tatarao Garu","Amount":6001,"Village":"Peddavellamilli","Date":"24-05-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Dandamudi SrinivasaRao S/O Tatalu Garu","Amount":2000,"Village":"Peddavellamilli","Date":"24-05-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Karuturi Venkatrao Garu","Amount":10000,"Village":"Peddavellamilli","Date":"24-05-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Yadagani Peddaramayya Garu","Amount":5000,"Village":"Peddavellamilli","Date":"24-05-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Yadagani Peddasatyanarayana Garu","Amount":6000,"Village":"Peddavellamilli","Date":"24-05-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Paanakala Satyanarayana Garu","Amount":2500,"Village":"Peddavellamilli","Date":"24-05-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Paanakala Maavullarao Garu","Amount":2500,"Village":"Peddavellamilli","Date":"24-05-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Challa Suryanarayana Garu","Amount":3000,"Village":"Peddavellamilli","Date":"24-05-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Peethala Sathubabu Garu","Amount":600,"Village":"Peddavellamilli","Date":"24-05-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},
        {"Name":"Parimi Satyanarayana Garu","Amount":20000,"Village":"Peddavellamilli","Date":"24-05-2025","Collectedby":"Vidiyala Suryachandrarao Garu"},          
                  
            
  {"Name": "Bandi Nageswararao Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Prathipati Subbarao Garu", "Amount": 10000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Vidiyala Ramu Garu", "Amount": 10116, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Nachugunta Chalam Garu", "Amount": 500, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Pasupuleti Venkeswararao Garu", "Amount": 4000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Manubothulu Kaasi Viswanadham Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Yadagani Srinivasarao S/O GangaRaaju Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Nandhigani Veeravenkayya Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Marni Srinivasarao Garu", "Amount": 10111, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Akula Nageswararao Garu", "Amount": 9000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Nuthalapati Venkatesh Garu", "Amount": 3000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Yadagani Veera Venkata Satyanarayana Garu S/O Ramarao", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Karuturi Madhubabu Garu", "Amount": 20116, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Gandham Ramesh Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Kadiyam Suryanarayana Garu", "Amount": 5500, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Seethamsetti Gandhi Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Vidiyala Ramakrishna Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Ramavarapu Srihari Garu", "Amount": 5116, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Bunga Raju(Dr.Raju) Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Mullapudi Venkateswararao Garu", "Amount": 15000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Simhadri Bhaskarrao Garu", "Amount": 5011, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Athinti Raju Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Ricemill Eswar Rao Garu", "Amount": 1000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Kalakonda Preetham Garu", "Amount": 10000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Vepuri Sagar(Bhadram Gaari Alludu) Garu", "Amount": 10000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Kalakonda TrilokanadhaRao Garu", "Amount": 50000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Isukapati Pedhajarji Garu", "Amount": 3000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Yadagani Venkataratnam Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Mullapudi Seshagirirao Garu", "Amount": 6010, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Bollina Srinivasa Rao Garu", "Amount": 10000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Yennani Prasadrao Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Vallabhani Ramarao Garu", "Amount": 500, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Yaganti Mohan Garu", "Amount": 10000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Yadagani Krishna Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Paladugula Ramavatharam Garu", "Amount": 3000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Kukkanda Brahmam Garu", "Amount": 1000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Gandikota Pedhasubbarao Garu", "Amount": 3000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Devina Venkateswararao Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Pillamgoru Pothuraju Garu", "Amount": 4000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Kolla Srinu Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Marni Sivaji Ganesh Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Marni Gangadhara Garu", "Amount": 10000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Bandi Ramakrishna Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Srigiri Krishna Garu", "Amount": 3000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Manubothula Krishna Garu", "Amount": 10116, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Injavarapu Venkataramana Garu", "Amount": 5116, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Kasukurthi Sriramulu Garu", "Amount": 5000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Vidiyala Visalakshmi Garu", "Amount": 1111, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Akula Pedha Veerraju Garu", "Amount": 2000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},
  {"Name": "Manepalli Suribabu Garu", "Amount": 4000, "Village": "Peddavellamilli", "Date": "24-05-2025", "Collectedby": "Vidiyala Suryachandrarao Garu"},

  
 
          


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
    const villages = [...new Set(donationsData.map(d => d.Village))];
    villages.forEach(village => {
        const option = document.createElement('option');
        option.value = village;
        option.textContent = village;
        villageFilter.appendChild(option);
    });
}

function calculateTotalDonations(donations) {
    return donations.reduce((total, donation) => {
        const amount = parseFloat(donation.Amount);
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
    const collectorTotals = {};
    donations.forEach(donation => {
        const collector = donation.Collectedby;
        const amount = parseFloat(donation.Amount);
        if (!collectorTotals[collector]) collectorTotals[collector] = 0;
        collectorTotals[collector] += isNaN(amount) ? 0 : amount;
    });
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
    donations.forEach((donation, index) => {
        const formattedAmount = new Intl.NumberFormat('en-IN', {
            style: 'currency', currency: 'INR', maximumFractionDigits: 0
        }).format(donation.Amount);
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${donation.Name}</td>
            <td>${formattedAmount}</td>
            <td>${donation.Village}</td>
            <td>${donation.Date}</td>
            <td>${donation.Collectedby}</td>
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
        const matchesSearch = (donation.Name || '').toLowerCase().includes(searchTerm) ||
                              (donation.Collectedby || '').toLowerCase().includes(searchTerm) ||
                              (donation.Village || '').toLowerCase().includes(searchTerm);
        const matchesVillage = !villageFilter || donation.Village === villageFilter;
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