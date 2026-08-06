export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

// Sample blog posts data
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'How to Save 50% of Your Income in 12 Months',
    excerpt:
      'Discover proven strategies to dramatically increase your savings rate without sacrificing quality of life.',
    category: 'Savings',
    date: 'January 15, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf35f?w=800&h=400&fit=crop',
    content: `
      <p>Saving 50% of your income might sound impossible, but with the right strategies, it's absolutely achievable. Let's break down how to make this happen.</p>
      
      <h2>1. Track Your Spending</h2>
      <p>The first step to saving more is understanding where your money goes. For the next month, track every single expense. Use an app or a spreadsheet—whatever works for you.</p>
      
      <h2>2. Create a Budget</h2>
      <p>Once you know where your money goes, you can create a realistic budget. Follow the 50/30/20 rule: 50% needs, 30% wants, 20% savings and debt repayment.</p>
      
      <h2>3. Automate Your Savings</h2>
      <p>Set up an automatic transfer from your checking account to your savings account on payday. This "pay yourself first" approach ensures you save before spending.</p>
      
      <h2>4. Cut Unnecessary Expenses</h2>
      <p>Review your subscriptions, memberships, and recurring charges. Cancel anything you don't actively use. Even small cuts add up over time.</p>
      
      <h2>5. Increase Your Income</h2>
      <p>Sometimes, saving more requires earning more. Consider asking for a raise, taking on a side gig, or developing new skills that could lead to higher-paying opportunities.</p>
      
      <h2>6. Use the 24-Hour Rule</h2>
      <p>Before making any non-essential purchase, wait 24 hours. This simple rule eliminates impulse buying and helps you distinguish between wants and needs.</p>
      
      <blockquote>
        The key to saving isn't earning more—it's spending less than you make.
      </blockquote>
      
      <p>Remember, building a savings habit takes time. Start small, celebrate your wins, and stay consistent. You've got this!</p>
    `,
  },
  {
    id: 2,
    title: '10 Realistic Side Hustles That Can Earn You $1000/Month',
    excerpt:
      'Explore practical side gigs that fit around your full-time job and can generate substantial extra income.',
    category: 'Side Hustle',
    date: 'January 10, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
    content: `
      <p>Looking to earn extra money without quitting your day job? Here are 10 realistic side hustles that can help you reach $1000/month.</p>
      
      <h2>1. Freelance Writing</h2>
      <p>If you can write, there's always demand for quality content. Websites like Upwork, Fiverr, and Contently connect writers with clients paying $0.10-$1+ per word.</p>
      
      <h2>2. Virtual Assistance</h2>
      <p>Help entrepreneurs manage their business from home. Tasks include email management, scheduling, and data entry. Earn $15-$30 per hour.</p>
      
      <h2>3. Online Tutoring</h2>
      <p>Teach subjects you're knowledgeable about. Platforms like Chegg, Tutor.com, and Wyzant pay $15-$50 per hour for online tutoring.</p>
      
      <h2>4. Graphic Design</h2>
      <p>Create graphics for social media, websites, and print. If you know design tools, you can earn $25-$100+ per project on freelance sites.</p>
      
      <h2>5. Social Media Management</h2>
      <p>Help small businesses manage their social media accounts. Charge $500-$2000 per month for content creation and engagement management.</p>
      
      <h2>6. Pet Sitting or Dog Walking</h2>
      <p>Use apps like Rover or Wag to find customers. Earn $15-$30 per walk or $25-$75 per day for pet sitting.</p>
      
      <h2>7. Online Reselling</h2>
      <p>Buy items cheaply and resell them on eBay, Amazon, or Poshmark. With smart sourcing, you can earn significant margins.</p>
      
      <h2>8. Consulting</h2>
      <p>If you have specialized knowledge, offer consulting services. Rates typically range from $75-$300+ per hour depending on your expertise.</p>
      
      <h2>9. Content Creation</h2>
      <p>Start a YouTube channel, TikTok, or blog. Monetize through ads, sponsorships, and affiliate marketing once you build an audience.</p>
      
      <h2>10. Dropshipping or E-commerce</h2>
      <p>Create an online store and sell products without holding inventory. Success requires marketing investment but offers high profit potential.</p>
      
      <p>The best side hustle is one that matches your skills and interests. Start with one, master it, then expand to others.</p>
    `,
  },
  {
    id: 3,
    title: 'The Complete Beginner\'s Guide to Budgeting',
    excerpt:
      'Learn the fundamentals of budgeting with step-by-step instructions and practical tools to manage your money.',
    category: 'Budgeting',
    date: 'January 5, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1579427669519-d89f40e6c3cc?w=800&h=400&fit=crop',
    content: `
      <p>Budgeting doesn't have to be complicated. This guide walks you through creating a budget that actually works for your lifestyle.</p>
      
      <h2>What is a Budget?</h2>
      <p>A budget is a plan for your money. It shows how much you earn, how much you spend, and how much you can save. Think of it as a roadmap for your finances.</p>
      
      <h2>Step 1: Calculate Your Income</h2>
      <p>Add up all money you receive each month: salary, freelance work, side gigs, and any other income sources. Use your take-home pay (after taxes).</p>
      
      <h2>Step 2: List Your Expenses</h2>
      <p>Write down everything you spend money on. Categorize them as fixed expenses (rent, insurance) and variable expenses (groceries, entertainment).</p>
      
      <h2>Step 3: Choose a Budgeting Method</h2>
      <p><strong>50/30/20 Rule:</strong> Allocate 50% to needs, 30% to wants, 20% to savings. Simple and effective for most people.</p>
      <p><strong>Zero-Based Budget:</strong> Every dollar has a job. Income minus expenses equals zero. Great for detailed control.</p>
      <p><strong>Envelope Method:</strong> Allocate money to specific categories. Spend only what's in each envelope.</p>
      
      <h2>Step 4: Track Your Spending</h2>
      <p>Use apps like YNAB, Mint, or a simple spreadsheet. Review your spending weekly to stay on track.</p>
      
      <h2>Step 5: Adjust as Needed</h2>
      <p>Your budget won't be perfect the first month. Adjust categories based on actual spending and life changes.</p>
      
      <h2>Common Budgeting Mistakes to Avoid</h2>
      <ul>
        <li>Being too strict (leads to burnout)</li>
        <li>Not tracking irregular expenses</li>
        <li>Forgetting about savings</li>
        <li>Not reviewing regularly</li>
      </ul>
      
      <p>Start with a simple budget and refine it over time. The goal is to spend less than you earn and build financial freedom.</p>
    `,
  },
];

export function getAllPosts(): BlogPost[] {
  return blogPosts;
}

export function getPostById(id: number): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}
