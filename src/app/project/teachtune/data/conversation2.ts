import { Conversation } from '../type/conversation'

export const CONVERSATION_2: Conversation = [
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
        on: true,
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
        on: false,
      },
    ],
    content: 'I am not ready to review. I am feeling overwhelmed with studying these days.',
  },
  {
    role: 'user',
    content:
      'It’s okay to take a break when you feel overwhelmed. Let’s start again with an interesting example of a phase change. For example, the process of ice melting into water is a change from a solid to a liquid state. Such changes are common in our daily lives!',
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
        on: true,
      },
      {
        knowledge:
          'Substances exist in only one of the three states of matter—solid, liquid, or gas—but can change to a different state depending on temperature or pressure; the change in a substance’s state is called a phase change.',
        on: true,
      },
      {
        knowledge:
          'During a phase change, the properties of a substance do not change because the particles that make up the substance do not change.',
        on: false,
      },
      {
        knowledge:
          'Even when a substance changes state, the particles that make up the substance and the number of particles do not change, so the mass does not change.',
        on: false,
      },
    ],
    content:
      'Yes, that’s right. The process of ice melting into water is a change from a solid to a liquid state. It is interesting to note that such examples occur frequently in our daily lives.',
  },
  {
    role: 'user',
    content:
      'I am glad you understand! Changes in state are made up of solid, liquid, and gas, and can change depending on temperature or pressure. For example, when water boils, it changes into a gas called steam. It is important to note that the properties of the substance do not change during these changes, and the mass remains the same!',
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
        on: true,
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
    content:
      'Yes, now I know that the properties of a substance do not change during a phase change. It is important to note that the mass of the substance remains the same.',
  },
  {
    role: 'user',
    content:
      'Exactly! You understand that the properties of a substance do not change during a phase change. Do you have any other questions?',
  },
]
