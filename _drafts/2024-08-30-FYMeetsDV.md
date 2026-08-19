---
layout: post
title:  Fenchel-Young Meets Donsker-Varadhan
date:   2026-08-18 00:00:00 +0000
academic: true
---

In the last "X meets Y" battle, we've seen how a *strong growth* property of a function can be defined in two seemingly unconnected fields but end up being equivalent under the right assignment of objects. In this post, we will see the same phenomenon occuring for a fundamental *variational/dual* property, which is about the the amount of "slack" left after removing a simple, constrained slice from a function.

## FY

The [Fenchel-Young inequality](https://en.wikipedia.org/wiki/Convex_conjugate#Fenchel's_inequality) (FY inequality) is one of the most beautiful and powerful inequalities in convex analysis.
First of all, a differentiable (because I'm lazy) convex function is a function $$f : \mathbb{R}^d \to \mathbb{R}$$ such that for any vectors $$x, y \in \mathbb{R}^d$$, we have

$$
\begin{equation}
    f(x) - f(y) \geq \langle x - y,\, g \rangle, \qquad g := \nabla f(y).
    \tag{CVX}
\end{equation}
$$

Put it simply, if you plot the function, then it should always be above its tangent. That's *convexity* in a nutshell. You can go super fancy and rigorous with the details, generalizations, and extensions if you want, but I won't.

But I'm afraid I have to... well, just a little bit.

**Fenchel-Young inequality.**
The FY inequality simply says that, for any convex $$f$$ and its convex **conjugate** $$f^\ast$$, we have

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
The second is *geometric*, which comes straight from the definition.
The third is *algorithmic* (or game-theoretic), which comes by viewing the convex conjugate as a game.

**Mathematical intuition.**
Start by looking at (FY).
Next, look at (CVX) and notice how the part that depends on $$x$$ can be matched with (FY).
Now try to subsume the $$y$$ part of (CVX) under the $$f^\ast(g)$$ part of (FY) assuming fixed $$g$$, i.e., $$g$$ doesn't depend on $$y$$.

$$
    f(x) + \underbrace{\langle y, g \rangle - f(y)}_{f^\ast(g)?} \geq \langle x, g \rangle.
$$

Define the quantity $$h(y;g) := \langle y, g \rangle - f(y)$$.
By the definition of the convex conjugate, we have $$f^\ast(g) = \sup_y h(y;g)$$.
This means that the convex conjugate is the tightest "slack" you can get out of $$f$$ at a specific "slope",
where slack at $$g$$ is quite literally the quantity $$h(y;g)$$.
This is the best slack allowed from using (CVX).
Not all convex functions satisfy (CVX) as nicely as you would like.
You can always construct instances of convex $$f$$ where convexity is just barely satisfied (like a constant function that is infinity at the boundaries), but it's more instructive to first study the nice ones to understand how convexity behaves.

The nice convex functions are called *strongly convex*, which is ideal because you know that there is some nice degree of strict convexity everywhere (the parabola is the canonical example).
Now, given a specific gradient $$g$$, you can think of the convex conjugate (in the ideal case discussed here) as a quanitity that is maximized at the point on which $$g$$ was evaluated.
For example, if we know that $$g=\nabla f(y)$$, then $$f^\ast(g) = f^\ast(\nabla f(y)) = y$$, so the convex conjugate is just the inverse map of the gradient, i.e., $$f^\ast = (\nabla f)^{-1}$$.
Strongly convex functions demonstrate the operational meaning of $$f^\ast$$ most clearly,
and you can imagine that this meaning starts to deteriorate as you move further away from convexity.


[TODO]

**Geometric intuition.**

[Geometric intuition of convex conjugate](https://math.stackexchange.com/questions/1874482/geometric-intuition-of-conjugate-function)

![Hello](/assets/img/fy-meets-dv/convex-conjuagte.png)
*Figure 1: A black box does a bunch of calculations on the input $$x$$, and then spits the output $$y$$ out. Machine learning is about learning the black box itself given input/output examples $$(x,y)$$. from .*)

A visual intuition should come naturally after running the above procedure.
Think of $$f^\ast(g)$$ as a function of gradients rather than positions.
Again, the convexity inequality directly says that the function $$f(x)$$ is above the tangent line, or linear approximation, at any point $$y$$, which is written $$f(x) \geq f(y) + \langle x - y,\, g \rangle$$, where $$g$$ is the gradient at $$y$$.
The tangent is just a straight line, but $$f$$ can a bowl or something, so the surface of the bowl is higher than the line, and becomes even higher the further you go.
The "further you go" part is controlled exactly by $$x$$, so when you treat it as an optimization variable and try to minimize this gap between the bowl and the line, you would intuitively think: "it's just $$y$$, the point that touches the tangent", and you would be exactly correct.
The minimizer $$x^\ast$$ of $$f(x) - \langle x,\, g \rangle$$ is the maximizer of $$\langle x,\, g \rangle - f(x)$$ because it's literally the upper bound by convexity, and the *value* of this quantity at $$y^\ast$$ is the convex conjugate *by definition*.
The value itself, $$f^\ast(g)$$, is most visually intuitive when you consider $$g=0$$, the value at flat, zero-slope points, which are the lowest points in a bowl (i.e., the minima of a convex function).
By Fenchel-Young, $$f^\ast(0)$$ is then the **slack** at optimality, or $$f(x^\ast) \geq -f^\ast(0)$$,
so it gives us some sort of a certificate of how close $$x$$ is from $$x^\ast$$ by examining $$f(x) + f^\ast(0)$$.


Now call the $$y$$ part that you consumed in place of $$f^\ast(g)$$ the **slack**.
Then, the convex conjugate $$f^\ast(g)$$ is just the smallest amount of slack achievable for some gradient/tangent/slope $$g$$ of $$f$$.
So now you may ask: "what is this *slack* thing and does it have a geometric/visual interpretation"?
Remember the symmetry in Fenchel-Young: there is this slack thing and the "anti-slack".


## DV

I first saw [Donsker Varadhan Variational Formula](https://en.wikipedia.org/wiki/Kullback–Leibler_divergence#Duality_formula_for_variational_inference) on Wikipedia while looking for at some proofs and properties of KL divergences.
Same as before, when I looked at the formula, I immediately thought: "that's just a convex conjugate but for distributions".

---

[Donsker Varadhan Variational Formula](https://en.wikipedia.org/wiki/Kullback–Leibler_divergence#Duality_formula_for_variational_inference)

[Lectures on the Large Deviation Principle](https://math.berkeley.edu/~rezakhan/LD.pdf)

[Reconciling Donsker-Varadhan definition of KL divergence with the "usual" definition](https://math.stackexchange.com/questions/3640450/reconciling-donsker-varadhan-definition-of-kl-divergence-with-the-usual-defini)

[What exactly is the relationship between Donsker-Varadhan variational formula and the Laplace principle?](https://mathoverflow.net/questions/432194/what-exactly-is-the-relationship-between-donsker-varadhan-variational-formula-an)