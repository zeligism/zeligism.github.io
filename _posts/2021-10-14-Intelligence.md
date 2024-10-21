---
layout: post
title:  "A Stupid Analysis of Intelligence"
date:   2021-10-14 02:18:19 +0400
---

Consider this machine learning-inspired definition of intelligence. Intelligence is a relative property such that one is more intelligent, *with respect to an expectation over a distribution of tasks*, if: 1) one has a better model of some task with respect to some metric (i.e., that measures performance), and 2) one converges towards a "good" model of some task more quickly with respect to some performance constraint using the metric, i.e. performs the task well enough with a lesser amount of work or action. Note that we need: 1) a distribution of tasks, 2) a metric to measure the performance of the model, and 3) a performance constraint for a good enough model (I guess this is optional if an optimal model exists and is tractable).

Now, the million dollar question: Einstein or Newton?
You knew it was coming.
Consider the distribution of the following tasks: discover new theories and solve unsolved physics problems.
The problem is that there is a confounding variable, which is history because your overall environment and the status of physics certainly affects your intelligence under this distribution of tasks.
Without accounting for this, it is impossible to determine who is more intelligent.
Consider the distribution of just solving physics problems.
Then, maybe we can find historical records of the performance of both Einstein and Newton on some physics problem.
You could say Newton "invented" calculus, or Einstein beat Hilbert in doing the spacetime curvature math,
both of which are incredible feats of math prowess and intelligence.
The answer remains unclear unless one defines a distribution of tasks with respect to which a clear-cut comparison in terms of model accuracy and convergence speed is possible.
For example, the tasks of discovering theories with everyday-life implications might have Newton winning, but Einstein's discoveries could still be playing a role in terms of the GPS technology.
You can see how intelligence is difficult to compare.
It is extremely dependent on the distribution of tasks.

Suppose that some savant have the ability to see and understand things that normal humans cannot possibly fathom.
It might be interesting to ponder the fact that “the theory of everything” right now might be in someone’s head who will never be able communicate it.
Intelligence has to be an observable property.
For the intelligence of the savant who discovered the theory of everything in his garage to manifest, he has to, at the very least, gesture that he reached this discovery.

**Update 2024/10**:
I recently saw [a CLIMB talk by Christos Papadimitriou](https://www.youtube.com/watch?v=-aSBlRhpwVc) about the intractability of computing the Nash equilibrium and, among other things, how to reinterpret games so that the computation of the Nash equilibrium becomes tractable (or something like that.. the topic is way out of my expertise).
It might seem completely unrelated to the discussion here at a first glance.
However, there is a vague similarity between their reinterpretation of games and the definition of intelligence, perhaps hinting at a connection between how we perceive the intelligence of an agent on a distribution of tasks and how efficiently an agent computes or reaches the equilibirum of some game.
In short, based on what I understood, a game is mapping from a distribution over pure strategies or initial preferences (prior) to a distribution over *sink equilibria* (posterior).
A *sink equilibrium* is a sort of a generalization of a Nash equilibrium; it is a strongly connected graph in which cycles of game plays occur and the agent can never leave, so to speak.
I just thought this is worth mentioning, and if you're interested in game theory and intelligence, then surely you wouldn't want to skip this talk.
