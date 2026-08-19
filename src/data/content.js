import {
  HiOutlineHome, HiOutlineOfficeBuilding, HiOutlineLibrary,
  HiOutlineShieldCheck, HiOutlineClock,
  HiOutlineScale, HiOutlineLockClosed,
  HiOutlineBadgeCheck, HiOutlineStar,
  HiOutlineChartSquareBar, HiOutlineCube,
} from 'react-icons/hi'

import { GiFactory, GiPlantRoots } from 'react-icons/gi'
import { FaHandshake, FaBullseye } from 'react-icons/fa'
import banksIcon from '../assets/icons/banks.png'
import financialIcon from '../assets/icons/financial-institutions.png'
import buildersIcon from '../assets/icons/builders-developers.png'
import corporateIcon from '../assets/icons/corporate-companies.png'
import govtIcon from '../assets/icons/government-organisations.png'
import individualIcon from '../assets/icons/individual-clients.png'
import nbfcIcon from '../assets/icons/nbfc.png'
import housingFinanceIcon from '../assets/icons/housingFinance.png'
import insuranceIcon from '../assets/icons/insurance.png'

export const clientTypesHome = [
  { label: 'Banks', icon: banksIcon },
  { label: 'Financial Institutions', icon: financialIcon },
  { label: 'Builders & Developers', icon: buildersIcon },
  { label: 'Corporate Companies', icon: corporateIcon },
  { label: 'Government Organisations', icon: govtIcon },
  { label: 'Individual Clients', icon: individualIcon },
]

export const clientTypesFull = [
  { label: 'Banks', icon: banksIcon },
  { label: 'Builders', icon: buildersIcon },
  { label: 'Corporate Companies', icon: corporateIcon },
  { label: 'Government Departments', icon: govtIcon },
  { label: 'Individual Clients', icon: individualIcon },
  { label: 'NBFC', icon: nbfcIcon },
  { label: 'Housing Finance Companies', icon: housingFinanceIcon },
  // { label: 'Developers', icon: developersIcon },
  { label: 'Insurance Companies', icon: insuranceIcon },
]

export const services = [
  { icon: HiOutlineHome, title: 'Residential Property Valuation', desc: 'Flats, independent homes and residential plots valued for sale, purchase, loan or legal purposes.' },
  { icon: HiOutlineOfficeBuilding, title: 'Commercial Property Valuation', desc: 'Offices, retail units and mixed-use commercial assets valued to institutional standards.' },
  { icon: GiFactory, title: 'Industrial Property Valuation', desc: 'Factories, warehouses and plant land assessed for financing, insurance and disposal.' },
  { icon: GiPlantRoots, title: 'Agricultural Land Valuation', desc: 'Farmland and horticultural land valued with attention to soil, irrigation and local market rates.' },
  { icon: HiOutlineLibrary, title: 'Bank Loan Valuation', desc: 'Reports formatted to RBI and bank panel requirements for mortgage and loan sanctioning.' },
  { icon: HiOutlineShieldCheck, title: 'Insurance Valuation', desc: 'Replacement and indemnity value assessments for property insurance purposes.' },
  { icon: HiOutlineCube, title: 'Asset Valuation', desc: 'Fixed asset and fair value assessments for accounting, audit and financial reporting.' },
  { icon: HiOutlineChartSquareBar, title: 'Project Valuation', desc: 'Feasibility and valuation of under-construction and proposed development projects.' },
]

export const whyChooseHome = [
  { title: 'Certified Professional Valuers', desc: 'Every report is signed by a qualified, empanelled valuer.' },
  { title: 'Accurate Reports', desc: 'Findings grounded in site inspection and verified market data.' },
  { title: 'Quick Turnaround Time', desc: 'Assignments scheduled and delivered without unnecessary delay.' },
  { title: 'Transparent Process', desc: 'You know exactly what is being assessed and how, at every step.' },
  { title: 'Trusted by Banks', desc: 'Empanelled with leading banks and financial institutions.' },
  { title: 'Experienced Team', desc: 'Valuers with years of on-ground experience across asset classes.' },
]

