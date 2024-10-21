---
layout: post
title:  Log-Sobolev Meets Polyak-Łojasiewicz
date:   2024-09-08 00:00:00 +0000
author: Abdulla Jasem Almansoori
academic: true
---
The connection between sampling and optimization have been established quite a few times in the literature, with some results going back 40 years ago. Here, I will talk about a connection between two seemingly unrelated inequalities (at least to people working in optimization). It's very obvious in hindsight, but I found it quite interesting and worth sharing.

<!-- Helper math commands (hide them after the first section) -->
$$\newcommand{\E}{\mathbb{E}}$$

---

## LS

A distribution $$\nu$$ satisfies **Log-Sobolev (LS) inequality** with $$\alpha > 0$$ if, for all distributions $$\rho$$, the following holds

$$
\begin{equation}
    H_\nu(\rho) \leq \frac{1}{2\alpha}J_\nu(\rho),
    \tag{LS}
\end{equation}
$$

where $$H_\nu(\rho)$$ is the KL-divergence and $$J_\nu(\rho)$$ is the relative Fisher information, i.e.,

$$
\begin{equation*}
    \E_{x \sim \rho} \left[\log\frac{\rho(x)}{\nu(x)}\right]
    \leq
    \frac{1}{2\alpha}\E_{x \sim \rho}\left[\left\|\nabla\log\frac{\rho(x)}{\nu(x)}\right\|^2\right].
\end{equation*}
$$

