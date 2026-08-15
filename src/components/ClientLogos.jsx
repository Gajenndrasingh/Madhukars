// import { NavLink } from 'react-router-dom'
// import Reveal from './Reveal'

// import sbi from '../assets/clients/sbi.png'
// import hdfc from '../assets/clients/hdfc.png'
// import icici from '../assets/clients/icici.png'
// import dlf from '../assets/clients/dlf.png'
// import lodha from '../assets/clients/lodha.png'
// import tata from '../assets/clients/tata.png'
// import axis from '../assets/clients/axis.png'

// const clientLogos = [
//   { name: 'SBI', logo: sbi },
//   { name: 'HDFC Bank', logo: hdfc },
//   { name: 'ICICI Bank', logo: icici },
//   { name: 'DLF', logo: dlf },
//   { name: 'Lodha', logo: lodha },
//   { name: 'TATA', logo: tata },
//   { name: 'Axis Bank', logo: axis },
// ]

// export default function ClientLogos() {
//   return (
//     <div className="mt-16">
//       <p className="text-center text-muted max-w-xl mx-auto mb-10">
//         We are proud to work with a wide range of reputed institutions,
//         companies and individuals.
//       </p>

//       <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
//         {clientLogos.map((client, i) => (
//           <Reveal
//             key={client.name}
//             delay={(i % 7) * 0.05}
//           >
//             <div className="group bg-white rounded-card-sm border border-line h-24 flex items-center justify-center px-4 shadow-card hover:shadow-lg hover:border-gold/40 transition-all duration-300">
//               <img
//                 src={client.logo}
//                 alt={client.name}
//                 className="max-h-10 w-auto object-contain"
//               />
//             </div>
//           </Reveal>
//         ))}
//       </div>
//     </div>
//   )
// }