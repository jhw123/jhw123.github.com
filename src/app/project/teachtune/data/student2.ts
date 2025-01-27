import { Student } from '../type/student'

export const STUDENT_2: Student = {
  id: '2',
  name: 'Knows concepts, struggles to apply',
  profile: '',
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
  goalCommitment: [
    {
      item: 'I am strongly committed to pursuing this goal.',
      rating: 3,
    },
    {
      item: 'I think this is a good goal to shoot for.',
      rating: 3,
    },
    {
      item: 'I am willing to put forth a great deal of effort beyond what I’d normally do to achieve this goal.',
      rating: 3,
    },
  ],
  motivation: [
    {
      item: 'I keep working on a problem until I understand it.',
      rating: 2,
    },
    {
      item: "I try to learn more about something that I don't understand right away so that I will understand it.",
      rating: 2,
    },
    {
      item: 'When I know I have learned something new, I feel good inside.',
      rating: 2,
    },
  ],
  selfEfficacy: [
    {
      item: 'I believe I am the kind of person who is good at science.',
      rating: 3,
    },
    {
      item: 'I believe I am the type of person who can do science.',
      rating: 3,
    },
    {
      item: 'I believe I can learn well in a science course.',
      rating: 3,
    },
  ],
  stress: [
    {
      item: 'I feel a lot of pressure in my daily studying.',
      rating: 4,
    },
    {
      item: 'Future education and employment bring me a lot of academic pressure.',
      rating: 4,
    },
    {
      item: 'I feel that I have disappointed my parents when my test/exam results are poor.',
      rating: 4,
    },
  ],
}
