const header = {
  homepage: 'http://thiryraphael.fr',
  title: 'Portfolio',
}

const about = {
  name: 'Raphaël THIRY',
  role: 'Développeur et support informatique',
  description:
    'Actuellement en études afin d\'obtenir le Brevet de Technicien Supérieur en Services informatiques aux organisations. En alternance à la Banque de France, je suis développeur et support aux projets dans la ligne de développement python.',
  resume: 'https://acrobat.adobe.com/id/urn:aaid:sc:EU:f34afb14-5d6a-4693-a22d-a641099ba2db',
  social: {
    linkedin: 'https://fr.linkedin.com/in/raphaelthiry',
    github: 'https://github.com/wpitboi',
  },
}

const projects = [
  {
    name: 'Réseau social SQL',
    description:
      'Mise en place la base de données d’un nouveau réseau social. Spécificités décrites par le cahier des charges du client.',
    stack: ['SQL', 'Modèle conceptuel', 'Modèle logique'],
    sourceCode: 'https://github.com/wpitboi/reseau-social',
    livePreview: 'https://github.com/wpitboi/reseau-social',
  },
  {
    name: 'Portfolio',
    description:
        'Création d\'un portfilio avec NODE.js.',
    stack: ['Javascript', 'HTML', 'CSS', 'Node.js'],
    sourceCode: 'https://github.com/wpitboi/real_portfolio',
    livePreview: 'https://github.com/wpitboi/real_portfolio',
  },
]

const skills = [
  'Python',
  'Java',
  'SQL',
  'HTML',
  'CSS',
  'JavaScript',
  'PHP',
  'Git',
  'CI/CD',
]

const contact = {
  email: 'contact@thiryraphael.fr',
}

export { header, about, projects, skills, contact }
