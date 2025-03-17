// API URLs and keys
// ADD YOUR API CODE
// website link   https://ipgeolocation.io/
const IP_API_URL = 'https://api.ipgeolocation.io/ipgeo?apiKey=YOUR_API_CODE&ip=';
// website link   https://apilayer.com/
const MOBILE_API_URL = 'http://apilayer.net/api/validate?access_key=YOUR_API_CODE&number=';
// website link    https://www.whoisxmlapi.com/
const DOMAIN_API_URL = 'https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=YOUR_API_CODE&domainName=';

const apiKey = 'YOUR_API_CODE'; // Replace with your Google Safe Browsing API key



// Function to fetch IP details

function searchIP() {
    const ip = document.getElementById('ipInput').value;
    const resultBox = document.getElementById('ipResult');
    resultBox.innerText = 'Loading...';

    fetch(IP_API_URL + ip)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Format the IP address information
            const ipInfo = formatIPInfo(data);
            resultBox.innerHTML = ipInfo; // Display the formatted data
        })
        .catch(error => {
            console.error('Error fetching IP details:', error);
            resultBox.innerText = `Error: ${error.message}`;
        });
}

// Function to format IP address information
function formatIPInfo(data) {
    return `
        <div class="ip-info">
            <h3>IP Address Details</h3>
            <p><strong>IP:</strong> ${data.ip || 'N/A'}</p>
            <p><strong>Continent:</strong> ${data.continent_name || 'N/A'} (${data.continent_code || 'N/A'})</p>
            <p><strong>Country:</strong> ${data.country_name || 'N/A'} (${data.country_code2 || 'N/A'})</p>
            <p><strong>Official Country Name:</strong> ${data.country_name_official || 'N/A'}</p>
            <p><strong>Capital:</strong> ${data.country_capital || 'N/A'}</p>
            <p><strong>State/Province:</strong> ${data.state_prov || 'N/A'} (${data.state_code || 'N/A'})</p>
            <p><strong>District:</strong> ${data.district || 'N/A'}</p>
            <p><strong>City:</strong> ${data.city || 'N/A'}</p>
            <p><strong>Zipcode:</strong> ${data.zipcode || 'N/A'}</p>
            <p><strong>Latitude:</strong> ${data.latitude || 'N/A'}</p>
            <p><strong>Longitude:</strong> ${data.longitude || 'N/A'}</p>
            <p><strong>Is EU:</strong> ${data.is_eu ? 'Yes' : 'No'}</p>
            <p><strong>Calling Code:</strong> ${data.calling_code || 'N/A'}</p>
            <p><strong>Country TLD:</strong> ${data.country_tld || 'N/A'}</p>
            <p><strong>Languages:</strong> ${data.languages || 'N/A'}</p>
            <p><strong>Country Flag:</strong> <img src="${data.country_flag}" alt="Flag" style="height: 20px;"></p>
            <p><strong>ISP:</strong> ${data.isp || 'N/A'}</p>
            <p><strong>Organization:</strong> ${data.organization || 'N/A'}</p>
            <p><strong>Currency:</strong> ${data.currency?.code || 'N/A'} (${data.currency?.name || 'N/A'}) - ${data.currency?.symbol || 'N/A'}</p>
            <h4>Time Zone</h4>
            <p><strong>Name:</strong> ${data.time_zone?.name || 'N/A'}</p>
            <p><strong>Offset:</strong> ${data.time_zone?.offset || 'N/A'}</p>
            <p><strong>Current Time:</strong> ${data.time_zone?.current_time || 'N/A'}</p>
            <p><strong>Is DST:</strong> ${data.time_zone?.is_dst ? 'Yes' : 'No'}</p>
        </div>
    `;
}


// Function to fetch mobile number details


function searchMobile() {
    const mobile = document.getElementById('mobileInput').value;
    const resultBox = document.getElementById('mobileResult');
    resultBox.innerText = 'Loading...';

    fetch(MOBILE_API_URL + mobile)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Format the mobile number information
            const mobileInfo = formatMobileInfo(data);
            resultBox.innerHTML = mobileInfo; // Display the formatted data
        })
        .catch(error => {
            console.error('Error fetching mobile details:', error);
            resultBox.innerText = `Error: ${error.message}`;
        });
}

// Function to format mobile number information
function formatMobileInfo(data) {
    return `
        <div class="mobile-info">
            <h3>Mobile Number Details</h3>
            <p><strong>Valid:</strong> ${data.valid ? 'Yes' : 'No'}</p>
            <p><strong>Number:</strong> ${data.number || 'N/A'}</p>
            <p><strong>Local Format:</strong> ${data.local_format || 'N/A'}</p>
            <p><strong>International Format:</strong> ${data.international_format || 'N/A'}</p>
            <p><strong>Country Prefix:</strong> ${data.country_prefix || 'N/A'}</p>
            <p><strong>Country Code:</strong> ${data.country_code || 'N/A'}</p>
            <p><strong>Country Name:</strong> ${data.country_name || 'N/A'}</p>
            <p><strong>Location:</strong> ${data.location || 'N/A'}</p>
            <p><strong>Carrier:</strong> ${data.carrier || 'N/A'}</p>
            <p><strong>Line Type:</strong> ${data.line_type || 'N/A'}</p>
        </div>
    `;
}


// Function to fetch domain details


