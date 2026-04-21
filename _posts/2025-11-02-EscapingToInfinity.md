---
layout: post
title:  Four Ways to Escape to Infinity
date:   2025-11-02 20:42:43 +0900
academic: true
---

Escaping *from* infinity is different from escaping *to* infinity.
When we say infinity, we are refering to some measureable quantity that becomes unbounded as we *go further*.
When a thing escapes to infinity, its measure is always *finite* but somehow able becomes infinite as it evolves due to various degeneracies in the measurements.

Consider this weird argument that I just came up with because why not.
Let's say we're measuring speed.
So, you're running in a competition, and you come back to me and ask, "what was my speed?"
And I basically answer: "$$c$$. You were running at the speed of light."
Ok, this doesn't make sense from a physics point of view, but hear me out.
I was just counting every particle that you consists of to be **you**, including your photons.
But photons are massless, so we can avoid such degenerate cases by measuring the speed of the non-massless stuff on you.
That is *almost* you. Get it?

---

Say our measurement function is $$f$$, so when we measure a state $$x$$, the measurement is $$f(x)$$.
The measure across many states is $$\sum_x f(x)$$ or $$\int f(x) dx$$.
Measure theory studies measurements that behave nicely.
But measure theorists are naughty, so they came up with various functions that do not behave nicely.

Let's make the term "behaves nicely" more concrete.
Measures should satisfy a bunch of axioms, the most obvious of which are non-negativeness $$f(x) \ge 0, \forall x \in X$$ and finiteness $$m(X) = \int_X f(x) dx < \infty$$.
Instead of vague finiteness, we ask it to satisfy the normalized value of 1, i.e., $$m(X) = 1$$.

Measurements that behave nicely are *robust* in the sense that the "magnitude" is finite, and by magnitude, we mean norm.
The $$L^p$$ norm of $$f$$ is $$\big( \int \lvert f(x) \rvert^p dx \big)^{1/p}$$.
Since $$f$$ is always non-negative, it should be clear that we have chosen the $L^1$ norm to canonical measure of $$f$$ on $$X$$.

This gets more complicated because measure theorists are really naughty, but also really smart.
Sometimes, you may want to surround your enemy everywhere, slowly close in on them, and then make sure to capture them without having them escape.
Measure theorists do this to some function of interest by studying a sequence of functions that converge to it, i.e., $$f_n \to f$$ as $$n \to \infty$$.
The function can converge in two ways, either *point-wise* or *uniformly*, depending on how we measure the difference.

Let us consider a simple construction.
Suppose my measurement function is really naughty and oscillates wildly within a range of, say, $$[0, \epsilon]$$.

TODO: show a simple example about the "epsilon of room" trick.

---

A measure can be finite, yet its measurement vanishes—journeying beyond the infinite horizon, diffusing itself infinitely, selling its soul to reach the infinite heights, or wandering back and forth and dying slowly.

This isn’t Zen poetry. These are convergence phenomena of some exotic functions. It’s a peculiarity of measure theory that makes it simultaneously intriguing yet boring at the same time.

The above functions correspond respectively to examples 1.5.2-5 of “An Introduction to Measure Theory” by Terrence Tao.


## Escaping into horizontal infinity.

This function is literally a box that travels to the right direction forever, one step at a time. Quite simple.

$$
f_n(x) = 1_{[n,n+1]}(x)
$$

![](/assets/img/measuretheory/horizontal_infinity.gif)


## Escaping into width infinity.

This function divides its mass along the x-axis, sort of squashing itself flat. Imagine flattening a dough with your hand. It’s the same mass of dough, but it becomes thinner and wider as you flattening it.

$$
f_n(x) = \frac1n\,1_{[0,n]}(x)
$$

![](/assets/img/measuretheory/width_infinity.gif)


## Escaping into height infinity.
AKA *escaping into vertical infinity*.

I thought calling it *height infinity* is more accurate since it is almost a reflected version of the *width infinity* case.

$$
f_n(x) = n\,1_{[1/n,\,2/n]}(x)
$$

![](/assets/img/measuretheory/height_infinity.gif)


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

It’s the kind of degeneracy that measure theorists love and find interesting. Indeed, it doesn’t converge in any sense except in measure and in $L^1$ norm.

![](/assets/img/measuretheory/typewriter_sequence.gif)

## Summary

The above functions and their convergences can be summarized the the tables below.

| Sequence | Pointwise? | Uniform? | Almost everywhere? | $L^1$ | $L^2$ | $L^\infty$ | Notes |
|---|---|---|---|---|---|---|---|
| $1_{[n,n+1]}$ | Yes, everywhere | No | Yes | No | No | No | Mass translates right; norms stay constant |
| $\frac1n 1_{[0,n]}$ | Yes, everywhere | Yes | Yes | No | Yes | Yes | Height goes to 0 uniformly, but total $L^1$ mass stays 1 |
| $n\,1_{[1/n,\,2/n]}$ | Yes, everywhere | No | Yes | No | No | No | Support shrinks, height blows up, $L^1$ mass stays 1 |
| Typewriter sequence | No | No | No | Yes | Yes | No | Visits every dyadic subinterval; converges in measure and in $L^p$ for finite $p$, but not pointwise |

| Sequence | In measure? | Why pointwise / a.e. fails or succeeds |
|---|---|---|
| $1_{[n,n+1]}$ | No on $\mathbb{R}$ | For any fixed $x$, the interval eventually moves past $x$ |
| $\frac1n 1_{[0,n]}$ | Yes | For fixed $x$, the value is eventually $1/n\to 0$ |
| $n\,1_{[1/n,\,2/n]}$ | Yes | For fixed $x>0$, the shrinking interval eventually lies to the left of $x$ |
| Typewriter sequence | Yes on $[0,1]$ | For every $x\in[0,1]$, infinitely many terms are 1 and infinitely many are 0 |

~

Oftentimes, measure theory is solely embraced as a scarecrow against those who get easily intimidated by rigor.
For example, some researchers *love* to say “sigma algebra” whenever they can and in the most unnecessary places.
It's like flexing your muscles during an interview.

Perhaps the most important lesson I learned after I skimmed Tao’s book is that edge cases are the force that pushes us into narrower and more sophisticated mathematics.
We specialize and generalize our definitions to rigorously cover all of those cases.
But at the end of the day, what I need as a machine learning researcher is quite simple: something that works almost everywhere and allows swapping differentials and integrals.
Keep your sigma boy out of my face.
