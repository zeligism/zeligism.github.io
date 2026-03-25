---
layout: post
title:  "A Consistent World"
date:   2022-03-02 02:18:19 +0400
---

The idea of a world view in AI is very important. If you want to simulate an autonomous agent that interacts with the world, then the agent has to maintain some "view" (or model) of the world.

#### World-view

This world-view should contain as much info about the world as possible in order to be efficient—maybe even the entire history of the observations of the world in case memory is limitless.
However, memory storage a constraint, so are memory access and computing power.
If memory is limitless, then can we really access it efficiently?
Unless it exhibits a finite pattern, a limitless memory is not efficient.

If memory is finite, then compression is obviously an advantage.
Efficient compression and access are desirable.
Though these two are not absolute but rather depend on context.

I believe that our memories are stored in sequential code, i.e., memories are compressed as the output of much shorter programs.
This way, you can compress even infinite strings into a finite program as long as they exhibit some finite pattern or description (like this guy π).

#### Programs

When you introduce programs, you will then have to introduce interpreters because the same program can be interpreted differently by different agents.
When it comes to language, the interpretation is up to the agents that are using it.
Language construction and interpretation is distributed in some sense; it is not local to a single agent and it evolves as a whole as there is no single truth to language interpretation.
This allows language to be stable among the majority of agents without having a central authority.
Large deviations are usually suppressed and frowned upon.
Even though adjustments are local (feedback comes only from neighbors), all the agents can converge to the same knowledge at the end as long as the network is connected (i.e., has no disconnected subgraphs).

In the same manner, we can have a distributed memory with nodes that independently processes program descriptions, generates outputs, verify them, and adjust the interpretation by consensus.
The interpretation should be able to reconstruct the relevant parts of the sensory inputs (or an intermediary description of it) as perfectly as possible. This compression-interpretation process can be hierarchical as well.
Once the agents reach a stable compression-interpretation program, they can store memories as accurately as possible in the shortest form possible.
What remains is accessing this particular memory through an index.

#### Dreams

Indexing is the context-relevant part of the story.
When we say “index”, we’re not really talking about a number or a memory address.
We’re talking about a signal that evokes a memory (given state) smoothly such that a slightly different signal can still evoke similar memories.
The signal could be a picture of a scene that you saw or a specific tone you heard during that memory.
Recalling a memory is similar to a search program that runs in the brain, so it is not that different from other “programs” running in the brain.

Terms like “program”, “description” , and “algorithm” describe the same phenomenon in the brain.
But the brain actually has an automatic recall feature, where a sensation can involuntarily remind you of something correlated to it, potentially completely irrelevant or just relevant to either the sensation or the context.
This feature can be exploited to perform a converging indexing routine.
For example, we can start with a seed signal and start actively recalling memories from it.
Then, we select the most relevant memories and try to recall finer details recursively in the same fashion.
This iterative process should run until we converge to the target memory, which, by the way, might not necessarily be an actual memory that we had but a made up one.
One only has to believe that such a memory exists and brainwash oneself.
You can’t recall a memory that didn’t happen, so you generate it and thus know that it is fake.
But *wouldn’t recalling a memory that have indeed happened be the same*?
Don’t we simply “re-generate” actual memories while assuming that they are real?

#### Guts

The converging process might not necessarily converge to a crystal clear memory.
We kinda have a hidden stopping criterion to this recall process.
Some memories feel very relevant, and may as well feel true in the sense that they happened.
What is this feeling? Is it guts?

This “gut feeling”, I believe, is the "qualia" byproduct of the stopping criterion of the recall process, which evaluates the relevance of a memory or the verisimilitude of a thought.
If your gut feeling is conflicted and uneasy, then you’re brain is basically saying that you haven’t converged yet.
A strong gut feeling tells you that you have a strong instinct to believe in the result of the given recall query.
The query is the source of conflict that was introduced from the I/O world, either by yourself or by an external source of information.
Further explaining and understanding the emergence of this gut feeling, beyond the fact that it feels as elementary as the sense of a smell or a color, is completely out of my scope.
The invokation of such queries in the first place might even come from our instinctive needs such as curiosity, survival, reproduction, etc.

#### Time moves forward, but it doesn't care

How should the world-view changes with each access with time?
Does the brain process two consecutive “moments” in the same exact manner?
Well, it does have the ability to tell which moment came before, what happened and what didn’t, what might happen, and what might have happened if something else happened.

I believe that the brain does not have a “clock”.
It only creates chains of events that are marked by their temporal positions with respect to some significant event of which the date or timestamp had been explicitly memorized (e.g. your birth, your school years, etc.).
Sometimes, it’s difficult to recall which year a particular event happened in your life, or whether one event happened before the other (think about what year in college you took a particular course, or how fast time moves in some scenarios vs. how slow it seems to move in others).
The temporal order is only relevant when there is an interesting pattern.
Who cares whether you yawned or scratched your head, and whether you did it before brushing your teeth or before sleeping.
These are very trivial events that can be totally forgotten about, and perhaps even believed to have not happened at all—let alone recall their temporal order.
Surely, absolutely nothing will change if you forgot the temporal order of these events, unless someone recorded that information and decided to quiz you on it for a million dollar (damn, that would totally suck).