function searchDomain() {
    const domain = document.getElementById('domainInput').value;
    const resultBox = document.getElementById('domainResult');
    resultBox.innerText = 'Loading...';

    // Update the API URL to request JSON output
    const apiUrl = `https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=at_hOivq3Zs32vLRZ7hPGydIVMtKVoC2&domainName=${domain}&outputFormat=JSON`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // Parse the response as JSON
        })
        .then(data => {
            // Format the domain information
            const domainInfo = formatDomainInfo(data);
            resultBox.innerHTML = domainInfo; // Display the formatted data
        })
        .catch(error => {
            console.error('Error fetching domain records:', error);
            resultBox.innerText = `Error: ${error.message}`;
        });
}

// Function to format domain information



function formatDomainInfo(data) {
    const whoisRecord = data.WhoisRecord || {};
    const registrant = whoisRecord.registrant || {};
    const admin = whoisRecord.administrativeContact || {};
    const tech = whoisRecord.technicalContact || {};

    return `
        <div class="domain-info">
            <h3>Domain Age</h3>
            <p><strong>Created Date:</strong> ${whoisRecord.createdDate || 'N/A'}</p>
            <p><strong>Updated Date:</strong> ${whoisRecord.updatedDate || 'N/A'}</p>
            <p><strong>Expires Date:</strong> ${whoisRecord.expiresDate || 'N/A'}</p>
            <p><strong>Estimated Domain Age:</strong> ${whoisRecord.estimatedDomainAge || 'N/A'} day(s)</p>

            <h3>Registrar Information</h3>
            <p><strong>Registrar Name:</strong> ${whoisRecord.registrarName || 'N/A'}</p>
            <p><strong>WHOIS Server:</strong> ${whoisRecord.registrarWHOISServer || 'N/A'}</p>

            <h3>Name Servers</h3>
            <ul>${(whoisRecord.nameServers?.hostNames || []).map(ns => `<li>${ns}</li>`).join('')}</ul>

            <h3>Status</h3>
            <ul>${(whoisRecord.domainStatus || []).map(status => `<li>${status}</li>`).join('')}</ul>

            <h3>Registrant Contact</h3>
            <p><strong>Name:</strong> ${registrant.name || 'N/A'}</p>
            <p><strong>Organization:</strong> ${registrant.organization || 'N/A'}</p>
            <p><strong>Street:</strong> ${registrant.street1 || 'N/A'}</p>
            <p><strong>City:</strong> ${registrant.city || 'N/A'}</p>
            <p><strong>State/Province:</strong> ${registrant.state || 'N/A'}</p>
            <p><strong>Postal Code:</strong> ${registrant.postalCode || 'N/A'}</p>
            <p><strong>Country:</strong> ${registrant.country || 'N/A'}</p>
            <p><strong>Email:</strong> ${registrant.email || 'N/A'}</p>
            <p><strong>Phone:</strong> ${registrant.telephone || 'N/A'}</p>

            <h3>Administrative Contact</h3>
            <p><strong>Name:</strong> ${admin.name || 'N/A'}</p>
            <p><strong>Organization:</strong> ${admin.organization || 'N/A'}</p>
            <p><strong>Street:</strong> ${admin.street1 || 'N/A'}</p>
            <p><strong>City:</strong> ${admin.city || 'N/A'}</p>
            <p><strong>State/Province:</strong> ${admin.state || 'N/A'}</p>
            <p><strong>Postal Code:</strong> ${admin.postalCode || 'N/A'}</p>
            <p><strong>Country:</strong> ${admin.country || 'N/A'}</p>
            <p><strong>Email:</strong> ${admin.email || 'N/A'}</p>
            <p><strong>Phone:</strong> ${admin.telephone || 'N/A'}</p>

            <h3>Technical Contact</h3>
            <p><strong>Name:</strong> ${tech.name || 'N/A'}</p>
            <p><strong>Organization:</strong> ${tech.organization || 'N/A'}</p>
            <p><strong>Street:</strong> ${tech.street1 || 'N/A'}</p>
            <p><strong>City:</strong> ${tech.city || 'N/A'}</p>
            <p><strong>State/Province:</strong> ${tech.state || 'N/A'}</p>
            <p><strong>Postal Code:</strong> ${tech.postalCode || 'N/A'}</p>
            <p><strong>Country:</strong> ${tech.country || 'N/A'}</p>
            <p><strong>Email:</strong> ${tech.email || 'N/A'}</p>
            <p><strong>Phone:</strong> ${tech.telephone || 'N/A'}</p>
        </div>
    `;
}


// Function to check link safety
async function checkLink() {
    const url = document.getElementById('linkInput').value;
    const resultBox = document.getElementById('linkResult');
    resultBox.innerText = 'Loading...';

    const apiKey = 'AIzaSyAY-Wxg6Wc-rZtd6S1go_vq-lJD0wE1e6s'; // Replace with your Google Safe Browsing API key
    const apiUrl = `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${apiKey}`;

    const requestBody = {
        client: {
            clientId: "your-client-id", // Replace with your client ID
            clientVersion: "1.0"
        },
        threatInfo: {
            threatTypes: ["MALWARE", "SOCIAL_ENGINEERING", "UNWANTED_SOFTWARE", "POTENTIALLY_HARMFUL_APPLICATION"],
            platformTypes: ["ANY_PLATFORM"],
            threatEntryTypes: ["URL"],
            threatEntries: [{ url: url }]
        }
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json();

        if (data.matches && data.matches.length > 0) {
            resultBox.innerHTML = `
                <p style="color: red;">⚠️ This link is unsafe!</p>
                <p>Threat Type: ${data.matches[0].threatType}</p>
                <p>Platform: ${data.matches[0].platformType}</p>
            `;
        } else {
            resultBox.innerHTML = `<p style="color: green;">✅ This link is safe!</p>`;
        }
    } catch (error) {
        console.error('Error:', error);
        resultBox.innerText = 'An error occurred while checking the link.';
    }
}
