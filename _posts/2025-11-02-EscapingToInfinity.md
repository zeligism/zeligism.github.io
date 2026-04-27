---
layout: post
title:  Four Ways to Escape to Infinity
date:   2025-11-02 20:42:43 +0900
academic: true
custom_css:
  - /assets/css/measure-sequences.css
custom_js:
  - /assets/js/measure-sequences.js
---

Escaping *from* infinity is different from escaping *to* infinity.
When we say infinity, we are referring to some quantity that becomes unbounded as we *go further*.
But when a thing escapes *to* infinity, its total mass can stay *finite* while still somehow managing to evade convergence, often due to degeneracies in the way we measure its mass.

Consider this weird argument that I just came up with.
Let's say we're measuring speed.
So, you're running in a competition really fast.
You send me a message and ask me: "what is my speed?"
And I answer: "$$c$$."
Ok, I know this doesn't make sense, but hear me out.
I secretly decided that every particle that counts as **you** includes the photons bouncing off you, which I can trace and measure.
So "you" were already moving at the speed of light.
If we instead measure only the massive stuff that makes you up, the pathology disappears.
That is *almost* you. Get it?

---

Say our measurement function is $$f$$, so when we measure a state $$x$$, the measurement is $$f(x)$$.
The measure across many states is $$\sum_x f(x)$$ or $$\int f(x) dx$$.
Strictly speaking, $$f$$ is really the function or density here, while the underlying notion of set-size comes from a background measure. In the examples below, that background measure is just ordinary Lebesgue measure.
Measure theory studies measurements that behave nicely.
But measure theorists are naughty, so they came up with various functions that do not behave nicely.

Let's make the term "behaves nicely" more concrete.
If $$f$$ is meant to define a probability measure, the most obvious requirements are non-negativity $$f(x) \ge 0, \forall x \in X$$ and finiteness of the total mass $$\int_X f(x) dx < \infty$$.
Instead of vague finiteness, we ask it to satisfy the normalized value of 1, i.e., $$\int_X f(x) dx = 1$$.

Measurements that behave nicely are *robust* in the sense that the "magnitude" is finite, and by magnitude, we mean norm.
The $$L^p$$ norm of $$f$$ is $$\big( \int \lvert f(x) \rvert^p dx \big)^{1/p}$$.
Since $$f$$ is always non-negative, the $$L^1$$ norm is exactly the total mass of $$f$$ on $$X$$.

This gets more complicated because measure theorists are really naughty, but also really smart.
Sometimes, you may want to surround your enemy everywhere, slowly close in on them, and then make sure to capture them without having them escape.
Measure theorists do this to some function of interest by studying a sequence of functions that converge to it, i.e., $$f_n \to f$$ as $$n \to \infty$$.
The function can converge in several ways: pointwise, uniformly, *in measure*, or *in $$L^p$$*, depending on how we measure the difference.

Let us consider a simple construction.
Suppose my measurement function is really naughty and oscillates wildly within a specific range.
Here is the epsilon-of-room trick: it may still converge in measure if the set where the oscillation happens keeps shrinking.
For example, take $$f_n(x)=1_{[0,1/n]}(x)\big(1+\sin^2(nx)\big)$$.
It wiggles around and definitely does not *look* like it wants to behave, but for any fixed threshold $$\delta > 0$$, the set where $$f_n(x) > \delta$$ sits inside $$[0,1/n]$$ and therefore has measure at most $$1/n \to 0$$.
So the function still has enough room to be naughty, but less and less room to do so.

---

A *human* can be finite, yet the *soul* vanishes—journeying beyond the infinite horizon, diffusing infinitely, reaching the infinite heights, or wandering back and forth infinitely—and dies slowly but surely.

This isn’t Zen poetry. These are convergence phenomena of some exotic functions, where "human" and "soul" stand for the total mass $$\int f\,dm$$ and the function $$f$$. It’s a peculiarity of measure theory that makes it simultaneously intriguing yet boring at the same time.

