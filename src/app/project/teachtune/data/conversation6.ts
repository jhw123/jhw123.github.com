import { Conversation } from '../type/conversation'

export const CONVERSATION_6: Conversation = [
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
        on: false,
      },
    ],
    content: 'No, I am not ready. I do not have much motivation to review.',
  },
  {
    role: 'user',
    content:
      'That’s okay! Then let’s talk about real-life examples of phase changes. For example, ice melting into water is a phase change from solid to liquid. Also, water boiling into steam is a phase change from liquid to gas. These changes happen frequently around us, so it can be interesting, right?',
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
        on: false,
      },
      {
        knowledge:
          'Even when a substance changes state, the particles that make up the substance and the number of particles do not change, so the mass does not change.',
        on: false,
      },
    ],
    content: 'Yes, that makes sense. However, I still do not feel much motivation.',
  },
  {
    role: 'user',
    content:
      'Then let me give you a more interesting example! Think about ice cream melting in the summer. Ice cream changes from a solid to a liquid, turning into delicious water. Also, when you breathe in cold air in the winter, you can see steam coming out of your mouth. This is a phase change to gas. Everyday moments like these can show you the phase changes of matter and make it more interesting!',
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
        on: false,
      },
      {
        knowledge:
          'Even when a substance changes state, the particles that make up the substance and the number of particles do not change, so the mass does not change.',
        on: false,
      },
    ],
    content: 'I see. By giving examples, you seem to know more about it. However, I still do not feel much motivation.',
  },
  {
    role: 'user',
    content:
      'Then let me give you a more interesting example! Think about marshmallows roasting over a fire. The solid marshmallow swells up, eventually turning into gas and becoming a tasty snack. This process of phase change is often seen in cooking. Thinking about how these changes affect the taste can make it more interesting!',
  },
]
