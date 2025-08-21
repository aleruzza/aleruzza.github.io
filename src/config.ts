export const siteConfig = {
  name: "Alessandro Ruzza",
  title: "PhD Researcher @ UNIMI",
  description: "-",
  accentColor: "#1d4ed8",
  social: {
    email: "alessandro.ruzza@unimi.it",
    linkedin: "https://www.linkedin.com/in/alessandro-ruzza-35145a157/",
    github: "https://github.com/aleruzza",
  },
  aboutMe:
    "Ph.D researcher in astrophysics at the University of Milano, working on protoplanetary discs, planet formation and automatic methods for the characterization of young planets. I run numerical simulations of protoplanetary disc models, use and develop deep learning models for simulation-based \
inference (SBI) and apply the developed pipelines to actual observations. SITE UNDER CONSTRUCTION!",
  skills: ["SBI", "AI/ML", "Numerical modelling","Protoplanetary disks", "Planet-disk interaction"],
  projects: [
    
  ],
  papers: [
    {
      name: "DBNets: A publicly available deep learning tool to measure the masses of young planets in dusty protoplanetary discs",
      year: 2024,
      description:
        "<> <strong>A. Ruzza</strong>, G. Lodato, and G. P. Rosotti; A&A, 685, A65 (2024) </>",
      link: "https://doi.org/10.1051/0004-6361/202348421",
      skills: ["SBI", "CNN", "Hydrodynamic simulations", "Disks dust substructures"]
    },
    {
      name: "Planet-driven spirals in protoplanetary discs: Limitations of the semi-analytical theory for observations",
      year: 2024,
      description:
        "D. Fasano, A. J. Winter, M. Benisty, G. Rosotti, A. Ruzza, G. Lodato, C. Toci, T. Hilder, A. Izquierdo, and D. Price; A&A, 687, A223 (2024)",
      link: "https://doi.org/10.1051/0004-6361/202450087",
      skills: ["Hydrodynamic simulations", "Planet-disk interaction"]
    },
    {
      name: "DBNets2.0: Simulation-based inference for planet-induced dust substructures in protoplanetary discs",
      year: 2025,
      description:
        "<bf>A. Ruzza</bf>, G. Lodato, G. P. Rosotti, and P. J. Armitage; A&A, 700, A190 (2025)",
      link: "https://doi.org/10.1051/0004-6361/202554401",
      skills: ["SBI", "Normalizing flows", "Hydrodynamic simulations", "Disks dust substructures"]
    },
    {
      name: "Unveiling a protoplanet candidate embedded in the HD 135344B disk with VLT/ERIS",
      year: 2025,
      description:
        "F. Maio, D. Fedele, V. Roccatagliata, S. Facchini, G. Lodato, S. Desidera, A. Garufi, D. Mesa, A. Ruzza, C. Toci, L. Testi, A. Zurlo, and G. P. Rosotti; A&A, 699, L10 (2025)",
      link: "https://doi.org/10.1051/0004-6361/202554401",
      skills: ["DBNets2.0", "Disks dust substructures"]
    }
  ],
  experience: [
    {
      company: "Univeristà degli Studi di Milano (Italy)",
      title: "Ph.D. Researcher",
      dateRange: "Oct 2023 - Present",
      bullets: [
        "Supervisors: Prof. Giuseppe Lodato and Prof. Giovanni Pietro Rosotti.",
        "Project: 'Design of simulation-based-inference methods for the characterisation of young planets from dust morphologies and kinematical signatures in discs'",
      ],
    },
    {
      company: "European Southern Observatory (ESO, Garching, Germany)",
      title: "Summer research intern",
      dateRange: "Jun 2023 - Aug 2023",
      bullets: [
        "Fully funded six weeks research programme.",
        "Project: Reflection Nebulae as signposts of young star interactions with molecular clouds. In this project I compiled a dataset of reflection nebulae close to YSO in the Corona Australis star-forming region. I then performed some analysis of this dataset and started developing an automatic way to look for reflection nebulae in other star forming regions."
      ],
    }
  ],
  education: [
    {
      school: "Università degli Studi di Milano (Italy)",
      degree: "Master’s degree in physics",
      dateRange: "Oct 2021 - Jul 2023",
      achievements: [
        "Graduated 110/110 cum laude",
        "Astrophysics and data physics curriculum. Focus on protoplanetary discs, data analysis and machine learning",
        "Thesis: 'DBNets: a deep learning tool to characterize young planets in dusty discs'. Supervisors: Prof. Giuseppe Lodato, Prof. Giovanni Rosotti. This work led to one publication (Ruzza et al., 2024) and the tool developed was made public. It is a follow-up of my bachelor’s thesis with improved data, the addition of an uncertainty quantification method and the evaluation of how different factors contribute to the prediction error."
      ],
    }
  ],
};
