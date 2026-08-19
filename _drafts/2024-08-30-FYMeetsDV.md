---
layout: post
title:  Fenchel-Young Meets Donsker-Varadhan
date:   2026-08-18 00:00:00 +0000
academic: true
---

In the last "X meets Y" battle, we've seen how a *strong growth* property of a function can be defined in two seemingly unconnected fields but end up being equivalent under the right assignment of objects. In this post, we will see the same phenomenon occuring for a fundamental *variational/dual* property, which is about the the amount of "slack" left after removing a simple, constrained slice from a function.

## FY

The [Fenchel-Young inequality](https://en.wikipedia.org/wiki/Convex_conjugate#Fenchel's_inequality) is one of the most beautiful and powerful inequalities in convex analysis.

Let's quickly define the basics.
A differentiable (because I'm lazy) convex function is a function $$f : \mathbb{R}^d \to \mathbb{R}$$ such that for any vectors $$x, y \in \mathbb{R}^d$$, we have

$$
\begin{equation}
    f(x) - f(y) \geq \langle x - y,\, g \rangle, \qquad g := \nabla f(y).
    \tag{CVX}
\end{equation}
$$

Put it simply, if you plot the function, then it should always be above its tangent. That's *convexity* in a nutshell. You can go super fancy and rigorous with the details, generalizations, and extensions if you want, but I won't.

But I'm afraid I have to... well, just a little bit.

**Fenchel-Young (FY) inequality.**
The FY inequality simply says that, for any convex $$f$$ and its **convex conjugate** $$f^\ast$$, we have

$$
\begin{equation}
    f(x) + f^\ast(g) \geq \langle x, g \rangle, \qquad \forall x \in \mathbb{R}^d,\ g \in \mathbb{R}^d
    \tag{FY}
\end{equation}
$$

Doesn't it look kinda... hot? Ahem, I mean, it has this kind of *symmetry + simplicity + depth*, you know.
But what is a *convex conjugate* in the first place? The FY inequality itself almost defines it:

$$
\begin{equation}
    f^\ast(g) := \sup_x \, \{ \langle x, g \rangle - f(x) \}.
    \tag{Conj}
\end{equation}
$$

In other words, the $$\sup_x$$ part just gives the tightest $$f^\ast$$ that satisfies (FY) pointwise, i.e., per $$g$$.

Using $$g$$ as the conjugate variable may not be standard, but I'm doing it here on purpose.
If you were thinking: "$$g$$ is often reserved for gradients, so this is confusing", then you're right because $$f^\ast$$ is actually a function of gradient-like vectors rather than positions, i.e., vectors that lie in the conjugate space (where the conjugate space of $$\mathbb{R}^d$$ is itself).

### Intuition

These inequalities look opaque at first glance, but they do offer intuitive interpretations.
The first intuition is *mathematical*, which is the right intuition in my opinion, and from which the inspiration for convex conjugacy is clearest.
The second is *geometric*, which comes straight from visualizing the definition.

**Mathematical intuition.**
Start by looking at (FY).
Next, look at (CVX) and notice how the part that depends on $$x$$ can be matched with (FY).
Now try to subsume the $$y$$ part of (CVX) under the $$f^\ast(g)$$ part of (FY) assuming fixed $$g$$, i.e., $$g$$ doesn't depend on $$y$$.

$$
    f(x) + \underbrace{\langle y, g \rangle - f(y)}_{\text{tighest at }f^\ast(g)} \geq \langle x, g \rangle.
$$

Define the quantity $$h(y;g) := \langle y, g \rangle - f(y)$$, where $$g$$ here should be thought of as an arbitrary gradient.
By the definition of the convex conjugate, we have $$f^\ast(g) = \sup_y h(y;g)$$.
This means that the convex conjugate is the tightest "slack" you can get out of $$f$$ at a specific "slope",
where slack at $$g$$ is quite literally the quantity $$h(y;g)$$.
This is the best slack allowed from using (CVX), and you can think of (FY) as "defining" convexity and convex conjugacy in one inequality.

Not all convex functions satisfy (CVX) as nicely as you would like.
You can always construct instances of convex $$f$$ where convexity is just barely satisfied (like a constant function that is infinity at the boundaries), but it's more instructive to first study the nice ones to understand how convexity behaves.
The nice convex functions are called *strongly convex*, which is ideal because you know that there is some nice degree of strict convexity everywhere (the parabola is the canonical example).
Now, given a specific gradient $$g$$, you can think of the convex conjugate (in the ideal case discussed here) as a quanitity that is maximized at the point on which $$g$$ was evaluated.
For example, if we know that $$g=\nabla f(y)$$, then $$f^\ast(g) = f^\ast(\nabla f(y)) = y$$, so the convex conjugate is just the inverse map of the gradient, i.e., $$f^\ast = (\nabla f)^{-1}$$.
Strongly convex functions demonstrate the operational meaning of $$f^\ast$$ most clearly,
and you can imagine that this meaning starts to deteriorate as you move further away from convexity.

**Geometric intuition.**
The geometric intuition comes from [this StackOverflow page](https://math.stackexchange.com/questions/1874482/geometric-intuition-of-conjugate-function).
It provides a way to visualize the equation of the convex conjugate.
I'll just quote Julek's answer here:

> To me the best interpretation is economic. Interpret  𝑓(𝑥)  as the cost to produce the quantity  𝑥  of some product and interpret  𝑦  as the market price per unit. Now notice that  𝑓∗(𝑦)  represents the optimal profit at given prices  𝑦 . The quantity  𝑥𝑦  represents revenue from sales and  𝑓(𝑥) represents production costs.
> 
> Now for the geometrical interpretation. If you sketch the graph of the costs of production  𝑓(𝑥)  and assume it convex, continuous, and differentiable, you will see that the point of optimal production, given prices  𝑦 , is given by  𝑦−𝑓′(𝑥)=0 , and this can be found graphically with a ruler, looking for the tangent in the cost curve with the same slope  𝑦 . If you place the ruler in that tangent point, it can be seen that the ruler intersection with the vertical axis will give  −(𝑥𝑦−𝑓(𝑥)) .
> 
> This is a very useful calculating device. Provided only with the graph of  𝑓(𝑥)  and a ruler, the analyst is able to turn the ruler and find what is the optimal profit for each possible price. This can be plotted into another piece of paper. Then given any price  𝑦  he is able to find what was the optimal profit. Without noticing, he has discovered the conjugate function.

The following figure is also taken from the same page, due to [Dmitri Bertsekas from his lecture notes](https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/resources/index.html).

![Geometric intuition of convex conjugate](/assets/img/fy-meets-dv/convex-conjuagte.png)

In general, I don't like to interpret the *values* of $f^\ast$ themselves because they're confusing.
They're literally the largest "difference" between $$f(y)$$ and $$\langle y, g \rangle$$ for each $$g$$ (and the difference is not necessarily positive), and that's what the definition says.
There is nothing deeply insightful about the geometric intuition in my opinion; its operational meaning strictly comes from its role in (CVX), and hence its role in the duality gap and its interpretation as an optimality certificate in optimization.


## DV

I first saw [Donsker and Varadhan's Variational Formula](https://en.wikipedia.org/wiki/Kullback–Leibler_divergence#Duality_formula_for_variational_inference) on Wikipedia while looking for at some properties or proofs of KL divergences.
Same as before, when I looked at the formula, I immediately thought: "that's just a convex conjugate but for distributions".
Here is the an excerpt from the [Wikipedia article linked above](https://en.wikipedia.org/wiki/Kullback–Leibler_divergence#Duality_formula_for_variational_inference).

**Donsker-Varadhan (DV) Variational Formula.**
> Let $$\theta$$ be a set endowed with an appropriate $$\sigma$$-field $$\mathcal{F}$$,
and two probability measures $$P$$ and $$Q$$, which formulate two probability spaces $$(\theta, \mathcal{F}, P)$$ and $$(\theta,\mathcal{F},Q)$$, with $$Q\ll P$$.
($$Q\ll P$$ indicates that $$Q$$ is absolutely continuous with respect to $$P$$.)
Let $$h$$ be a real-valued integrable random variable on $$(\theta,\mathcal{F},P)$$.
Then the following equality holds
> $$
    \log \mathbb{E}_P[\exp h] = \sup_{Q\ll P} { \mathbb{E}_Q[h] − \mathbb{D}_{\mathrm{KL}} (Q \, || \, P) }.
> $$
> Further, the supremum on the right-hand side is attained if and only if it holds
> $$
    \frac{Q(d \theta)}{P(d \theta)} = \frac{\exp h(\theta )}{\mathbb{R}_{P}[\exp h]},
> $$
> almost surely with respect to probability measure P, where $$\frac{Q(d \theta)}{P(d \theta)}$$ denotes the Radon-Nikodym derivative of $$Q$$ with respect to $$P$$.

I think this is even more general than FY.
What I see is the correspondence

$$
\begin{align*}
    \mathbb{E}_Q[h] &\to f(Q) \\
    \mathbb{D}_{\mathrm{KL}} (Q \, || \, P) &\to \langle \frac{Q(d \theta)}{P(d \theta)},\, Q \rangle \\
    \log \mathbb{E}_P[\exp h] &\to f^\ast(P)
\end{align*}
$$

The only issue is the **flipped sign**.

[TODO]

---

Useful references:
1. [Lectures on the Large Deviation Principle](https://math.berkeley.edu/~rezakhan/LD.pdf).

2. [Reconciling Donsker-Varadhan definition of KL divergence with the "usual" definition](https://math.stackexchange.com/questions/3640450/reconciling-donsker-varadhan-definition-of-kl-divergence-with-the-usual-defini)

3. [What exactly is the relationship between Donsker-Varadhan variational formula and the Laplace principle?](https://mathoverflow.net/questions/432194/what-exactly-is-the-relationship-between-donsker-varadhan-variational-formula-an)