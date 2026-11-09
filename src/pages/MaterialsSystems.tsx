import { motion } from 'motion/react';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ImageModal from '../components/ImageModal';

const systems = [
  {
    id: 'high-k',
    title: 'High-k Dielectric Oxides and Oxide Interfaces',
    content: 'HfO2, ZrO2, and Hf1−xZrxO2 (HZO) are our principal High-k dielectric oxides, with a focus on defects, trap states, ferroelectricity, and oxide interfaces. SiO2 serves as a reference oxide for comparison. We combine DFT, beyond-DFT electronic-structure methods, machine-learned interatomic potentials (MLIPs), and data-driven analysis to understand how local structure and defect chemistry govern phase stability and electrical properties.',
    img: '/images/materials1.png'
  },
  {
    id: 'semiconductor-process',
    title: 'Semiconductor Process Modeling and Optimization',
    content: 'We aim to connect semiconductor growth and process environments with structural motifs, defects, phases, and materials properties. DFT and MLIP-based simulations are combined with experimental measurements to explore process-condition predictions, assess thermodynamic and kinetic constraints on synthesizability, and interpret characterization signals. Our goal is to guide process optimization for target properties with uncertainty-aware models.',
    img: '/images/research-refresh/advanced-modeling-methods.png'
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
  },
  {
    id: '2d-semiconductors',
    title: '2D Semiconductor Heterojunctions, Contacts, and High-k Interfaces',
    content: 'MoS2/metal contacts, van der Waals heterojunctions, and high-k/2D interfaces. We combine DFT, beyond-DFT electronic-structure calculations, global optimization, and data-driven descriptor analysis to understand contact resistance, Fermi-level pinning, interfacial dipoles, and scalable dielectric integration in 2D electronic materials.',
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
  const parts = text.split(/((?<=Hf)1−x|(?<=Zr)x|(?<=[A-Za-z])\d+)/g);

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
        className="text-meta inline-flex items-center gap-2 text-ink hover:text-ink transition-colors mb-8"
      >
        <ChevronLeft size={14} /> Back to Home
      </Link>

      <header className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <h1 className="page-title">
            Materials Systems of Interest
          </h1>
        </div>
        <div className="text-body mt-4 text-copy max-w-3xl">
          Computational materials science and machine learning connect materials structure, properties, and applications, with an emphasis on High-k dielectric oxides and semiconductor process modeling and optimization.
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
            className={`grid grid-cols-1 gap-12 md:gap-24 items-center ${system.img ? i % 2 === 0 ? 'md:grid-cols-[6.5fr_3.5fr]' : 'md:grid-cols-[3.5fr_6.5fr]' : ''}`}
            id={system.id}
          >
            <div className={system.img && i % 2 === 1 ? 'md:order-2' : ''}>
              <div className="mb-4">
                <span className="text-meta text-ink">SUB-SYSTEM {String(i + 1).padStart(2, '0')}</span>
                <h2 className="section-title mt-1 mb-4">
                  <FormattedText text={system.title} />
                </h2>
              </div>
              <p className="text-body text-copy">
                <FormattedText text={system.content} />
              </p>
            </div>
            {system.img && (
            <div className={`flex ${i % 2 === 1 ? 'md:order-1 md:justify-start' : 'md:justify-end'}`}>
              <button
                type="button"
                aria-label={`Enlarge ${system.title} illustration`}
                className="w-full max-w-[450px] overflow-hidden bg-slate-50 rounded-sm border border-slate-100 group relative cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                onClick={() => { if (system.img) openModal(system.img, system.title); }}
              >
                <img
                  src={system.img}
                  alt={system.title}
                  className="w-full h-auto block"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/5">
                  <span className="text-meta bg-primary/60 text-on-dark px-3 py-1.5 rounded-full backdrop-blur-sm">
                    Click to Enlarge
                  </span>
                </span>
              </button>
            </div>
            )}
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
