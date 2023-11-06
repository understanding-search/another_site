---
title: "What is UnSearch?"
draft: false
---
# Understanding Search in Transformers

> I'm now realizing that many folks assume there must be somebody on earth who knows how LLMs work. This is false. Nobody knows how they work or how to program one. We know how to find LLMs using SGD, but that doesn't tell us anything about how they work or about how to program one
> - [@RatOrthodox](https://twitter.com/RatOrthodox/status/1604877371114389505)

Most recent ML papers start with a long description of how Transformers have been incredibly successful in a huge variety of tasks. Capabilities are advacing rapidly, but our understanding of *how* Transformers do what they do is limited. There is lots of good mechanistic interpretability research being done[^mech_interp], and this project aims to contribute to that growing body of literature. In particular, we focus on the importance of search[^search_important] and attempt to make progress understanding how search happens in transformers.

[^search_important]: [Nicholas Kees Dupuis and Janus, 2022](https://www.alignmentforum.org/posts/FDjTgDcGPc7B98AES/searching-for-search-4)
[John S. Wentworth, 2022](https://www.alignmentforum.org/posts/6mysMAqvo9giHC4iX/what-s-general-purpose-search-and-why-might-we-expect-to-see).
[^mech_interp]: Neel Nanda has a [good list](https://dynalist.io/d/n2ZWtnoYHrU1s4vnFSAQ519J#z=eL6tFQqNwd4LbYlO1DVIen8K).

In this project, we aim to:

- gain a mechanistic understanding of how transformers implement search for toy tasks[^toy_tasks], specifically mazes
- explore how the search process can be retargeted, ensuring that the AI system is aligned to human preferences
- attempt to find scaling laws for performance, corrigibility, and interpretability on search-oriented tasks and compare them to existing scaling laws

[^toy_tasks]: "toy" tasks here means tasks for which solutions are known, meaning both that data can be generated, and that the complexity of the task is in some sense lower -- this makes them significantly easier to study.