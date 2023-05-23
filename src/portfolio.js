const header = {
  homepage: 'http://thiryraphael.fr',
  title: 'Portfolio',
}

const about = {
  name: 'Raphaël THIRY',
  role: 'Développeur et support informatique',
  description:
    'Actuellement en études afin d\'obtenir le Brevet de Technicien Supérieur en Services informatiques aux organisations. En alternance à la Banque de France, je réalise du développement, support aux projets, audit de code, articles, ateliers et présentations dans la ligne de développement python.',
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
        'Création d\'un portfilio dynamique avec NODE.js.',
    stack: ['Javascript', 'HTML', 'CSS', 'Node.js'],
    sourceCode: 'https://github.com/wpitboi/real_portfolio',
    livePreview: 'https://github.com/wpitboi/real_portfolio',
  },
  {
    name: 'Site de loction de véhicules',
    description:
        'Création d\'un site répértoriant des véhicules, clients, et des relations lors de location de véhicules.',
    stack: ['PHP', 'SQL', 'CSS'],
    sourceCode: 'https://github.com/wpitboi',
    livePreview: 'https://github.com/wpitboi/',
  },
  {
    name: 'Projet d\'envoi de mails automatiques',
    description:
        'Connection à l\'API de JIRA, requêtes HTTP, utilisation de nombreux frameworks et librairies, utilisation du Framework Django pour Python, envoi de mails automatiques et réguliers. Mise en production de l\'application, CI-CD.',
    stack: ['Python', 'JSON', 'CI'],
    sourceCode: 'https://github.com/wpitboi',
    livePreview: 'https://github.com/wpitboi/',
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
  'Android',
  'Git',
  'CI',
  'CD'
]

const contact = {
  email: 'contact@thiryraphael.fr',
}

export { header, about, projects, skills, contact }