export const reasons = [
  { icon: HiOutlineBadgeCheck, title: 'Certified Experts', desc: 'Reports prepared and signed by qualified, empanelled valuers.' },
  { icon: HiOutlineShieldCheck, title: 'Trusted Valuation Reports', desc: 'Accepted by banks, courts and institutions without dispute.' },
  { icon: FaBullseye, title: 'Accurate Market Analysis', desc: 'Grounded in current comparable sales and local market data.' },
  { icon: HiOutlineLibrary, title: 'RBI & Bank Standards', desc: 'Every format aligned to institutional and regulatory requirements.' },
  { icon: HiOutlineClock, title: 'Timely Delivery', desc: 'Assignments completed within agreed timelines, every time.' },
  { icon: FaHandshake, title: 'Professional Consultation', desc: 'Direct access to a valuer for questions before and after the report.' },
  { icon: HiOutlineScale, title: 'Transparent Pricing', desc: 'Fees agreed upfront, with no hidden charges.' },
  { icon: HiOutlineStar, title: 'Customer Satisfaction', desc: 'A track record built on repeat clients and referrals.' },
  { icon: HiOutlineLockClosed, title: 'Confidential Service', desc: 'Client and property information is never shared without consent.' },
]

export const coreValues = [
  { icon: FaBullseye, title: 'Integrity' },
  { icon: HiOutlineScale, title: 'Objectivity' },
  { icon: HiOutlineLockClosed, title: 'Confidentiality' },
  { icon: HiOutlineStar, title: 'Diligence' },
]

export const timeline = [
  { year: '2015', title: 'Practice founded', desc: 'Started as an independent valuation practice serving residential and small commercial clients.' },
  { year: '2017', title: 'Empanelled with leading banks', desc: 'Added to approved valuer panels for major public and private sector banks.' },
  { year: '2020', title: 'Industrial & agricultural expansion', desc: 'Extended coverage to industrial units, plant & machinery, and agricultural land.' },
  { year: '2023', title: '4,000th report delivered', desc: 'Crossed a milestone of assignments completed across residential, commercial and institutional clients.' },
  { year: 'Today', title: 'A trusted regional practice', desc: 'Serving banks, NBFCs, developers, corporates and individual clients with the same discipline we started with.' },
]

// export const clientTypesHome = ['Banks', 'Financial Institutions', 'Builders & Developers', 'Corporate Companies', 'Government Organisations', 'Individual Clients']

// export const clientTypesFull = ['Banks', 'NBFC', 'Housing Finance Companies', 'Builders', 'Developers', 'Corporate Companies', 'Government Departments', 'Individual Clients', 'Insurance Companies']

export const testimonials = [
  { name: 'R. Sharma', role: 'Branch Manager, Regional Bank', quote: 'Reports are consistently thorough and delivered on schedule — makes loan processing far smoother.' },
  { name: 'A. Verma', role: 'Homeowner', quote: 'Clear explanation of the process and a fair, well-documented valuation for my home loan.' },
  { name: 'S. Iyer', role: 'Developer', quote: 'Their industrial and project valuations have held up well through due diligence and audits.' },
]

export const faqs = [
  { q: 'How long does a typical valuation take?', a: 'Most residential and commercial assignments are completed within 3–5 working days of the site visit, depending on complexity.' },
  { q: 'Do you provide reports accepted by banks?', a: 'Yes — we are empanelled with several banks and NBFCs and format reports to their specific requirements.' },
  { q: 'Is a site visit always required?', a: 'Yes, every valuation includes a physical site inspection to ensure the report reflects actual property conditions.' },
  { q: 'How is your fee structured?', a: 'Fees are agreed upfront based on property type and location, with no hidden charges added later.' },
]

export const stats = [
  { value: 12, suffix: '', label: 'Years of Practice' },
  { value: 4200, suffix: '+', label: 'Reports Delivered' },
  { value: 25, suffix: '+', label: 'Banks & NBFCs Trust Us' },
  { value: 98, suffix: '%', label: 'Client Retention' },
]

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/why-us', label: 'Why Us' },
  { to: '/clients', label: 'Clients' },
  { to: '/contact', label: 'Contact' },
]

export const proprietor = {
  name: 'Er. Anuj Mehta',
  role: 'Proprietor & Principal Valuer',
  bio: 'A civil engineer with a Bachelor of Engineering (2015) and approx. 12 years of experience in property valuation. Anuj works across multiple locations in Madhya Pradesh and Rajasthan, handling everything from field visits and valuation reports to managing teams and engaging with banking officers.',
}