Seems like time is only important in the sense that it can only be “consumed” by “going forward”, and what is left behind in the back is something that “happened” for sure, regardless of what came before.
Everything else is uncertain in this world.
Heck, even the things that we observe are only as good as our observations themselves.
It is much like the process of discovering a mathematical theorem.
I mean, that’s why it’s called “discovering a theorem” because it was already there and we just merely observed it and verified its consistency.

#### Consistency

Now if you connect the whole thing together and try to squeeze it all into one grand picture, you do get some fundamental ideas behind the world-view.

We said that memories can be seen as distributed programs that take a seed signal and produce a sequence of converging signals.
The signals converge if the memory exists and can be "recalled", where convergence is evaluated by gut feeling.
In addition, there is no explicit temporal order in this world-view.
The sequence of signals produced in this process dictates the temporal order, not the other way around.

So what do we take from that?
Probably the fact that “consistency” is key.
Consistency is paramount to world-view, probably for the same reason that it is for math, science, and any other discipline that is based on axiomatic principles.
Without consistency, memories cannot be compressed well and cannot be recalled reliably.
Also, temporal order would be distorted and probably collapse.
So what we can take away is that the world-view is maintained by minimizing inconsistencies as much as possible.
Inconsistencies can be succinctly described as “contradictory observations”, e.g., observations that say that such and such has the property of being something and where it is not.
These are usually found in the edge cases, where prior knowledge have to be refined in order to maintain the consistency of the world-view.
Inconsistencies can be dealt with either by deleting one observation—acknowledging the fact that we observed wrongly—or by “adding” details to the observations (e.g. adding conditions, “something is X at one moment, but could be Y at another”).
Proceeding like this, our world-view becomes more and more consistent, allowing us to have a better expectation of the future (predictive coding).
This is assuming we live in a stable, consistent world (well, as long we have science and not magic, I guess we do).

#### “Self”-Consistency

We still haven’t attempted to explain the way agents should interact with the world given this world-view, and why the heck people have different world-views if the process of maintaining one is as simple as “eliminate inconsistencies”.
To answer the second question first, it is because the gut feeling factor is controlled by genetics, as well as the process of inconsistency elimination itself.
People can eliminate inconsistencies differently, and sometimes even still achieve the same world-view.

So the interesting question is how agents interact with the world.
This is a very interesting question, and it is perhaps the crux of this essay, despite being not so central to the idea of a world-view per se.
This is what I believe:
**Agents interact with the world in a manner that maintains their world-view consistency**.
There is nothing particularly deep about that statement, I know, but I do think it’s deep.
The reason why I think it’s deep is because in this framework, it seems like the agent’s identity is intertwined with the world’s identity, so the agent sees itself as a “thing” in this world: a thing which it could directly—but not completely—control.
The agent is sort of peeping into the world through a spiritual hole that is the “self”, i.e., playing the world video game, but cannot pause (the heart keeps on beating).

The existence of the source of decisions and the engine of our interactions can literally be anywhere.
It only needs this channel which is somewhere in the brain.
It might even be the case that all consciousnesses exist in a realm where they are somehow interconnected.
Sure, that’s stepping into sci-fi territory, but prove me wrong.
Looking at it this way, you start to feel kinda detached from your worldly “self”.
The brain has full control of what happens in the world, but it doesn’t have full control of its inputs—the inputs that come from that thing over there in the astral realm of “free will”, consciousness, and whatnot.
You know what I mean?

#### Rewards, Curiosity, Etc.

Anyway, this is kinda bullshit.
The brain’s behavior can be explained elegantly by other simple concepts such as reward-maximization, curiosity, etc.
But some of these can still be described in the aforementioned framework.
Curiosity can be a part of the inconsistency elimination process given that the agent have the ability to generate elements in its world-view that were not observed before per se, and thus the agent might feel like it has the need to verify the modified—but in some parts imaginary—world-view that it now has.
Also, I think that reward-maximization is a subset of inconsistency elimination.
Reward-maximization is a special case when the agent sees itself wanting the rewards, but it does not capture the case when it sees itself not deserving of the reward.
Thus, the agent can condition itself to paradoxically evoke negative feelings about rewards.
However, in most cases, inconsistency elimination and reward-maximization are synonymous.

#### \~

In the end, I think that what the agent wants depends on genetics as well as consistency of a world-view.
This is the agent-driven (internal) model.
As for the environment-driven (external) model, lower energy is desirable, which gives rise to conciseness.
Thus, the intelligent agent will minimize the extent in which the constraints of the environment are violated (including energy constraints) while maximizing the consistency of its world-view.
Consistency and conciseness are two faces of the same coin.