There are other ways to write it as well, but I found this definiton in
[(Kinoshita and Suzuki, 2022, Assumption 2)](https://proceedings.neurips.cc/paper_files/paper/2022/hash/78e839f96568985d18463044a064ea0f-Abstract-Conference.html), which seems to be the standard way to write it as we will see later.
It's called Log-Sobolev because it involves logarithms and derivatives ([Sobolev space](https://en.wikipedia.org/wiki/Sobolev_space) is a vector space of functions equipped with norms involving functions and their derivatives).

## PL
When I first saw the LS inequality, I thought that it looked suspiciously similar to the **Polyak-Łojasiewicz (PL) inequality**. A function $$f$$ with a (not necessarily unique) optimum $$x^\ast$$ satisfies the PL inequality with $$\mu > 0$$ if

$$
\begin{equation}
     f(x) - f(x^\ast) \leq \frac{1}{2\mu} \|\nabla f(x) \|^2.
     \tag{PL}
\end{equation}
$$

**Note**: a $$\mu$$-strongly convex $$f$$ is $$\mu$$-PL, but a $$\mu$$-PL function may not necessarily be even convex.
The fact that this holds is not very obvious until you see it, e.g., see [(Garrigos and Gower, 2023, Lemma 2.18)](https://arxiv.org/abs/2301.11235) for the proof, and further ahead for counter-examples of the opposite direction.

Here is an intuition that might help.
Put yourself at any optimal point, where the landscape is flattest. As we go further away and the loss increases, the gradient becomes steeper (the loss increased, so it has to). If its "steepness" dominates $$f$$, then it satisfies PL inequality, where steepness here is just the squared norm of the gradient. As you move *away* from the (arbitrary) optimum set, the gradient can get a little bumpy along the way, and that's ok, as long as the **gradient dominates $$f$$** in the squared norm sense. It can also be thought of as $$f$$ being upper bounded by a quadratic in terms of the distance to the optimum set *with respect to the metric of $$f$$* (and that we can add some small ripples for fun). The metric part comes from the fact that, when $$\nabla f (x^\ast) = 0$$, the gradient $$\nabla f(x)$$ gives a vector scaled by the underlying metric (e.g., consider linear regression or a quadratic objective, then the Hessian is the "metric" in some sense).

Note that when $$f$$ is $$\mu$$-strongly convex (which implies PL), we have $$\frac{\mu}{2}\|x-x^\ast\|^2 \leq f(x) - f(x^\ast)$$.
With an application of Cauchy-Schwarz, we can also get

$$
\begin{equation}
    f(x) - f(x^\ast) \leq \|x-x^\ast\|\|\nabla f(x) \| - \frac{\mu}{2}\|x-x^\ast\|^2,
    \tag{FDG}
\end{equation}
$$

which can be made with Young's inequality into

$$
\begin{equation}
    f(x) - f(x^\ast) \leq \frac{1}{2\alpha} \|\nabla f(x) \|^2 + \frac{\alpha - \mu}{2}\|x-x^\ast\|^2.
    \tag{PL+Error}
\end{equation}
$$

This is like a *PL inequality but with an error term*. Having $$\mu \geq \alpha$$ implies PL, and exactly so when it holds with equality, but it also *kinda* holds with an error of $$\frac{\alpha - \mu}{2}\|x-x^\ast\|^2$$ otherwise.

We will come back to these two inequalities.

## LS = PL
Going back to LS, Kinoshita and Suzuki (2022) discuss the inspiration for using the LS inequality for Langevin dynamics. It comes from an interesting paper by [Vempala and Wibisono (2019)](https://arxiv.org/abs/1903.08568), who also offer a similar intuition to the PL inequality (Figure 1) and uses the LS inequality to prove "rapid" (i.e., linear) convergence of the unadjusted Langevin algorithm on $$f$$ with bounded Hessian.
In contrast, [Karimi et al. (2016)](https://liberzon.csl.illinois.edu/teaching/Polyak-Lojasiewicz.pdf) used the PL inequality to prove linear convergence of gradient descent on functions with Lipschitz continuous gradients (i.e., bounded Hessian when it's twice-differentiable).

It's becoming clear now that LS = PL. It is, indeed, true and already mentioned by Vempala and Wibisono (2019, Sec 2.2.1) under the Talagrand inequality section. Talagrand inequality is also very interesting in itself. Let us take a quick detour.

Talagrand inequality states that, for a Gaussian measure $$\nu$$, we have

$$
\begin{equation}
    \frac{\alpha}{2} W_2(\rho,\nu)^2 \leq H_\nu(\rho),
    \tag{Talagrand}
\end{equation}
$$

where $$W_2(\rho,\nu)$$ is the Wasserstein distance (and I think the corresponding $$f$$ should have a bounded Hessian). This result was extended to arbitrary measures $$\nu$$ satisfying LS by [Otto and Villani (2000)](https://cedricvillani.org/sites/dev/files/old_images//2012/08/014.OV-Talagrand.pdf),
so we now have the stronger upper bound of $$J_{\nu}(\rho)$$ (times $$\frac{2}{\alpha}$$). Moreover, Talagrand and LS inequalities are equivalent when $$\nu$$ is log-concave.

Another interesting result in their paper is the HWI inequality in Theorem 3

$$
\begin{equation}
    H_\nu(\rho) \leq W_2(\rho,\nu) \sqrt{J_\nu(\rho)} - \frac{K}{2} W_2(\rho,\nu)^2,
    \tag{HWI}
\end{equation}
$$

where $$K$$ is the (strong-)convexity parameter, but it can be negative as well, accounting for weak-non-convexity. If you look closely, this is just the $$\text{(FDG)}$$ equation above. It is called HWI because of the quantities involved (the J is an I in the original paper). We called the corresponding inequality FDG for roughly the same reason (Function Distance Gradient). The $$\text{(PL+Error)}$$ has a corresponding version that is similarly attained from HWI with Young's inequality.

I believe the equivalence result between LS and PL is originally attributed to [Bakry and Èmery (1985)](https://eudml.org/doc/113511), who also showed that when *$$f = -\log \nu$$ is $$\alpha$$-strongly convex (equivalently, $$\nu$$ is $$\alpha$$-strongly log-concave), then $$\nu$$ satisfies LS inequality with constant $$\alpha$$*. Also, there exist non-log-concave distributions $$\nu$$ that satisfy the LS inequality, but LS implies log-concavity, just like the PL inequality.

## Show me how
A construction for showing the equivalence seems clearly possible, and it will be obvious once you see it.

Basically, PL inequality is evaluated with respect to points $$x$$, whereas LS inequality is evaluated with respect to an average of points over a distribution $$\rho$$.
In maximum likelihood estimation, we minimize $$f(\cdot) =-\log \rho(\cdot)$$, but it's different here as we want $$\rho$$ to converge to $$\nu$$. Thus, we minimize the distance between them, which is often chosen to be the KL-divergence *at the point $$x$$*.
In other words, $$f(\cdot) = \log \rho(\cdot) - \log \nu(\cdot) = \log \frac{\rho(\cdot)}{\nu(\cdot)}$$, and that's pretty much it. Taking expectation with respect to $$x$$ of the PL inequality, and assuming that $$f(x^\ast)=0$$ without loss of generality (because we can use $$f(\cdot) - f(x^\ast)$$), we have the equivalence

$$
\begin{equation}
    \E_{x \sim \rho} [f(x) - f(x^\ast)]
    = H_\nu(\rho)
    \leq \frac{1}{2\mu} \E_{x \sim \rho} [\| \nabla \log\frac{\rho(x)}{\nu (x)} \|^2]
    = \frac{1}{2\mu} \E_{x \sim \rho} [\| \nabla f(x) \|^2]
    .
\end{equation}
$$

Pretty anti-climactic, isn't?

Ok, so would the PL inequality be equal to LS on the functional $$f = H_\nu$$, and vice versa? In this case, it is not very clear.
In the appendix, I show a derivation of the gradient using the definition $$\frac{H_\nu(\rho + \delta\rho)-H_\nu(x)}{\|\delta\rho\|} \overset{\|\delta\rho\| \to 0}{\longrightarrow} \nabla_{\rho} H_\nu(\rho)$$ and the constraint $$\int \delta\rho = 1$$, which gives $$\nabla_{\rho} H_\nu (\rho) = \log \frac{\rho}{\nu}$$. Overall, we have

$$
\begin{equation}
    H_\nu(\rho)
    \leq
    \frac{1}{2\mu} \|\nabla_\rho H_\nu(\rho)\|^2
    = \frac{1}{2\mu} \|\log \frac{\rho}{\nu}\|^2
    \overset{??}{=}
    \frac{1}{2\mu} \E_{x \sim \rho} [\| \nabla_x \log\frac{\rho(x)}{\nu (x)} \|^2]
    .
\end{equation}
$$

It is not very clear whether the last equality holds or not, and I don't have the necessary background to figure this out at the moment.

## Final Thoughts (by ChatGPT)
The equivalence between the Log-Sobolev and Polyak-Łojasiewicz inequalities reveals deep connections between optimization and sampling, two seemingly different areas of mathematical research. These results are not just theoretical curiosities; they offer practical insights into designing algorithms for optimization and sampling with convergence guarantees.

Moving forward, this connection could inspire new methods for tackling high-dimensional optimization problems using tools from probability theory, and vice versa. In particular, we might explore how LS-based methods could inform the design of more robust optimization algorithms in the context of non-convex functions, where traditional convexity-based methods struggle.

This equivalence highlights the power of interdisciplinary approaches in mathematics, where ideas from one domain can often shed light on problems in another.

![ChatGPT explaining](/assets/img/ChatGPT_LS_PL.png)
*Figure 1: ChatGPT was very confident that this diagram will help clarify things up.
Apparently, ChatGPT had to sketch this diagram quickly on the dashboard of her Lexus LS 430
because she was running late for a meeting after a long manicure session.*


<br>

---

## References
1. **Dominique Bakry and Michel Émery**. "*Diffusions hypercontractives.*" Séminaire de probabilités de Strasbourg (1985).
2. **Guillaume Garrigos and Robert M. Gower**. "*Handbook of Convergence Theorems for (Stochastic) Gradient Methods.*" arxiv (2023).
3. **Hamed Karimi, Julie Nutini, and Mark Schmidt**. "*Linear Convergence of Gradient and Proximal-Gradient Methods Under the Polyak-Lojasiewicz Condition.*" ECML PKDD (2016).
4. **Yuri Kinoshita and Taiji Suzuki**. "*Improved Convergence Rate of Stochastic Gradient Langevin Dynamics with Variance Reduction and its Application to Optimization.*" NeurIPS (2022).
5. **Felix Otto and Cédric Villani**. "*Generalization of an Inequality by Talagrand and Links with the Logarithmic Sobolev Inequality.*" Journal of Functional Analysis (2000).
6. **Santosh S. Vempala and Andre Wibisono**. "*Rapid Convergence of the Unadjusted Langevin Algorithm: Isoperimetry Suffices.*" NeurIPS (2019).

<br>

---

## Appendix
Treating $$\rho$$ as a vector (i.e., $$\rho_i = \delta\rho$$), the KL-divergence after perturbing $$\rho$$ becomes

$$
\begin{align}
    H_\nu(\rho+\delta\rho) &= \sum_i (\log(\rho_i+\delta\rho_i) - \log\nu_i) (\rho_i+\delta\rho_i)
    \nonumber
    \\
    &= \sum_i (\log(\rho_i) + \frac{\delta\rho_i}{\rho_i+\delta\rho_i} - \log\nu_i) (\rho_i + \delta\rho_i)
    \nonumber
    \\
    &= H_\nu(\rho)
        + \langle \log(\rho) - \log\nu,  \delta\rho \rangle
        +\sum_i \frac{\rho_i \delta\rho_i + \overbrace{(\delta\rho_i)^2}^{\to 0}}{\rho_i+\delta\rho_i}
    \nonumber
    \\
    &= H_\nu(\rho)
        + \langle \log(\rho) - \log\nu,  \delta\rho \rangle
        +\sum_i \left(\overbrace{\frac{1}{\delta\rho_i} + \frac{1}{\rho_i}}^{1/\delta\rho_i \gg 1/\rho_i}\right)^{-1}
    \nonumber
    \\
    &= H_\nu(\rho)
        + \langle \log(\rho) - \log\nu + \mathbf{1},  \delta\rho \rangle
    \nonumber
    .
\end{align}
$$

The measure perturbation clearly does not have to be positive nor a measure (e.g.,  $$\rho = (0.5, 0.5)$$ and $$\delta\rho=(-0.1, 0.1)$$). However, it should satisfy $$\sum_i \delta \rho_i = 0$$, which follows from $$\sum_i \rho_i=1$$.
Thus, we have that $$\langle \mathbf{1},  \delta\rho \rangle = 0$$, so

$$
\begin{equation}
    \lim_{\|\delta\rho\| \to 0} \frac{H_\nu(\rho+\delta\rho) - H_\nu(\rho)}{\|\delta \rho\|}
     = \lim_{\|\rho\| \to 0} \langle \underbrace{\log\rho - \log\nu}_{\nabla_\rho H_\nu(\rho)},  \frac{\delta\rho}{\|\delta \rho\|} \rangle
     .
     \nonumber
\end{equation}
$$

In the continuous case, we have $$\nabla_\rho H_\nu(\rho) = \log \rho - \log \nu$$ in the sense that

$$
\begin{equation}
    \langle g(\rho,\nu),  \frac{\delta\rho}{\|\delta \rho\|} \rangle = \int g(\rho(x),\nu(x))\frac{\delta\rho(x)}{\|\delta \rho\|} dx
    .
     \nonumber
\end{equation}
$$

Indeed,

$$
\begin{equation}
    \langle \nabla_\rho H_\nu(\rho),\rho \rangle = \int (\log\rho(x) - \log\nu(x)) \rho(x) dx = H_\nu(\rho)
    .
    \nonumber
\end{equation}
$$

The norm can be $$\int \lvert\delta\rho(x)\rvert^2dx$$, but note that $$\|\rho\|_1$$ does not necessarily have to be equal to 1 or 0. In fact, it can be larger than 1. In the example above, $$\|\rho\|_1 = 0.2$$. If we consider the same example but taken to the extreme, we can see that we can take it up until $$\|\rho\|_1 = 2$$, which is the largest possible L1 (i.e., total variation) norm.

When we assume a measure $$\rho$$ with bounded second moment, we mean it in the sense that it corresponds to $$\|\rho\|_2 < \infty$$, so that the gradient is well-defined. For example, a dirac delta measure does not satisfy $$\|\rho\|_2 < \infty$$, so the gradient of this measure is not well-defined.
