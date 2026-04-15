export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured: boolean;
  content: string;
};

export const posts: Post[] = [
  {
    slug: "engineering-interfaces-that-disappear",
    title: "Engineering Interfaces That Disappear",
    excerpt:
      "The best interfaces are the ones users never think about. We explore the craft behind invisible UX and why restraint is the hardest skill to master.",
    category: "Design",
    date: "April 10, 2026",
    readTime: "5 min read",
    featured: true,
    content: `
There is a particular kind of satisfaction in building something no one notices.

Not because it failed — but because it worked so completely that it ceased to exist in the user's mind. They moved through it, accomplished what they came to do, and left without thinking once about the interface itself. That is the highest form of the craft.

## The Paradox of Invisible Work

Most people assume that good design is about what you add. A refined animation here. A considered typeface there. A color palette that evokes the right emotion. And while those things matter, the real discipline is in what you remove.

Every label that forces a user to read is a small failure. Every confirmation dialog that interrupts a natural flow is friction that erodes trust. Every option that requires a decision is a tax on attention.

The best interfaces encode understanding. They anticipate what you need before you know you need it. They remove choices not by being opinionated, but by being *correct*.

## Restraint Is Learned, Not Natural

Early in a project, the instinct is always to add. A feature, a shortcut, a secondary action tucked into a menu. The interface grows. It becomes capable. And somewhere in that growth, it stops being a tool and becomes an environment — a place the user has to learn rather than a surface they simply use.

Restraint is what you develop after you've seen that pattern enough times to recognize it while it's happening.

It means saying: this feature is real, the user has asked for it, and we are still not going to build it yet. It means holding the interface at a moment of clarity while the pressure to expand it is enormous.

## What "Disappearing" Actually Requires

For an interface to disappear, it has to be right in every small way. The tap target has to be large enough that you never miss it but precise enough that you never hit the wrong thing. The loading state has to be honest — fast enough to not interrupt, honest enough to not deceive.

Language has to match the user's mental model, not the engineering team's. The word you use for something shapes how people think about it. Use the wrong word and the interface becomes foreign — visible in the worst way.

This is expensive work. It requires iteration, testing, and the willingness to throw out things that are technically correct but experientially wrong.

## The Soul of It

We build interfaces because we believe technology should serve people — not the other way around. When software feels effortless, something real has been accomplished: a human and a machine have been made to move together without friction.

That is what we build toward. Not interfaces that impress, but interfaces that disappear.
    `.trim(),
  },
  {
    slug: "building-with-human-intent",
    title: "Building with Human Intent",
    excerpt:
      "Technical mastery alone isn't enough. The products that endure are built by teams who understand what people actually need — not what they say they want.",
    category: "Product",
    date: "March 14, 2026",
    readTime: "4 min read",
    featured: false,
    content: `
People are not very good at describing what they want. This is not a criticism — it is a fact of how humans process experience. We articulate preferences in terms of what we already know, not in terms of what would actually serve us.

Henry Ford's famous line about faster horses is overused, but the underlying observation is real: the gap between what someone asks for and what would actually help them is often enormous. Bridging that gap is the most underestimated skill in product development.

## The Literal Trap

Early in our work with clients, we listen carefully to requirements. We write them down. We build what's described. And then, more often than not, the delivered product is met with a version of: *this is exactly what I asked for, but it's not what I needed.*

The literal trap is building what was specified rather than solving what was intended. It produces software that is technically correct and experientially useless.

Escaping it requires something that feels presumptuous at first: understanding the user's world well enough to know when they're asking for the wrong thing.

## Intent Over Instruction

Human intent lives beneath the surface of what's said. Someone who asks for a dashboard with twelve charts probably wants to feel in control of something they don't fully understand. Someone who asks for a faster search probably wants to stop dreading a task they do fifty times a day.

When you build to the intent rather than the instruction, the solution often looks nothing like what was requested — and it works far better.

This requires deep listening. Not to the words but to the frustration underneath them. To the workaround someone has built in a spreadsheet because the official tool doesn't quite do what they need. To the thing they apologize for before they show it to you.

## The Warmth in the Work

There is something that happens when you get this right. The person using the thing you built feels understood. Not just served — *understood*. That distinction matters enormously.

Products built to the letter of a requirement feel transactional. Products built to the intent of a need feel like they were made for you. That feeling is not accidental. It is the direct result of a team that cared enough to understand before they built.

## What We Believe

Technical excellence is a baseline. Any competent team can build something that functions. What separates enduring products from forgettable ones is the degree to which they reflect an accurate understanding of the people who will live inside them.

We build with human intent because we believe software should feel like it was made by people who thought carefully about other people. Because in the end, that is what it means to engineer with soul.
    `.trim(),
  },
];
