---
layout: post
title:  Three Ways to Escape to Infinity (and One More)
date:   2025-11-02 20:42:43 +0900
academic: true
---

DRAFT

The concept of infinity is central to math and is arguably one of the fundamental phenomena on which calculus and modern analysis are built on.

Interestingly, as absurd as it may sound to those who haven't heard of Cantor, one infinity can be "bigger" than another infinity! A concrete example is the infinite count of the natural numbers (one, two, three, etc) and the real numbers (0.001, 0.1, 0.99999, 1.5, etc). Even the real interval $[0,1]$ itself is bigger than the natural numbers.

Anyway, the kind of infinity we are interested in here is the *convergence of an infinite sequence*.
The canonical example is the sequence:

$$
x_n = 1/n.
$$

As $n \to \infty$, we have $x_n \to 0$.

When infinity is paired with *functions*, we get a whole new can of worms.
The function can converge either *point-wise* or *uniformly*.
And then we have measurements, under which convergence depend on the norm we consider, e.g., $L^1$, $L^2$, or $L^\infty$.
These constitute a major part of what measure theory tries to precisely characterize.

~

> A function can have a measure of one, yet vanishes—journeying beyond the infinite horizon.

> A function can have a measure of one, yet vanishes—diffusing itself infinitely.

> A function can have a measure of one, yet vanishes—selling its soul to reach the infinite heights.

> A function can wander infinitely back and forth, losing its measure of one along the way—and its point in life.

This isn’t Zen poetry. These are convergence phenomena of some exotic functions. It’s a peculiarity of measure theory that makes it simultaneously intriguing yet boring at the same time.

The above functions correspond respectively to examples 1.5.2, 1.5.3, 1.5.4, and 1.5.5 of “An Introduction to Measure Theory” by Terrence Tao.
Let us get into the details.



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

I thought calling *height infinity* is more accurate since it is the reflected version of the *width infinity* case (reflected about the y=x line).

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

Oftentimes, measure theory is solely embraced as a scarecrow against those who get easily intimidated by rigor. For example, people like to say “sigma algebra” in the most unnecessary places. Perhaps the most important lesson I learned after I skimmed Tao’s book is that edge cases are the force that pushes us into narrower and more sophisticated mathematics. We specialize and generalize our definitions to rigorously cover all of those cases, but at the end of the day, what I need as a machine learning researcher is quite simple: something that works almost everywhere and allows swapping differentials and integrals.

