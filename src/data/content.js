import {
  HiOutlineHome, HiOutlineOfficeBuilding, HiOutlineLibrary,
  HiOutlineShieldCheck, HiOutlineClock,
  HiOutlineScale, HiOutlineLockClosed,
  HiOutlineBadgeCheck, HiOutlineStar,
  HiOutlineChartSquareBar, HiOutlineCube,
} from 'react-icons/hi'
import { GiFactory, GiPlantRoots } from 'react-icons/gi'
import { FaHandshake, FaBullseye } from 'react-icons/fa'

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
  { year: '2007', title: 'Practice founded', desc: 'Started as an independent valuation practice serving residential and small commercial clients.' },
  { year: '2012', title: 'Empanelled with leading banks', desc: 'Added to approved valuer panels for major public and private sector banks.' },
  { year: '2017', title: 'Industrial & agricultural expansion', desc: 'Extended coverage to industrial units, plant & machinery, and agricultural land.' },
  { year: '2022', title: '4,000th report delivered', desc: 'Crossed a milestone of assignments completed across residential, commercial and institutional clients.' },
  { year: 'Today', title: 'A trusted regional practice', desc: 'Serving banks, NBFCs, developers, corporates and individual clients with the same discipline we started with.' },
]

export const clientTypesHome = ['Banks', 'Financial Institutions', 'Builders & Developers', 'Corporate Companies', 'Government Organisations', 'Individual Clients']

export const clientTypesFull = ['Banks', 'NBFC', 'Housing Finance Companies', 'Builders', 'Developers', 'Corporate Companies', 'Government Departments', 'Individual Clients', 'Insurance Companies']

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
  { value: 18, suffix: '', label: 'Years of Practice' },
  { value: 4200, suffix: '+', label: 'Reports Delivered' },
  { value: 30, suffix: '+', label: 'Banks & NBFCs Trust Us' },
  { value: 98, suffix: '%', label: 'Client Retention' },
]

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/why-us', label: 'Why Us' },
  { to: '/clients', label: 'Clients' },
  { to: '/contact', label: 'Contact' },
]

