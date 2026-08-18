---
layout: post
title:  Fenchel-Young Meets Donsker-Varadhan
date:   2026-08-18 00:00:00 +0000
academic: true
---

In the last "X meets Y" battle, we've seen how a *strong growth* property of a function can be defined in two seemingly unconnected fields but end up being equivalent under the right assignment of objects. In this post, we will see the same phenomenon occuring for a fundamental *variational/dual* property, which is about the the amount of "slack" left after removing a simple, constrained slice from a function.

## FY

The [Fenchel-Young inequality](https://en.wikipedia.org/wiki/Convex_conjugate#Fenchel's_inequality) is one of the most beautiful and powerful inequalities in convex analysis.
First of all, a differentiable (because I'm lazy) convex function is a function $$f : \mathbb{R}^d \to \mathbb{R}$$ such that for any vector $$x \in \mathbb{R}^d$$, we have

$$
    f(x) - f(y) \geq \langle x - y,\, g \rangle, \qquad g := \nabla f(y), \quad \forall y \in \mathbb{R}^d.
$$

Put it simply, if you plot the function, then it should always be above its tangent. That's *convexity* in a nutshell. You can go super fancy and rigorous with the details, generalizations, and extensions if you want, but I won't.

But I'm afraid I have to... just a little bit.

The Fenchel-Young inequality says that, for any convex $$f$$ and its convex **conjugate** $$f^\ast$$:

$$
    f(x) + f^\ast(g) \geq \langle x, g \rangle, \qquad \forall x \in \mathbb{R}^d,\ g \in \mathbb{R}^d
$$

Doesn't it look kinda hot? Ahem, I mean, it has this kind of *symmetry + simplicity + depth*, you know.
But what is a *convex conjugate* in the first place? The inequality itself almost defines it:

$$
    f^\ast(g) := \sup_x \, \{ \langle x, g \rangle - f(x) \},
$$
which is just the tightest $$f^\ast$$ that satisfies Fenchel-Young inequality pointwise (per $$g$$).

Using $$g$$ as the variable for the convex conjugate is not standard, but I'm doing it here on purpose.
If you were thinking: "$$g$$ is often reserved for gradients, so this is confusing", then you're right because $$f^\ast$$ is indeed a function of "gradients", i.e., vectors that lie in the conjugate space (where the conjugate space of $$\mathbb{R}^d$$ is itself).

### Intuition

These inequalities should look opaque, but they do offer an intuitive interpretation.
Look at the Fenchel-Young inequality, then look at the first convexity inequality that defines convex functions.
Try to consume the $$y$$ part of the convexity inequality into the $$f^\ast(g)$$ part of the Fenchel-Young inequality (assuming fixed $$g$$).
You can actually satisfy Fenchel-Young by replacing $$f^\ast(g)$$ with $$\langle y, g \rangle - f(y)$$, but the convex conjugate is designed, by definition, to be the tightest $$f^\ast$$ across all vectors $$y$$ to satisfy Fenchel-Young.

[TODO]

A visual intuition should come naturally after running the above procedure.
Call the $$y$$ part that you consumed in place of $$f^\ast(g)$$ the **slack**.
Then, $$f^\ast(g)$$ is the least amount of slack possible at $$g$$.
It's sort of a certificate.

## DV

I first saw [Donsker Varadhan Variational Formula](https://en.wikipedia.org/wiki/Kullback–Leibler_divergence#Duality_formula_for_variational_inference) on Wikipedia while looking for at some proofs and properties of KL divergences.
Same as before, when I looked at the formula, I immediately thought: "that's just a convex conjugate but for distributions".

---

[Donsker Varadhan Variational Formula](https://en.wikipedia.org/wiki/Kullback–Leibler_divergence#Duality_formula_for_variational_inference)

[Lectures on the Large Deviation Principle](https://math.berkeley.edu/~rezakhan/LD.pdf)

[Reconciling Donsker-Varadhan definition of KL divergence with the "usual" definition](https://math.stackexchange.com/questions/3640450/reconciling-donsker-varadhan-definition-of-kl-divergence-with-the-usual-defini)

[What exactly is the relationship between Donsker-Varadhan variational formula and the Laplace principle?](https://mathoverflow.net/questions/432194/what-exactly-is-the-relationship-between-donsker-varadhan-variational-formula-an)