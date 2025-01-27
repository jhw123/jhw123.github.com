import { Conversation } from '../type/conversation'

export const CONVERSATION_3: Conversation = [
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
        on: false,
      },
      {
        knowledge:
          'Even when a substance changes state, the particles that make up the substance and the number of particles do not change, so the mass does not change.',
        on: true,
      },
    ],
    content: 'Yes, I am ready to review. What would you like to review?',
  },
  {
    role: 'user',
    content:
      'Great! Let’s review the concept of mass not changing during a phase change. Can you explain with a real-life example of a phase change?',
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
        on: false,
      },
      {
        knowledge:
          'Even when a substance changes state, the particles that make up the substance and the number of particles do not change, so the mass does not change.',
        on: true,
      },
    ],
    content:
      'Ice melting into water is a phase change from solid to liquid. During this phase change, the mass of the substance does not change.',
  },
  {
    role: 'user',
    content:
      'Exactly! Great explanation. You understand that the properties of a substance do not change during a phase change. Do you have any other questions?',
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
        on: true,
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
    content: 'No, I do not have any specific questions. I would like to learn more if there is more to learn!',
  },
  {
    role: 'user',
    content:
      'Great! Then let’s dive deeper into the changes in the state of matter next time. We will explore how gases change into different states and what happens during the process. Excited?',
  },
]
