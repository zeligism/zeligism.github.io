---
layout: post
title:  Task Market
date:   2023-01-01 00:00:00 +0000
academic: true
---

#### Discovery Phase (RIP) ⚰️:
1. **Research** problems in the industry that would benefit from AI but have high-quality data mostly in private silos/devices, so that collaboration is beneficial.
2. **Identify** industry need for abundant high-quality data, and whether an AI solution would be niche or more generally useful.
3. **Probe** the industry for a response regarding the demand of a collaborative AI solution and supply of private, high-quality data. This would be done by conducting surveys, holding meetings with businesses, etc.

#### Requirement:
A **collaboration incentive** between at least two **private data sources**.

#### Business model:
The business model is freemium federated learning platform.
Cost of implementation and operation should initially be low and mostly rely on seed fund.
Money is generated as demand for such services grow.

Premium services would include early access to state-of-the-art algorithms, more personalization, etc.
This is to be decided later as the company grows.
However, it is important to understand the financial requirement and projections for such a business model.
We are hoping that this business would be subsidied as part of the UAE's AI strategy, as it might eventually lead to the UAE having an advantage over the best models for many tasks.

The demand for participation depends on the quality of the services, but the quality depends on the participants themselves.
This is a classical catch 22 siutation, which we can circumvent by a well-designed seeding/kick-starting process.

#### Seeding:
Early adopters should get more benefits (discounts, services, personalization, etc).
But that may not be enough.

At least two clients are required.
The clients should be **seeking AI services in the first place**, and the market has a plenty of demand for that.
However, in order to proceed, they should also be **willing to collaborate**, or at least share to us **their model, and NOT their data**.
The model will never be shared with other clients.

The difference between the model and the data should be very clearly and thoroughly explained to the clients.
The use of differential privacy and other security protocols should also be emphasized and explained in layman's terms.

#### Operation

In order to incentivize more clients, the initial clients should be such that their local data is of at least of average quality and quantity, so that collaboration would yield a competitive model (compare to having the worst clients participate).
The best clients will not be willing to participate, even though their private model might improve, because this would also lead to *the worst clients having models that are as good as the best one*, which would significantly decrease the advantage that the best clients initially had.

One way to mitigate such a scenario is by having the worst clients **pay** for the service and the best clients **get paid** for the service, while the average client would use the service for free.
This should be the case when the clients are actually **offering their model as a service**.
However, if the clients are only using this model locally (e.g., for safety monitoring), then there would be no loss of advantage.

Another way would be for the worst client to receive only a portion of the **payoff**.
The payoff is a sum of fixed payments each company put before each round.
The payoff should be proportional to the **quality** of the client.
The fixed payment should be such that clients receiving less payoffs are insignificant to the system.

The exact numbers of payoffs and payments should be determined by a **task market**.
This market should by simply driven by demand and supply and market prices.
For example, the fixed payment should be chosen such that it can cover at least the cost of operation (training at the server, communication with clients and other services, etc.), and so on.


