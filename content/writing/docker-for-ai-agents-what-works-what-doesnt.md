---
title: "Docker for AI Agents: What Works, What Doesn't"
date: "2026-11-21"
author: "taohq"
description: "A grounded look at Docker's agent stack: microVM isolation, the MCP Gateway, AI Governance and Model Runner — and the seams Docker's own docs admit to."
---

[We argued the new Docker rebrand was necessary](/writing/the-rebrand-docker-had-to-make). Necessary is not the same as good. This piece is the actual product review: what Docker's agent stack does well, where the seams are, and what the sources won't tell you.

One note on method. Everything below comes from Docker's own announcement and documentation, plus one independent trade-press piece — not from the launch-page adjectives. Where Docker's docs admit a limitation, that's the strongest critique available, because it's the vendor telling you the boundary itself.

## The stack, in one paragraph

Docker Sandboxes run AI agents in isolated microVM environments, local or on Docker-managed cloud compute, managed through the `sbx` CLI. The MCP Gateway routes agent tool calls through a single authenticated and logged chokepoint. Docker AI Governance, launched May 2026, puts an admin console over both: network, filesystem, credentials and MCP tools, one policy model. Docker Model Runner serves models locally with OpenAI- and Ollama-compatible APIs. Together they're the substance under the "Built to Run on Trust" rebrand.

## What works

**The isolation is real isolation.** Each agent gets its own microVM with its own Linux kernel. The docs are precise about why that matters: containers share the host kernel, a sandbox VM cannot access host processes, files, or resources outside its boundaries. Five layers sit between the agent and your machine — hypervisor, network, Docker Engine, workspace, credential proxy — and the docs state the philosophy outright: the hypervisor boundary is the isolation control, not in-VM privilege separation.

**Egress is default-tight.** All outbound TCP passes through a proxy on your host that enforces network policy; a connection is allowed only when a rule matches its destination. Outbound UDP is disabled by default, ICMP is blocked. That is the correct bias for something whose behavior you cannot predict.

**Credentials stay on the host.** Keys are never passed into the VM. The host-side proxy intercepts outbound API requests and injects authentication headers before forwarding. The agent uses your accounts without ever holding your secrets.

**Docker itself is sandboxed.** A separate Docker Engine runs inside the sandbox, so the agent's builds happen in its own VM. The docs put it in one line: the agent has no path to your host Docker daemon.

**MCP has a chokepoint.** Every tool call through the gateway can be authenticated, authorized and logged before it reaches the external system. Under AI Governance, unapproved MCP servers are blocked by default, with org-wide policies team rules can tighten but not loosen.

**Local model serving is pragmatic.** Model Runner pulls from Docker Hub, any OCI registry or Hugging Face, speaks OpenAI- and Ollama-compatible APIs, and integrates with the tools people actually use — Cline, Continue, Cursor, Aider. llama.cpp is the default engine on all platforms; vLLM is there for NVIDIA-backed production throughput.

**The pricing floor is sane.** The `sbx` CLI and local sandbox compute are free, including for commercial work. Cloud compute is pay-as-you-go. Central policy management for orgs is a separate paid subscription.

## What doesn't

Here's the part Docker deserves credit for writing down, because a marketing-only company would not.

**Direct mount is no boundary at all.** Mount your working tree read-write and, in the docs' own words, there is no boundary between the agent's edits and your host filesystem. Hard links can expose files outside the workspace, because policies evaluate the workspace path rather than other links to the same file.

**The agent can weaponize your own triggers.** An agent with write access to the repo can author Git hooks, CI config and IDE config that execute when you commit, push, build or open your editor. The docs' advice is to review before those actions run — which is correct advice, and also an admission that the sandbox's guarantees end where your automation begins.

**Clone mode protects files from modification, not from reading.** Clone your repo into the sandbox and the host copy is safe from edits — but the agent can still read everything, including untracked and gitignored files. The docs say it plainly: clone mode protects your host repository from modification, not from inspection. Your `.env` is still in the room.

**MCP escapes through stdio.** Local stdio MCP servers registered through the gateway run on the host, outside the sandbox VM — and if one starts a Docker container, it uses your host Docker. The chokepoint model has a documented side door.

**Small leaks are documented too.** Sandbox processes can write text to your host clipboard. SSH agent forwarding is on by default, so any sandbox process can ask the forwarded agent to authenticate or sign as you.

**Model Runner has no authentication.** The docs state it flat: the Model Runner API is not authenticated, so any client that can reach it — including other containers on the same network — can pull, load and run models.

**The governance layer has the least public substance.** The launch post covers the policy model and audit events in convincing detail, but in what we could retrieve it never states pricing or packaging tiers, and the docs we read don't state host OS support or whether Sandboxes are GA or preview. None of that means anything is wrong. It means a buyer's due diligence has open questions the published sources don't close.

## The honest verdict

The strongest thing Docker has built is the part marketing talks about least: a runtime where the security model is enforcement, not suggestion, and where the failure modes are written down by the vendor instead of discovered by you. The weakest parts are exactly where you'd expect — every seam where the sandbox touches the richer environment around it: mounts, Git hooks, stdio MCP, the clipboard, an unauthenticated local API.

Docker's own guidance for the residual risk is the best line in the whole documentation set: treat sandbox-modified workspace files the same way you would treat a pull request from an untrusted contributor. That is the correct mental model for every agent tool on the market, not just this one — and the fact that Docker says it about its own product is the most trustworthy thing about the launch.

We build agents into products; the runtime they'll run on is not an abstraction to us. This is the direction the whole industry has to go, and the first serious attempt at it is further along than we expected.
