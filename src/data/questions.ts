import { Question } from '@/types/game';

export const financialQuestions: Question[] = [
  // Saving & Budgeting
  {
    id: '1',
    question: 'If you earn $100 and save 20% of it, how much will you save?',
    options: ['$15', '$20', '$25', '$10'],
    correctAnswer: 1,
    explanation: '20% of $100 is $20. Saving 20% of your earnings is a great habit!'
  },
  {
    id: '2',
    question: 'What is a budget?',
    options: ['A type of savings account', 'A plan for how to spend money', 'A loan from the bank', 'A credit card'],
    correctAnswer: 1,
    explanation: 'A budget is a plan that helps you decide how to spend and save your money wisely!'
  },
  {
    id: '3',
    question: 'Why should you save money?',
    options: ['To buy everything now', 'For future goals and emergencies', 'To throw it away', 'Saving is not important'],
    correctAnswer: 1,
    explanation: 'Saving helps you reach goals and be prepared for unexpected events!'
  },
  {
    id: '4',
    question: 'If you save $5 every week, how much will you have in 4 weeks?',
    options: ['$15', '$20', '$25', '$10'],
    correctAnswer: 1,
    explanation: '$5 x 4 weeks = $20. Small amounts add up over time!'
  },
  {
    id: '5',
    question: 'What is an emergency fund?',
    options: ['Money for toys', 'Money saved for unexpected problems', 'A type of game', 'A birthday gift'],
    correctAnswer: 1,
    explanation: 'An emergency fund is money set aside for unexpected needs like medical bills or repairs.'
  },
  
  // Needs vs Wants
  {
    id: '6',
    question: 'Which is a NEED vs a WANT?',
    options: ['Video games', 'Food', 'Toys', 'Candy'],
    correctAnswer: 1,
    explanation: 'Food is a need - something you must have to survive! Wants are nice to have but not essential.'
  },
  {
    id: '7',
    question: 'Which of these is a WANT?',
    options: ['Water', 'Shelter', 'New skateboard', 'Medicine'],
    correctAnswer: 2,
    explanation: 'A skateboard is fun but not essential for survival - that makes it a want!'
  },
  {
    id: '8',
    question: 'Your friend wants you to buy an expensive toy. What should you ask yourself?',
    options: ['Will my friend still like me?', 'Do I really need this or just want it?', 'Is it the most expensive one?', 'What color is it?'],
    correctAnswer: 1,
    explanation: 'Always think about whether something is a need or want before spending money!'
  },
  {
    id: '9',
    question: 'Which of these is a need for going to school?',
    options: ['Designer backpack', 'Pencils and notebooks', 'Latest sneakers', 'Fancy lunch box'],
    correctAnswer: 1,
    explanation: 'Basic school supplies like pencils and notebooks are needs; fancy versions are wants!'
  },
  {
    id: '10',
    question: 'If you only have $20, should you spend it all on candy?',
    options: ['Yes, candy is delicious!', 'No, save some for important things', 'Buy as much as possible', 'Give it all away'],
    correctAnswer: 1,
    explanation: 'It\'s smart to save some money for things you might need later!'
  },
  
  // Earning Money
  {
    id: '11',
    question: 'What is income?',
    options: ['Money you spend', 'Money you earn', 'Money you lose', 'Money you borrow'],
    correctAnswer: 1,
    explanation: 'Income is the money you receive from working or other sources!'
  },
  {
    id: '12',
    question: 'How can kids earn money?',
    options: ['Steal from others', 'Do chores and help neighbors', 'Wait for it to fall from the sky', 'Wish really hard'],
    correctAnswer: 1,
    explanation: 'Doing chores, helping neighbors, or having a lemonade stand are great ways to earn!'
  },
  {
    id: '13',
    question: 'If you mow 3 lawns for $10 each, how much do you earn?',
    options: ['$20', '$25', '$30', '$35'],
    correctAnswer: 2,
    explanation: '$10 x 3 lawns = $30. Great job earning money!'
  },
  {
    id: '14',
    question: 'What is an entrepreneur?',
    options: ['Someone who borrows money', 'Someone who starts their own business', 'Someone who only saves', 'Someone who gives away money'],
    correctAnswer: 1,
    explanation: 'An entrepreneur creates and runs their own business to earn money!'
  },
  {
    id: '15',
    question: 'Which is an example of earning money?',
    options: ['Receiving allowance for chores', 'Finding money on the ground', 'Getting a gift', 'Winning a prize'],
    correctAnswer: 0,
    explanation: 'Getting paid for work (like chores) is earning money through effort!'
  },
  
  // Banking & Interest
  {
    id: '16',
    question: 'What is interest on a loan?',
    options: ['Free money', 'Extra money you pay back', 'A gift from the bank', 'Your savings'],
    correctAnswer: 1,
    explanation: 'Interest is the extra amount you pay when borrowing money - like a fee for using someone else\'s money.'
  },
  {
    id: '17',
    question: 'What does a bank do?',
    options: ['Sells toys', 'Keeps your money safe and can lend money', 'Only gives away free money', 'Teaches school'],
    correctAnswer: 1,
    explanation: 'Banks keep your money safe in accounts and can lend money to others.'
  },
  {
    id: '18',
    question: 'What is a savings account?',
    options: ['A video game', 'A place to keep money at a bank', 'A type of candy', 'A shopping cart'],
    correctAnswer: 1,
    explanation: 'A savings account is where you store money at a bank, and it can earn interest!'
  },
  {
    id: '19',
    question: 'If a bank gives you 5% interest on $100, how much extra do you earn in a year?',
    options: ['$3', '$5', '$10', '$50'],
    correctAnswer: 1,
    explanation: '5% of $100 = $5. Banks pay you interest for keeping money with them!'
  },
  {
    id: '20',
    question: 'What is a loan?',
    options: ['Free money', 'Money you borrow and must pay back', 'A gift', 'Money you give away'],
    correctAnswer: 1,
    explanation: 'A loan is borrowed money that must be repaid, usually with extra (interest).'
  },
  
  // Smart Shopping
  {
    id: '21',
    question: 'What does "on sale" mean?',
    options: ['More expensive', 'The item costs less than usual', 'Only for adults', 'It\'s broken'],
    correctAnswer: 1,
    explanation: 'When something is on sale, it costs less than the normal price!'
  },
  {
    id: '22',
    question: 'A toy costs $20 but is 50% off. What is the sale price?',
    options: ['$5', '$10', '$15', '$25'],
    correctAnswer: 1,
    explanation: '50% off means half price! $20 ÷ 2 = $10'
  },
  {
    id: '23',
    question: 'What should you do before buying something expensive?',
    options: ['Buy it immediately', 'Compare prices at different stores', 'Borrow money to get it', 'Ignore the price'],
    correctAnswer: 1,
    explanation: 'Comparing prices helps you find the best deal and save money!'
  },
  {
    id: '24',
    question: 'What is a discount?',
    options: ['An extra charge', 'A reduction in price', 'A type of bank', 'A savings account'],
    correctAnswer: 1,
    explanation: 'A discount reduces the price of something, saving you money!'
  },
  {
    id: '25',
    question: 'Why is it good to wait before buying something you want?',
    options: ['It might disappear', 'You might realize you don\'t really need it', 'Prices always go up', 'There\'s no reason to wait'],
    correctAnswer: 1,
    explanation: 'Waiting helps you decide if you really need it and avoid impulse buying!'
  },
  
  // Money Math
  {
    id: '26',
    question: 'If you have $50 and spend $15, how much do you have left?',
    options: ['$30', '$35', '$40', '$25'],
    correctAnswer: 1,
    explanation: '$50 - $15 = $35 remaining!'
  },
  {
    id: '27',
    question: 'You have $10. A book costs $7. Can you buy it and have money left?',
    options: ['No, not enough money', 'Yes, you\'ll have $3 left', 'Yes, you\'ll have $7 left', 'You need exactly $7'],
    correctAnswer: 1,
    explanation: '$10 - $7 = $3 left over. Always check your change!'
  },
  {
    id: '28',
    question: 'If 4 friends split a $20 pizza equally, how much does each pay?',
    options: ['$4', '$5', '$6', '$10'],
    correctAnswer: 1,
    explanation: '$20 ÷ 4 friends = $5 each. Sharing costs is smart!'
  },
  {
    id: '29',
    question: 'You save $25 per month. How much will you have in 6 months?',
    options: ['$100', '$125', '$150', '$175'],
    correctAnswer: 2,
    explanation: '$25 x 6 months = $150. Consistent saving adds up!'
  },
  {
    id: '30',
    question: 'A game costs $45 and you have $30. How much more do you need?',
    options: ['$10', '$15', '$20', '$25'],
    correctAnswer: 1,
    explanation: '$45 - $30 = $15 more needed. Set a savings goal!'
  },
  
  // Giving & Sharing
  {
    id: '31',
    question: 'What is a donation?',
    options: ['A loan', 'Money or items you give to help others', 'A savings account', 'A business'],
    correctAnswer: 1,
    explanation: 'A donation is giving to help others without expecting anything in return!'
  },
  {
    id: '32',
    question: 'Why might someone give money to charity?',
    options: ['To get more money back', 'To help people in need', 'To show off', 'Because they have to'],
    correctAnswer: 1,
    explanation: 'Giving to charity helps people and communities that need support!'
  },
  {
    id: '33',
    question: 'What is one way to share with others without using money?',
    options: ['Donate old toys or clothes', 'Buy them expensive gifts', 'Lend them money', 'Keep everything for yourself'],
    correctAnswer: 0,
    explanation: 'Donating items you no longer need is a great way to help others!'
  },
  
  // Credit & Debt
  {
    id: '34',
    question: 'What happens if you don\'t pay back a loan?',
    options: ['Nothing bad happens', 'You may owe even more money', 'The bank forgets about it', 'You get free money'],
    correctAnswer: 1,
    explanation: 'Not paying loans leads to fees and owing more money - always pay what you borrow!'
  },
  {
    id: '35',
    question: 'What is debt?',
    options: ['Money you have saved', 'Money you owe to someone', 'Money you earned', 'A type of gift'],
    correctAnswer: 1,
    explanation: 'Debt is money you owe and must pay back.'
  },
  {
    id: '36',
    question: 'Why is too much debt bad?',
    options: ['It gives you more money', 'You have to pay back more than you borrowed', 'Debt is always good', 'Banks like debt'],
    correctAnswer: 1,
    explanation: 'Too much debt means you spend future money paying interest instead of saving!'
  },
  
  // Goals & Planning
  {
    id: '37',
    question: 'What is a savings goal?',
    options: ['Spending all your money', 'Something specific you\'re saving money for', 'A type of loan', 'A credit card limit'],
    correctAnswer: 1,
    explanation: 'A savings goal is a specific thing you want to save money to buy or do!'
  },
  {
    id: '38',
    question: 'You want to buy a $60 video game. You save $10/week. How many weeks to reach your goal?',
    options: ['4 weeks', '5 weeks', '6 weeks', '7 weeks'],
    correctAnswer: 2,
    explanation: '$60 ÷ $10 per week = 6 weeks of saving!'
  },
  {
    id: '39',
    question: 'What\'s the first step in saving for something?',
    options: ['Borrow money', 'Decide what you want and how much it costs', 'Spend money now', 'Ask friends for money'],
    correctAnswer: 1,
    explanation: 'First, set a clear goal so you know how much to save!'
  },
  {
    id: '40',
    question: 'Short-term goals are things you want to:',
    options: ['Never achieve', 'Achieve soon (days to months)', 'Achieve in many years', 'Forget about'],
    correctAnswer: 1,
    explanation: 'Short-term goals can be reached quickly - like saving for a small toy!'
  },
  
  // Making Choices
  {
    id: '41',
    question: 'What is an "opportunity cost"?',
    options: ['Free money', 'What you give up when making a choice', 'A sale at a store', 'A bank fee'],
    correctAnswer: 1,
    explanation: 'When you choose one thing, you give up something else - that\'s opportunity cost!'
  },
  {
    id: '42',
    question: 'You have $20. You can buy a book OR a toy, not both. What is this called?',
    options: ['Free choice', 'A trade-off', 'A sale', 'An investment'],
    correctAnswer: 1,
    explanation: 'A trade-off means choosing one option means giving up another.'
  },
  {
    id: '43',
    question: 'Which is smarter: spending $50 on candy or saving it for a bike?',
    options: ['Candy - it tastes good!', 'Saving for the bike - it lasts longer', 'Both are equally good', 'Neither - give it away'],
    correctAnswer: 1,
    explanation: 'Saving for something you\'ll use for a long time is usually smarter!'
  },
  
  // Investing Basics
  {
    id: '44',
    question: 'What does "investing" mean?',
    options: ['Spending all your money', 'Using money to try to make more money', 'Hiding money under your bed', 'Giving money away'],
    correctAnswer: 1,
    explanation: 'Investing means putting money into something hoping it will grow over time!'
  },
  {
    id: '45',
    question: 'Why do people invest money?',
    options: ['To lose it quickly', 'To help it grow over time', 'Because banks don\'t exist', 'For fun only'],
    correctAnswer: 1,
    explanation: 'Investing can help your money grow more than just saving it!'
  },
  
  // Safety & Scams
  {
    id: '46',
    question: 'Someone online promises to double your money if you send them $50. What should you do?',
    options: ['Send the money immediately', 'Don\'t trust it - it\'s probably a scam', 'Send more money', 'Tell all your friends to do it'],
    correctAnswer: 1,
    explanation: 'If something sounds too good to be true, it usually is! Never send money to strangers.'
  },
  {
    id: '47',
    question: 'What is a scam?',
    options: ['A good deal', 'A trick to steal your money', 'A type of bank', 'A savings account'],
    correctAnswer: 1,
    explanation: 'Scams are dishonest tricks designed to take your money. Be careful!'
  },
  {
    id: '48',
    question: 'Should you share your bank account password with friends?',
    options: ['Yes, always share', 'No, keep it private and safe', 'Only if they ask nicely', 'Yes, if they\'re best friends'],
    correctAnswer: 1,
    explanation: 'Never share passwords or financial information with anyone except trusted adults!'
  },
  
  // Business Basics
  {
    id: '49',
    question: 'What is profit?',
    options: ['Money you spend', 'Money you earn after paying costs', 'Money you borrow', 'Money you lose'],
    correctAnswer: 1,
    explanation: 'Profit is the money left over after paying all your business expenses!'
  },
  {
    id: '50',
    question: 'You sell lemonade for $1 and it costs $0.25 to make each cup. What is your profit per cup?',
    options: ['$0.50', '$0.75', '$1.00', '$0.25'],
    correctAnswer: 1,
    explanation: '$1.00 - $0.25 = $0.75 profit per cup. Great business thinking!'
  },
  {
    id: '51',
    question: 'What does a business need to make money?',
    options: ['Customers', 'Free products', 'No expenses', 'Unlimited money'],
    correctAnswer: 0,
    explanation: 'Without customers buying products or services, a business can\'t earn money!'
  },
  {
    id: '52',
    question: 'What is a customer?',
    options: ['Someone who works for free', 'Someone who buys goods or services', 'A type of bank', 'A loan'],
    correctAnswer: 1,
    explanation: 'Customers are people who pay for products or services from a business!'
  },
  
  // Taxes Basics
  {
    id: '53',
    question: 'What are taxes used for?',
    options: ['For the government to keep', 'To pay for roads, schools, and public services', 'To make people poor', 'Nothing useful'],
    correctAnswer: 1,
    explanation: 'Taxes help pay for things everyone uses like roads, schools, and parks!'
  },
  {
    id: '54',
    question: 'If an item costs $10 and tax is $1, what do you pay?',
    options: ['$9', '$10', '$11', '$12'],
    correctAnswer: 2,
    explanation: '$10 + $1 tax = $11 total. Tax is added to the price!'
  },
  
  // Currency & Money
  {
    id: '55',
    question: 'How many cents are in a dollar?',
    options: ['10', '50', '100', '1000'],
    correctAnswer: 2,
    explanation: 'There are 100 cents in every dollar!'
  },
  {
    id: '56',
    question: 'If you have 3 quarters, how much money do you have?',
    options: ['$0.50', '$0.75', '$1.00', '$0.30'],
    correctAnswer: 1,
    explanation: 'Each quarter is $0.25, so 3 quarters = $0.75!'
  },
  {
    id: '57',
    question: 'What is currency?',
    options: ['A type of food', 'The money used in a country', 'A video game', 'A bank'],
    correctAnswer: 1,
    explanation: 'Currency is the type of money used in a country, like dollars or euros!'
  },
  
  // Advanced Concepts
  {
    id: '58',
    question: 'What does "living within your means" mean?',
    options: ['Spending more than you earn', 'Spending less than or equal to what you earn', 'Never spending money', 'Borrowing as much as possible'],
    correctAnswer: 1,
    explanation: 'Living within your means is spending only what you can afford!'
  },
  {
    id: '59',
    question: 'What is compound interest?',
    options: ['Interest only on your original money', 'Interest that earns more interest over time', 'A type of loan', 'A fee banks charge'],
    correctAnswer: 1,
    explanation: 'Compound interest means you earn interest on both your money AND the interest you\'ve already earned!'
  },
  {
    id: '60',
    question: 'What should you do with extra birthday money?',
    options: ['Spend it all immediately', 'Save some and spend some wisely', 'Hide it and forget about it', 'Give it all away'],
    correctAnswer: 1,
    explanation: 'A good strategy is to save some and thoughtfully spend some!'
  },
];

export const getRandomQuestion = (): Question => {
  return financialQuestions[Math.floor(Math.random() * financialQuestions.length)];
};

export const getRandomQuestions = (count: number): Question[] => {
  const shuffled = [...financialQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};
