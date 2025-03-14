import { Conversation } from '../type/conversation'

export const CONVERSATION_4: Conversation = [
  {
    role: 'user',
    content: 'Are you ready to review the concepts you learned last time?',
  },
  {
    role: 'assistant',
    knowledgeState: [
      {
        knowledge:
          'Solids have a regular particle arrangement, are rigid, have a constant shape and volume, and do not flow.',
        on: false,
      },
      {
        knowledge:
          'Liquids have a less regular particle arrangement than solids, change shape but have a constant volume, and flow.',
        on: false,
      },
      {
        knowledge:
          'Gases have a highly irregular particle arrangement, have neither a constant shape nor volume, flow, and spread out to fill a space.',
        on: false,
      },
      {
        knowledge:
          'Substances exist in only one of the three states of matter—solid, liquid, or gas—but can change to a different state depending on temperature or pressure; the change in a substance’s state is called a phase change.',
        on: false,
      },
      {
        knowledge:
          'During a phase change, the properties of a substance do not change because the particles that make up the substance do not change.',
        on: true,
      },
      {
        knowledge:
          'Even when a substance changes state, the particles that make up the substance and the number of particles do not change, so the mass does not change.',
        on: true,
      },
    ],
    content: 'I am not ready to review. I am having a hard time studying these days.',
  },
  {
    role: 'user',
    content:
      'It is okay! Let us take it slow together. First, let me talk about solids. Solids have a regular particle arrangement, so they are hard and have a constant shape and volume. They do not flow. Do you understand?',
  },
  {
    role: 'assistant',
    knowledgeState: [
      {
        knowledge:
          'Solids have a regular particle arrangement, are rigid, have a constant shape and volume, and do not flow.',
        on: true,
      },
      {
        knowledge:
          'Liquids have a less regular particle arrangement than solids, change shape but have a constant volume, and flow.',
        on: false,
      },
      {
        knowledge:
          'Gases have a highly irregular particle arrangement, have neither a constant shape nor volume, flow, and spread out to fill a space.',
        on: false,
      },
      {
        knowledge:
          'Substances exist in only one of the three states of matter—solid, liquid, or gas—but can change to a different state depending on temperature or pressure; the change in a substance’s state is called a phase change.',
        on: false,
      },
      {
        knowledge:
          'During a phase change, the properties of a substance do not change because the particles that make up the substance do not change.',
        on: true,
      },
      {
        knowledge:
          'Even when a substance changes state, the particles that make up the substance and the number of particles do not change, so the mass does not change.',
        on: true,
      },
    ],
    content:
      'Yes, I understand solids well. Solids are hard and have a constant shape and volume, and they do not flow.',
  },
  {
    role: 'user',
    content:
      'Well done! Now, let me explain about liquids. Liquids have a more irregular particle arrangement than solids, so their shape changes but their volume remains constant. They also have a flowing property. Do you understand?',
  },
  {
    role: 'assistant',
    knowledgeState: [
      {
        knowledge:
          'Solids have a regular particle arrangement, are rigid, have a constant shape and volume, and do not flow.',
        on: true,
      },
      {
        knowledge:
          'Liquids have a less regular particle arrangement than solids, change shape but have a constant volume, and flow.',
        on: true,
      },
      {
        knowledge:
          'Gases have a highly irregular particle arrangement, have neither a constant shape nor volume, flow, and spread out to fill a space.',
        on: false,
      },
      {
        knowledge:
          'Substances exist in only one of the three states of matter—solid, liquid, or gas—but can change to a different state depending on temperature or pressure; the change in a substance’s state is called a phase change.',
        on: false,
      },
      {
        knowledge:
          'During a phase change, the properties of a substance do not change because the particles that make up the substance do not change.',
        on: true,
      },
      {
        knowledge:
          'Even when a substance changes state, the particles that make up the substance and the number of particles do not change, so the mass does not change.',
        on: true,
      },
    ],
    content:
      'Yes, I understand liquids well, too. Liquids change shape but have a constant volume and have a flowing property.',
  },
  {
    role: 'user',
    content:
      'Great! Lastly, let me talk about gases. Gases have a very irregular particle arrangement, so their shape and volume are not constant, and they have a flowing property and spread out to fill the space. Do you understand?',
  },
]
