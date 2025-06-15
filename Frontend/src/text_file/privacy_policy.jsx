import React from 'react'
/**
 * Uber Privacy Policy Page
 * Organized for readability and maintainability.
 * Sections:
 *   - Introduction
 *   - Data Collection & Use
 *   - Choice & Transparency
 *   - Legal Information
 */

const CountryNotice = () => (
    <div className="bg-blue-50 border-l-4 border-blue-600 px-8 py-6 my-8 max-w-md shadow-sm ">
        <h2 className="font-bold text-blue-900 mt-0 mb-4 tracking-wide text-lg uppercase font-semibold">
            Important: Regional Privacy Information
        </h2>
        <p className="mb-3 font-medium">
            In addition, please note the following if you use Uber in:
        </p>
        <ul className="columns-2 gap-8 pl-5 m-0 font-normal">
            <li>Argentina</li>
            <li>Australia</li>
            <li>Brazil</li>
            <li>Colombia, Honduras and Jamaica</li>
            <li>European Economic Area (“EEA”), United Kingdom (“UK”), and Switzerland</li>
            <li>Kenya</li>
            <li>Mexico</li>
            <li>Nigeria</li>
            <li>Quebec, Canada</li>
            <li>Switzerland</li>
            <li>Taiwan</li>
            <li>United States</li>
        </ul>
        <p className="mt-4 italic text-gray-700">
            Please contact us <a href="#" className="text-blue-600 underline">here</a> with any questions regarding our practices in a particular country or region.
        </p>
    </div>
);

const contents = [
    { label: "Overview", anchor: "overview" },
    { label: "Data collections and uses", anchor: "data-collections" },
    { label: "Choice and transparency", anchor: "choice-transparency" },
    { label: "Legal Information", anchor: "legal-info" },
];

