const Testimonials = () => {
  const testimonials = [
    {
      avatar: '/ayyoub.png',
      name: 'Bouazza Ayyoub',
      title: 'Software Engineer',
      quote:
        "Okay, Herbify saved me and my kitchen from herb identity crises! 🌿 It's like having a GPS for coriander and parsley in Moroccan dishes – no more getting lost in the herb jungle!",
    },
    {
      avatar: '/ussama.jpeg',
      name: 'Oussama Abdedaime',
      title: 'Founder of Digital Lions | Software Engineer',
      quote:
        "With this app, I can finally tell the difference between coriander (Qazbor) and parsley (Maadanous) without having to ask my mother—she'll be so impressed!",
    },
    {
      avatar:
        '/anonymous-man.png',
      name: '@Creskopper',
      title: 'Designer & Web Developer',
      quote:
        'Herbify is the answer to my green dilemma. I no longer have to worry about mixing up these two similar-looking plants. With just a photo from my phone\'s camera, Herbify will tell me which herb is which.',
    },
  ];

  return (
    <SectionWrapper>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 top-24 grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-30"
        >
          <div className="h-40 bg-gradient-to-br from-green-600 to-green-400 blur-[106px] " />
          <div className="h-30 bg-gradient-to-r from-green-400 to-green-300 blur-[106px] " />
        </div>
        <div className="relative max-w-2xl sm:text-center md:mx-auto">
          <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            See what others saying about us
          </h2>
          <p className="mt-3 text-gray-600">
            Listen to what our users are saying about us.
          </p>
        </div>
        <div className="mt-12 relative">
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, idx) => (
              <li
                key={idx}
                className="bg-white  p-6 rounded-2xl shadow-2xl shadow-gray-600/10 shadow-lg"
              >
                <figure>
                  <div className="flex items-center gap-x-4">
                    <img
                      src={item.avatar}
                      className="w-14 h-14 object-cover rounded-full"
                      alt={item.name}
                    />
                    <div className="">
                      <span className="block text-gray-800 font-semibold">
                        {item.name}
                      </span>
                      <span className="block text-gray-600 text-sm mt-0.5">
                        {item.title}
                      </span>
                    </div>
                  </div>
                  <blockquote>
                    <p className="mt-6 text-gray-700">{`"${item.quote}"`}</p>
                  </blockquote>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

const SectionWrapper = ({ children, ...props }: any) => (
  <section {...props} className={`py-16 ${props.className || ''}`}>
    {children}
  </section>
);

export default Testimonials;
