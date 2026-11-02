import { motion } from 'motion/react';
import { ChevronLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ImageModal from '../components/ImageModal';

const systems = [
  {
    id: 'high-k',
    title: 'Defect-Rich High-k Dielectrics and Oxide Interfaces',
    content: 'SiO2, HfO2, ZrO2, and Hf1−xZrxO2 (HZO), with a focus on defects, trap states, ferroelectricity, and surface or interfaces. We combine DFT, beyond-DFT electronic-structure methods, machine-learned interatomic potentials (MLIPs), and data-driven analysis to understand how defect chemistry governs phase stability and electrical behavior in high-k oxide systems.',
    img: '/images/materials1.png'
  },
  {
    id: 'photoelectrochemical',
    title: 'Photoelectrochemical Ternary Oxides and Aqueous Interfaces',
    content: 'BiVO4 and related photoelectrochemical oxides, particularly reconstructed surfaces, solid–liquid interfaces, polarons, and charge localization under aqueous conditions. Using beyond-DFT methods, MLIP-based molecular dynamics, and global optimization, we investigate how interfacial structure, hydration, and electronic-state evolution control stability and photoelectrochemical functionality.',
    img: '/images/materials2.png'
  },
  {
    id: 'electrocatalytic',
    title: 'Electrocatalytic Oxides and Oxide Alloys',
    content: 'Transition-metal oxides and mixed oxides/alloys for OER and related electrochemical reactions, with emphasis on surface reconstruction, adsorbate evolution under applied bias. We use grand-canonical and beyond-DFT approaches, MLIP-enabled atomistic simulations, nanoparticle structure prediction, and data-driven modeling to reveal how surface and subsurface transformations govern catalytic activity and stability.',
    img: '/images/materials3.png'
  },
  {
    id: 'halide',
    title: 'Halide Ionic Conductors',
    content: 'Halide solid electrolytes for Li/Na-ion transport, with an emphasis on composition design, structural disorder, and ML-assisted transport prediction. By integrating DFT, MLIPs, large-scale atomistic simulations, and data-science-guided screening, we explore how local structure and disorder influence ionic mobility and identify promising candidates for solid-state battery applications.',
    img: 'https://picsum.photos/seed/battery/1200/800'
  },
  {
    id: '2d-semiconductors',
    title: '2D Semiconductor Heterojunctions, Contacts, and High-k Interfaces',
    content: 'MoS2/metal contacts, van der Waals heterojunctions, and high-k/2D interfaces. We combine DFT, beyond-DFT electronic-structure calculations, global optimization, and data-driven descriptor analysis to understand contact resistance, Fermi-level pinning, interfacial dipoles, and scalable dielectric integration in 2D electronic materials.',
    img: 'https://picsum.photos/seed/semiconductor/1200/800'
  },
  {
    id: 'interpretation',
    title: 'Computation-Guided Interpretation of Experiments',
    content: 'Atomistic interpretation of microscopy, spectroscopy, electrochemistry, and operando measurements to connect observed signals with structure, defects, and reaction pathways. By combining DFT, beyond-DFT methods, MLIP-based simulations, global optimization, and data-science-assisted analysis, we link experiments with realistic atomistic models and uncover the structural origins of measured behavior.',
    img: '/images/materials6.png'
  }
];

import PageBanner from '../components/PageBanner';

const FormattedText = ({ text }: { text: string }) => {
  if (!text) return null;
  // Regex to identify parts that should be subscripts:
  // 1. Digits following a letter (e.g., the '2' in SiO2)
  // 2. Specific alloy variables like '1-x' following 'Hf' or 'x' following 'Zr'
  const parts = text.split(/((?<=[A-Za-z])\d+|(?<=Hf)1−x|(?<=Zr)x)/g);
  
  return (
    <>
      {parts.map((part, i) => {
        if (i % 2 === 1) {
          return <sub key={i} className="text-[70%] leading-none bottom-[-0.2em] relative inline-block ml-[0.05em] mr-[0.05em]">{part}</sub>;
        }
        return part;
      })}
    </>
  );
};

export default function MaterialsSystems() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ src: '', alt: '' });

  const openModal = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
    setModalOpen(true);
  };

  return (
    <>
    <PageBanner hideLine />
    <div className="py-10 max-w-7xl mx-auto px-8">
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-slate-600 hover:text-primary font-sans text-xs font-bold uppercase tracking-normal transition-colors mb-8"
      >
        <ChevronLeft size={14} /> Back to Home
      </Link>

      <header className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <h1 className="page-title">
            Materials Systems of Interest
          </h1>
        </div>
        <div className="mt-4 font-academic text-sm font-normal text-slate-700 max-w-3xl leading-relaxed">
          Exploring the frontiers of functional materials through advanced atomistic modeling and data-driven insights.
        </div>
      </header>

      <div className="space-y-24">
        {systems.map((system, i) => (
          <motion.section 
            key={system.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`grid grid-cols-1 gap-12 md:gap-24 items-center ${i % 2 === 0 ? 'md:grid-cols-[6.5fr_3.5fr]' : 'md:grid-cols-[3.5fr_6.5fr]'}`}
            id={system.id}
          >
            <div className={i % 2 === 1 ? 'md:order-2' : ''}>
              <div className="mb-4">
                <span className="text-xs font-bold text-primary uppercase tracking-normal">SUB-SYSTEM {String(i + 1).padStart(2, '0')}</span>
                <h2 className="section-title mt-1 mb-4">
                  <FormattedText text={system.title} />
                </h2>
              </div>
              <p className="font-academic text-sm font-normal text-slate-700 leading-relaxed">
                <FormattedText text={system.content} />
              </p>
            </div>
            <div className={`flex ${i % 2 === 1 ? 'md:order-1 md:justify-start' : 'md:justify-end'}`}>
              <div 
                className="w-full max-w-[450px] overflow-hidden bg-slate-50 rounded-sm border border-slate-100 group relative cursor-pointer"
                onClick={() => openModal(system.img, system.title)}
              >
                <img 
                  src={system.img} 
                  alt={system.title} 
                  className="w-full h-auto block"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/5">
                  <div className="bg-primary/60 text-white px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-normal backdrop-blur-sm">
                    Click to Enlarge
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        ))}
      </div>
    </div>
    <ImageModal 
      isOpen={modalOpen} 
      onClose={() => setModalOpen(false)} 
      imageSrc={selectedImage.src} 
      imageAlt={selectedImage.alt} 
    />
    </>
  );
}