const ContentSidebar = () => (
    <div style={{
        position: 'sticky',
        top: '2rem',
        minWidth: 220,
        maxWidth: 260,
        background: '#f7f7f7',
        padding: '1.5rem 1rem',
        borderRadius: 8,
        marginLeft: 32,
        height: 'fit-content',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
    }}>
        <h3 style={{ marginTop: 0 }}>Contents</h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {contents.map(item => (
                <li key={item.anchor} style={{ margin: '0.5rem 0' }}>
                    <a href={`#${item.anchor}`} style={{ color: '#007bff', textDecoration: 'none' }}>{item.label}</a>
                </li>
            ))}
        </ul>
    </div>
);
const privacy_policy = () => {
return (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto', fontFamily: 'Arial, sans-serif', lineHeight: 1.6 }}>
        <h1 className='font-semibold'>Uber Privacy Notice: Riders and Order Recipients</h1>
        <p>
            When you use Uber, you trust us with your personal data. We’re committed to keeping that trust. That starts with helping you understand our privacy practices.
        </p>
        <p>
            This notice describes the personal data (“data”) we collect, how it’s used and shared, and your choices regarding this data. We recommend that you read this along with our privacy overview, which highlights key points about our privacy practices.
        </p>
        <h2>Uber Privacy Notice: Drivers and Delivery People</h2>
        <a href="#">Previous version of the Privacy Notice</a>

        <h2>I. Overview</h2>
        <ol>
            <li>Data collections and uses
                <ul>
                    <li>Data we collect</li>
                    <li>How we use data</li>
                    <li>Core automated processes</li>
                    <li>Cookies and related technologies</li>
                    <li>Data sharing and disclosure</li>
                    <li>Data retention and deletion</li>
                </ul>
            </li>
            <li>Choice and transparency</li>
            <li>Legal information
                <ul>
                    <li>Data controllers and Data Protection Officer</li>
                    <li>Our legal bases for using your data</li>
                    <li>Legal framework for data transfers</li>
                    <li>Updates to this Privacy Notice</li>
                </ul>
            </li>
        </ol>

        <h3>I. Overview</h3>
        <h4>A. Scope</h4>
        <p>
            This notice applies when you use Uber’s apps or websites to request or receive products or services, including rides or deliveries.
        </p>
        <p>
            This notice describes how we collect and use your data if you request or receive products or services through Uber’s apps or websites, except when you use Uber Freight, Careem or Uber Taxi (South Korea).
        </p>
        <p>
            This notice specifically applies if you:
        </p>
        <ul>
            <li>Request or receive mobility services, including rides and package delivery and return services through Uber Connect, via your Uber account (a “Rider”).</li>
            <li>Request or receive food or other products and services for delivery or pickup, including via your Uber Eats or Postmates account, or through the guest checkout features that allow you to access delivery or pickup services without creating and/or signing into your account (an “Order Recipient”).</li>
            <li>Receive services through Uber’s apps or websites requested by other account owners (a “Guest User”), including if you receive ride or delivery services ordered by Uber Health, Central, Uber Direct or Uber for Business customers (collectively, “Enterprise Customers”); or by friends, family members or other individual account owners, including via Uber Connect; or receive a gift card.</li>
            <li>Rent a vehicle through Uber Car Rentals (a “Renter”).</li>
        </ul>
        <p>
            This notice does not describe Uber’s collection and use of your data if you use Uber to provide (instead of request or receive) services through Uber’s app or websites, including as a driver or delivery person. Uber’s notice describing our collection and use of such data is available <a href="#">here</a>. Those who use Uber to either request, receive or provide services are referred to as “users” in this notice.
        </p>
        <p>
            Our privacy practices are subject to applicable laws in the places in which we operate. The types of data processing that such laws require, allow, or prohibit vary globally. Therefore, if you travel across national, state or other geographic borders, Uber's data processing practices described in this notice may differ from those in your home country or territory.
        </p>
        <p>
            In addition, please note the following if you use Uber in:
        </p>
        <ul>
            <li>Argentina</li>
            <li>Australia</li>
            <li>Brazil</li>
            <li>Colombia, Honduras and Jamaica</li>
            <li>European Economic Area (“EEA”), United Kingdom (“UK”), and Switzerland</li>
            <li>Kenya</li>
            <li>Mexico</li>
            <li>Nigeria</li>
            <li>Quebec, Canada</li>
            <li>Switzerland</li>
            <li>Taiwan</li>
            <li>United States</li>
        </ul>
        <p>
            Please contact us <a href="#">here</a> with any questions regarding our practices in a particular country or region.
        </p>

        <h2>II. Data collections and uses</h2>
        <h3>A. The data we collect</h3>
        <p>
            Uber collects data:
        </p>
        <ol>
            <li>That you provide</li>
            <li>When you use our services</li>
            <li>From other sources</li>
        </ol>
        <p>
            Please go <a href="#">here</a> for a summary of the data we collect and how we use it.
        </p>
        <h4>1. Data you provide</h4>
        <ul>
            <li>
                <strong>Account information:</strong> Address, Email, Name, Login, Password, Phone, Payment method, Profile picture, Settings, Preferences, Loyalty program info.
            </li>
            <li>
                <strong>Demographic data:</strong> Age, Date of birth, Gender (or inferred gender).
            </li>
            <li>
                <strong>Identity verification information:</strong> Government-issued IDs, Selfies.
            </li>
            <li>
                <strong>User content:</strong> Customer support messages, Reviews, Ratings, Uploaded photos/recordings.
            </li>
            <li>
                <strong>Travel information:</strong> Itinerary details if you book travel through Uber.
            </li>
        </ul>
        <h4>2. Data collected when you use our services</h4>
        <ul>
            <li>
                <strong>Location data:</strong> Approximate and precise location, depending on your device settings.
            </li>
            <li>
                <strong>Trip/order information:</strong> Payment info, Proof of delivery, Special instructions, Trip/order details.
            </li>
            <li>
                <strong>Usage data:</strong> App crashes, Access times, Features/pages viewed, Browser type.
            </li>
            <li>
                <strong>Device data:</strong> Advertising identifiers, Device motion, IP address, Hardware models, OS, Languages.
            </li>
            <li>
                <strong>Communications data:</strong> Communication type, Content, Date/time.
            </li>
        </ul>
        <h4>3. Data from other sources</h4>
        <ul>
            <li>Law enforcement, public health, and government authorities</li>
            <li>Marketing partners and service providers</li>
            <li>Service providers for identity verification or fraud detection</li>
            <li>Uber account owners (e.g., friends/family ordering for you)</li>
            <li>Uber business partners (account creation, APIs, debit/credit cards)</li>
            <li>Users or others providing info for support/issues</li>
            <li>Users participating in referral programs</li>
        </ul>

        <h3>B. How we use data</h3>
        <ul>
            <li>To provide, personalize, maintain, and improve our services</li>
            <li>To enhance safety and security, and prevent/detect fraud</li>
            <li>For marketing and advertising</li>
            <li>To enable communications between users</li>
            <li>For customer support</li>
            <li>For research and development</li>
            <li>To send non-marketing communications</li>
            <li>In connection with legal proceedings</li>
        </ul>
        <p>
            For more details, please refer to the full privacy policy or contact Uber support.
        </p>

        <h3>C. Core automated processes</h3>
        <ul>
            <li>
                <strong>Matching:</strong> Algorithms match riders and drivers/delivery people for efficiency.
            </li>
            <li>
                <strong>Pricing:</strong> Algorithms determine price based on service type, location, time, demand, etc.
            </li>
            <li>
                <strong>Fraud prevention and detection:</strong> Machine learning models monitor for suspicious behavior.
            </li>
        </ul>

        <h3>D. Cookies and related technologies</h3>
        <p>
            Uber and partners use cookies and similar technologies for authentication, preferences, analytics, advertising, and more. See our <a href="#">Cookie Notice</a> for details.
        </p>

        <h3>E. Data sharing and disclosure</h3>
        <ul>
            <li>With other users (e.g., drivers, delivery people, restaurants, group orders)</li>
            <li>Upon request or with your consent (e.g., data-sharing features, business partners, emergency services, insurance companies, merchants)</li>
            <li>With Uber service providers and business partners</li>
            <li>With Uber subsidiaries and affiliates</li>
            <li>For legal reasons or in the event of a claim or dispute</li>
        </ul>

        <h3>F. Data retention and deletion</h3>
        <p>
            Uber retains your data as long as necessary for the purposes described. You may request account deletion through the Uber apps and websites. Some data may be retained for legal or safety reasons.
        </p>

        <h2>III. Choice and transparency</h2>
        <ul>
            <li>Privacy settings (location, notifications, gender identity, emergency data sharing, third-party app access)</li>
            <li>Device permissions</li>
            <li>In-app ratings pages</li>
            <li>Marketing and advertising choices</li>
            <li>User data requests (access, update, delete, restrict, object, complain)</li>
        </ul>

        <h2>IV. Legal Information</h2>
        <ul>
            <li>
                <strong>Data controllers and Data Protection Officer:</strong> Uber Technologies, Inc. is the main controller. Contact details are in the full policy.
            </li>
            <li>
                <strong>Legal bases for using your data:</strong> Contract, Consent, Legitimate interests, Legal obligation.
            </li>
            <li>
                <strong>Legal framework for data transfers:</strong> Uber processes data globally and complies with applicable frameworks.
            </li>
            <li>
                <strong>Updates to this Privacy Notice:</strong> Uber may update this notice and will notify users of significant changes.
            </li>
        </ul>
        <p>
            Use of our services after an update constitutes consent to the updated notice to the extent permitted by law.
        </p>
    </div>
)
}

export default privacy_policy