export const solutions = [
  { title: 'Valuation', desc: 'Real estate valuations across land, residential, industrial and commercial assets, including mortgage valuations and LAP (loan against property) assignments for financial institutions.' },
  { title: 'Cost-Estimation', desc: 'Cost estimations for construction programs, projects and operations — maintained to standards of credibility, accuracy, precision and validity.' },
  { title: 'Planning', desc: 'Construction plans for industrial, commercial and residential plots and buildings, adhering to local authority bylaws and vaastu considerations.' },
  { title: 'Designing', desc: 'Structural design for construction projects, applying mechanics, materials science and applied mathematics — including environmental loads like earthquakes and wind.' },
  { title: 'Construction', desc: 'Small-scale residential and commercial construction projects, delivered with the same integrity we bring to every valuation report.' },
]

export const serviceAreas = [
  { district: 'Ratlam', areas: 'Jaora, Alote, Bajna, Sailana' },
  { district: 'Mandsaur', areas: 'Shamgarh, Suwasra, Garoth, Malhargarh, Daloda' },
  { district: 'Neemuch', areas: 'Manasa, Singoli, Jeeran, Jawad' },
  { district: 'Agar', areas: 'Susner, Barode, Nalkheda' },
  { district: 'Rajgarh', areas: 'Biaora, Sarangpur, Pachore, Sarangpur' },
  { district: 'Shajapur', areas: 'Shujalpur, Akodia, Kalapipal, Mohan Barodiya' },
  { district: 'Ujjain', areas: 'Nagda, Badnagar, Tarana, Mahidpur' },
  { district: 'Dewas', areas: 'Sonkatchh, Tonk khurd, Hatpipliya' },
  { district: 'Dhar', areas: 'Badnawar, Sardarpur, Pithampur' },
  { district: 'Jhabua', areas: 'Meghnagar, Thandla, Petlawad' },
  { district: 'Alirajpur', areas: 'Jobat, Bhavra' },
  { district: 'Sehore', areas: 'Ashta, Kurawar' },
]

export const empanelledWith = [
  // 'Bandhan Bank Ltd – GRUH Center', 'DCB Bank Ltd', 'IndusInd Bank Ltd',
   'Fedbank Financial Services Ltd',
  'PNB Housing Finance Ltd', 'Aadhar Housing Finance Ltd', 'Ummeed Housing Finance Pvt Ltd',
  'Cholamandalam Investment and Finance Company Ltd', 'Bajaj Housing Finance Limited', 'JM Financial Home Loans Ltd',
  'Shubham Housing Development Finance Company Ltd', 'Muthoot Fincorp Ltd', 'Muthoot Finance Ltd',
  'Muthoot Housing Finance Ltd', 'Western Capital Ltd', 'L&T Financial Services', 'Purple Finance Ltd',
  'IIFCO Kisan Finance Ltd', 'Bhala Finance Pvt Ltd', 'Nipun Projectes and Finance Pvt Ltd',
  'MS Fincap Pvt Ltd', 'KIFS Housing Finance Ltd',
]

export const references = [
  { name: 'Mr. Atul Shukla', role: 'RTM in Indusind Bank', phone: '+91 9407322430' },
  { name: 'Mr. Shubham Shekhar', role: 'RTM in PNBHFL', phone: '+91 8950580205' },
  { name: 'Mr. Abhay Pal', role: 'State Tech Head in Ummeed Finance', phone: '+91 9522266636' },
  { name: 'Mr. Nikhil Junnare', role: 'Tech Head in KIFS', phone: '+91 9424584836' },
  { name: 'Mr. Dharmendra Chouhan', role: 'Tech Head in JM Finance', phone: '+91 9165822553' },
  { name: 'Mr. Mahesh Kothe', role: 'Tech Head in Hero Finance', phone: '+91 8889107494' },
]

export const officeLocations = [
  {
    label: 'Registered Office',
    address: '38, Navkar Heights Colony, Behind Bajaj Showroom, Jaora, Distt Ratlam-457226, Madhya Pradesh',
  },
  {
    label: 'Ujjain Branch',
    address: 'Janki Nagar, Gadkalika Main Road, Ujjain (MP)',
    contactPerson: 'Mr. Parivesh Prajapati',
    phone: '+91 9340288331',
    email: 'ujjain@madhukars.in',
  },
]