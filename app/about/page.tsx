import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <div className="bg-gradient-to-b from-navy-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl font-bold text-navy-900 mb-4">
            About Simply Smart Money
          </h1>
          <p className="text-xl text-navy-700">
            Making personal finance simple, practical, and achievable for everyone.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Story Section */}
        <section className="mb-16">
          <h2 className="font-playfair text-3xl font-bold text-navy-900 mb-6">
            Our Story
          </h2>
          <div className="space-y-4 text-navy-700 leading-relaxed">
            <p>
              Simply Smart Money was created with a simple mission: to demystify personal finance and make it accessible to everyone. We believe that financial success isn't about complex strategies or luck—it's about understanding the fundamentals and taking consistent action.
            </p>
            <p>
              Our team comes from diverse financial backgrounds, and we've learned valuable lessons from our own money journeys. We've made mistakes, discovered what works, and now we're sharing that knowledge with you.
            </p>
            <p>
              Whether you're looking to save more, earn extra income, or simply get your finances in order, we're here to guide you with practical, no-nonsense advice.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="font-playfair text-3xl font-bold text-navy-900 mb-8">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Practical',
                description:
                  'We focus on actionable advice you can implement today, not complex financial theory.',
              },
              {
                title: 'Honest',
                description:
                  'No secrets, no selling, just straightforward financial guidance based on real experience.',
              },
              {
                title: 'Accessible',
                description:
                  'Financial advice should be easy to understand, regardless of your background or current situation.',
              },
            ].map((value, idx) => (
              <div key={idx} className="card bg-white">
                <h3 className="font-playfair text-xl font-bold text-navy-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-navy-700">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What We Cover Section */}
        <section className="mb-16">
          <h2 className="font-playfair text-3xl font-bold text-navy-900 mb-8">
            What We Cover
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              '💰 Savings strategies and emergency funds',
              '💻 Making money online and digital income',
              '🚀 Side hustles and extra income streams',
              '📊 Budgeting methods and financial planning',
              '💡 Money hacks and financial tips',
              '📈 Building wealth and long-term financial goals',
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">{item.split(' ')[0]}</span>
                <p className="text-navy-700 pt-1">{item.split(' ').slice(1).join(' ')}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-navy-900 text-white rounded-lg p-8 text-center">
          <h2 className="font-playfair text-3xl font-bold mb-4">
            Start Your Money Journey Today
          </h2>
          <p className="text-navy-200 mb-6 max-w-2xl mx-auto">
            Join our community of thousands learning to manage their money smarter.
          </p>
          <Link
            href="/blog"
            className="inline-block bg-navy-600 hover:bg-navy-700 text-white px-8 py-3 rounded-lg font-sourceSans font-bold"
          >
            Explore Articles
          </Link>
        </section>
      </div>
    </>
  );
}