The above functions correspond respectively to examples 1.5.2-5 of “An Introduction to Measure Theory” by Terence Tao.


## Escaping into horizontal infinity.

This function is literally a box that travels to the right forever, one step at a time. Quite simple.

$$
f_n(x) = 1_{[n,n+1]}(x)
$$

{% include measure_sequence.html sequence="horizontal" %}


## Escaping into width infinity.

This function divides its mass along the x-axis, sort of squashing itself flat. Imagine flattening a dough with your hand. It’s the same mass of dough, but it becomes thinner and wider as you flatten it.

$$
f_n(x) = \frac1n\,1_{[0,n]}(x)
$$

{% include measure_sequence.html sequence="width" %}


## Escaping into height infinity.
AKA *escaping into vertical infinity*.

I thought calling it *height infinity* is more accurate since it is almost a reflected version of the *width infinity* case.

$$
f_n(x) = n\,1_{[1/n,\,2/n]}(x)
$$

{% include measure_sequence.html sequence="height" %}


## Escaping into an infinite cycle.
AKA *typewriter sequence*.

This one is tricky to visualize without some code. It’s a function that cycles around the [0,1] interval, halving its width every cycle.

A standard indexing is
$$
f_n(x)=1_{[j/2^k,\,(j+1)/2^k]}(x),
\qquad n=2^k+j,\quad 0\le j<2^k.
$$

$$f_n(x) = 1_{[\frac{n-2^k}{2^k}, \frac{n-2^k+1}{2^k}]}(x),$$
where $k = \text{floor}(\log_2 n)$, i.e., the unique $k$ such that $2^k \le n \le 2^{k+1}$.

It’s the kind of degeneracy that measure theorists love and find interesting. Indeed, among the notions discussed here, it doesn’t converge except in measure and in $L^p$ norm for finite $p$.

{% include measure_sequence.html sequence="typewriter" %}

## Summary

The above functions and their convergences can be summarized in the tables below.

| Sequence | Pointwise to 0? | Uniformly to 0? | In measure? | In $L^1$ to 0? | In $L^p$ to 0 for $1<p<\infty$? | In $L^\infty$ to 0? |
|---|---|---|---|---|---|---|
| $$1_{[n,n+1]}$$ | Yes | No | No on $$\mathbb{R}$$ | Constant at 1 | Constant at 1 | Constant at 1 |
| $$\frac1n\,1_{[0,n]}$$ | Yes | Yes | Yes | Constant at 1 | $$n^{1/p-1}\to 0$$ | $$1/n\to 0$$ |
| $$n\,1_{[1/n,\,2/n]}$$ | Yes | No | Yes | Constant at 1 | $$n^{1-1/p}\to\infty$$ | $$n\to\infty$$ |
| Typewriter sequence | No | No | Yes on $$[0,1]$$ | $$2^{-k}\to 0$$ | $$2^{-k/p}\to 0$$ | Constant at 1 |

The most important lesson I learned after I skimmed Tao’s book is that edge cases are the force that pushes us into narrower and more sophisticated mathematics.
For example, simple, high-level notions of convergence break down or become ambiguous when mass is allowed to drift, diffuse, concentrate, or cycle.
This is why we need different kinds of convergence, and why swapping limits with integrals is not straightforward.
We need to specialize and generalize our definitions to rigorously cover all of those edge cases.

But some researchers solely embrace measure theory as a scarecrow against those who get easily intimidated by rigor.
Some of them *love* to say “sigma algebra” whenever they can, and in the most unnecessary places.
It's like they're flexing their muscles during an interview.
What I need from measure theory as a machine learning researcher is simple stuff like the notion of "almost everywhere", swapping differentials and integrals, etc. So please keep your sigma boy stuff out of deep learning. Nobody knows what's going on anyway, so let's keep it simple and take it easy.
